import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
`;

export const Title = styled.Text`
  font-size: 32px;
  font-weight: bold;
  color: #4CAF50;
  margin-bottom: 20px;
`;

export const Button = styled.TouchableOpacity`
  background-color: #4CAF50;
  padding: 15px 30px;
  border-radius: 5px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
`;