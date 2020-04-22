import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { addToCartRequest } from '../../store/modules/cart/actions';
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

export default function Home() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    async function getProducts() {
      const response = await api.get('/products');
      const data = response.data.map(product => ({
        ...product,
        formattedPrice: formatPrice(product.price),
      }));

      setProducts(data);
    }

    getProducts();
  }, []);

  const productAmount = useSelector(state =>
    state.cart.reduce((amount, product) => {
      amount[product.id] = product.amount;
      return amount;
    }, {})
  );

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
              <AddButtom onPress={() => dispatch(addToCartRequest(item.id))}>
                <CounterContainer>
                  <Icon name="add-shopping-cart" color="#fff" size={18} />
                  <CounterText>{productAmount[item.id] || 0}</CounterText>
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
