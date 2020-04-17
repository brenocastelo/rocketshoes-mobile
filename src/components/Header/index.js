import React from 'react';
import { Image } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import logo from '../../assets/images/logo.png';

import {
  Container,
  BasketContainer,
  BasketCounter,
  BasketCounterText,
} from './styles';

export default function Header() {
  return (
    <Container>
      <Image source={logo} />
      <BasketContainer>
        <Icon name="shopping-basket" color="#FFF" size={40} />
        <BasketCounter>
          <BasketCounterText>3</BasketCounterText>
        </BasketCounter>
      </BasketContainer>
    </Container>
  );
}
