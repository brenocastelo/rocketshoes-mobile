import styled from 'styled-components/native';
import { lighten } from 'polished';

export const Container = styled.View`
  flex: 1;
  background-color: #141419;
  padding: 10px;
`;

export const ProductList = styled.FlatList.attrs({
  contentContainerStyle: { paddingBottom: 20 },
})`
  padding: 10px;
  background-color: #fff;
  border-radius: 4px;
`;

export const Product = styled.View`
  border-radius: 4px;
  margin: 15px 0;
`;

export const Details = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Image = styled.Image`
  height: 128px;
  width: 128px;
`;

export const TextContainer = styled.View`
  flex: 1;
  padding: 0 5px;
`;

export const Title = styled.Text`
  font-size: 18px;
  color: #333;
  line-height: 20px;
`;

export const Price = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin: 5px 0 10px;
`;

export const TotalContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #eee;
  padding: 5px 10px;
  border-radius: 4px;
`;

export const QuantityContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Input = styled.TextInput.attrs({
  readOnly: true,
})`
  background-color: #fff;
  border: 1px solid #333;
  border-radius: 4px;
  width: 60px;
  height: 30px;
  margin: 0 10px;
  padding: 5px;
  text-align: center;
  font-size: 16px;
`;

export const Subtotal = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin: 5px 0 10px;
`;

export const Footer = styled.View``;

export const TotalLabel = styled.Text`
  text-align: center;
  font-size: 20px;
  color: #999;
  font-weight: bold;
  margin-top: 25px;
`;

export const TotalValue = styled.Text`
  text-align: center;
  font-size: 28px;
  font-weight: bold;
`;

export const EmptyCartMessage = styled(TotalLabel)`
  color: #333;
`;

export const FinishOrderButton = styled.TouchableOpacity`
  background-color: ${({ disabled }) =>
    disabled ? lighten(0.2, '#7159c1') : '#7159c1'};
  border-radius: 4px;
  padding: 10px 0;
  margin-top: 20px;
`;

export const FinishOrderButtonLabel = styled.Text`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  color: #fff;
`;

export const ActionButton = styled.TouchableOpacity``;
