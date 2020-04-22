import React from 'react';
import { Image } from 'react-native';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import logo from '../../assets/images/logo.png';

import {
  Container,
  BasketContainer,
  BasketCounter,
  BasketCounterText,
} from './styles';

export default function Header({ navigation }) {
  const cartSize = useSelector(state => state.cart.length);

  return (
    <Container>
      <Image source={logo} />
      <BasketContainer onPress={() => navigation.navigate('Cart')}>
        <Icon name="shopping-basket" color="#FFF" size={40} />
        <BasketCounter>
          <BasketCounterText>{cartSize}</BasketCounterText>
        </BasketCounter>
      </BasketContainer>
    </Container>
  );
}
