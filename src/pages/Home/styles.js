import styled from 'styled-components/native';
import { darken } from 'polished';

export const Container = styled.View`
  flex: 1;
  background-color: #141419;
`;

export const ProductList = styled.FlatList.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  margin: 20px;
`;

export const Item = styled.View`
  background-color: #fff;
  margin-right: 20px;
  width: 220px;
  border-radius: 4px;
  padding: 10px;
`;

export const Image = styled.Image`
  height: 200px;
  width: 200px;
`;

export const Title = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-size: 16px;
  color: #333;
  line-height: 20px;
`;

export const Price = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin: 5px 0 10px;
`;

export const AddButtom = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  flex-direction: row;
  align-items: center;
  background-color: #7159c1;
  margin-top: auto;
  border-radius: 4px;
`;

export const CounterContainer = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: ${darken(0.03, '#7159c1')};
  padding: 10px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
`;

export const CounterText = styled.Text`
  font-size: 16px;
  color: #fff;
  margin-left: 5px;
`;

export const AddButtomText = styled.Text`
  flex: 1;
  color: #fff;
  text-align: center;
`;
