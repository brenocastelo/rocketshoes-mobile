import React, { Component } from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

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

  render() {
    const { products } = this.state;
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
                <AddButtom>
                  <CounterContainer>
                    <Icon name="add-shopping-cart" color="#fff" size={18} />
                    <CounterText>1</CounterText>
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

export default Home;
