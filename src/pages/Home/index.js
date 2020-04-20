import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import * as CartActions from '../../store/modules/cart/actions';
import api from '../../services/api';
import { formatPrice } from '../../utils/formats';

import {
  Container,
  ProductList,
  Item,
  Image,
  Title,
  Price,
  AddButtom,
  AddButtomText,
  CounterContainer,
  CounterText,
} from './styles';

class Home extends Component {
  state = {
    products: [],
  };

  componentDidMount() {
    this.getProducts();
  }

  getProducts = async () => {
    const response = await api.get('/products');
    const products = response.data.map(product => ({
      ...product,
      formattedPrice: formatPrice(product.price),
    }));

    this.setState({ products });
  };

  handleAddProduct = product => {
    const { addToCartRequest } = this.props;

    addToCartRequest(product.id);
  };

  render() {
    const { products } = this.state;
    const { amount } = this.props;
    return (
      <Container>
        <View>
          <ProductList
            data={products}
            keyExtractor={product => String(product.id)}
            renderItem={({ item }) => (
              <Item>
                <Image source={{ uri: item.image }} />
                <Title>{item.title}</Title>
                <Price>{item.formattedPrice}</Price>
                <AddButtom onPress={() => this.handleAddProduct(item)}>
                  <CounterContainer>
                    <Icon name="add-shopping-cart" color="#fff" size={18} />
                    <CounterText>{amount[item.id] || 0}</CounterText>
                  </CounterContainer>
                  <AddButtomText>ADICIONAR</AddButtomText>
                </AddButtom>
              </Item>
            )}
          />
        </View>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;

    return amount;
  }, {}),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
