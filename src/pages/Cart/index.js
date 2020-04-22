import React from 'react';
import { View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  removeFromCart,
  updateAmountRequest,
} from '../../store/modules/cart/actions';

import { formatPrice } from '../../utils/formats';

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
  EmptyCartMessage,
} from './styles';

export default function Cart() {
  const dispatch = useDispatch();

  const { products, totalPrice } = useSelector(state => ({
    products: state.cart.map(product => ({
      ...product,
      subtotal: formatPrice(product.amount * product.price),
    })),
    totalPrice: formatPrice(
      state.cart.reduce((total, product) => {
        return total + product.price * product.amount;
      }, 0)
    ),
  }));

  function renderListFooter() {
    if (!products.length) return;

    return (
      <Footer>
        <TotalLabel>TOTAL</TotalLabel>
        <TotalValue>{totalPrice}</TotalValue>

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
                  <Price>{item.formattedPrice}</Price>
                </TextContainer>
                <ActionButton onPress={() => dispatch(removeFromCart(item.id))}>
                  <Icon name="delete-forever" size={30} color="#7159c1" />
                </ActionButton>
              </Details>
              <TotalContainer>
                <QuantityContainer>
                  <ActionButton
                    disabled={item.amount === 0}
                    onPress={() =>
                      dispatch(updateAmountRequest(item.id, item.amount - 1))
                    }
                  >
                    <Icon
                      name="remove-circle-outline"
                      size={30}
                      color="#7159c1"
                    />
                  </ActionButton>
                  <Input value={String(item.amount)} />
                  <ActionButton
                    onPress={() =>
                      dispatch(updateAmountRequest(item.id, item.amount + 1))
                    }
                  >
                    <Icon name="add-circle-outline" size={30} color="#7159c1" />
                  </ActionButton>
                </QuantityContainer>
                <Subtotal>{item.subtotal}</Subtotal>
              </TotalContainer>
            </Product>
          )}
          ListFooterComponent={renderListFooter()}
          ListEmptyComponent={() => (
            <EmptyCartMessage>Seu carrinho está vazio :(</EmptyCartMessage>
          )}
        />
      </View>
    </Container>
  );
}
