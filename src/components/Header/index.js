import React from 'react';
import { Image } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import logo from '../../assets/images/logo.png';

import {
  Container,
  BasketContainer,
  BasketCounter,
  BasketCounterText,
} from './styles';

function Header({ navigation, cartSize }) {
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

const mapStateToProps = state => ({
  cartSize: state.cart.length,
});

export default connect(mapStateToProps)(Header);
