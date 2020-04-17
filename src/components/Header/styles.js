import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  background-color: #141419;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  background-color: #141419;
`;

export const BasketContainer = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
`;

export const BasketCounter = styled.View`
  position: relative;
  bottom: 13px;
  right: 16px;
  height: 20px;
  width: 20px;
  border-radius: 10px;
  background-color: #7159c1;
  justify-content: center;
  align-items: center;
`;

export const BasketCounterText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #fff;
`;
