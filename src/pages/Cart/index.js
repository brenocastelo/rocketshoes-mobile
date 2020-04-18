import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

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

export default function Cart() {
  function renderListFooter() {
    return (
      <Footer>
        <TotalLabel>TOTAL</TotalLabel>
        <TotalValue>529,99</TotalValue>

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
          data={[
            {
              id: 1,
              title: 'Tênis Couro Masculino para usar daasdadadadad',
              image:
                'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
              price: 129.99,
            },
          ]}
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
                <ActionButton>
                  <Icon name="delete-forever" size={30} color="#7159c1" />
                </ActionButton>
              </Details>
              <TotalContainer>
                <QuantityContainer>
                  <ActionButton>
                    <Icon
                      name="remove-circle-outline"
                      size={30}
                      color="#7159c1"
                    />
                  </ActionButton>
                  <Input value={String(3)} />
                  <ActionButton>
                    <Icon name="add-circle-outline" size={30} color="#7159c1" />
                  </ActionButton>
                </QuantityContainer>
                <Subtotal>538,98</Subtotal>
              </TotalContainer>
            </Product>
          )}
          ListFooterComponent={renderListFooter()}
        />
      </View>
    </Container>
  );
}
