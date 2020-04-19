import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import * as CartActions from '../../store/modules/cart/actions';

import {
  Container,
  ProductList,
  Product,
  Details,
  Image,
  TextContainer,
  Title,
  Price,
  TotalContainer,
  QuantityContainer,
  Input,
  Subtotal,
  ActionButton,
  Footer,
  TotalLabel,
  TotalValue,
  FinishOrderButton,
  FinishOrderButtonLabel,
} from './styles';

function Cart({ products, removeFromCart, updateAmount, total }) {
  function renderListFooter() {
    return (
      <Footer>
        <TotalLabel>TOTAL</TotalLabel>
        <TotalValue>{total}</TotalValue>

        <FinishOrderButton>
          <FinishOrderButtonLabel>FINALIZAR PEDIDO</FinishOrderButtonLabel>
        </FinishOrderButton>
      </Footer>
    );
  }

  return (
    <Container>
      <View>
        <ProductList
          data={products}
          keyExtractor={product => String(product.id)}
          renderItem={({ item }) => (
            <Product>
              <Details>
                <Image
                  source={{
                    uri: item.image,
                  }}
                />
                <TextContainer>
                  <Title>{item.title}</Title>
                  <Price>{item.price}</Price>
                </TextContainer>
                <ActionButton onPress={() => removeFromCart(item.id)}>
                  <Icon name="delete-forever" size={30} color="#7159c1" />
                </ActionButton>
              </Details>
              <TotalContainer>
                <QuantityContainer>
                  <ActionButton
                    disabled={item.amount === 0}
                    onPress={() => updateAmount(item.id, item.amount - 1)}
                  >
                    <Icon
                      name="remove-circle-outline"
                      size={30}
                      color="#7159c1"
                    />
                  </ActionButton>
                  <Input value={String(item.amount)} />
                  <ActionButton
                    onPress={() => updateAmount(item.id, item.amount + 1)}
                  >
                    <Icon name="add-circle-outline" size={30} color="#7159c1" />
                  </ActionButton>
                </QuantityContainer>
                <Subtotal>{item.subtotal}</Subtotal>
              </TotalContainer>
            </Product>
          )}
          ListFooterComponent={renderListFooter()}
        />
      </View>
    </Container>
  );
}

const mapStateToProps = state => ({
  products: state.cart.map(product => ({
    ...product,
    subtotal: product.amount * product.price,
  })),
  total: state.cart.reduce((total, product) => {
    return total + product.price * product.amount;
  }, 0),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
