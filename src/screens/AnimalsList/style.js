import styled from "styled-components";

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  background-color: #f5f5f5;
`;

export const AnimalCard = styled.TouchableOpacity`
  background-color: #fff;
  padding: 15px;
  border-radius: 10px;
  margin-bottom: 15px;
  flex-direction: row;
  align-items: center;
  elevation: 3;
`;

export const AnimalImage = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 10px;
  margin-right: 15px;
`;

export const AnimalInfo = styled.View`
  flex: 1;
`;

export const AnimalName = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;

export const AnimalDetails = styled.Text`
  font-size: 16px;
  color: #555;
`;