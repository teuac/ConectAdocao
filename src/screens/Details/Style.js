
import styled from "styled-components";

export const Container = styled.ScrollView`
  flex: 1;
  padding: 20px;
  background-color: #f5f5f5;
`;

export const AnimalImage = styled.Image`
  width: 100%;
  height: 300px;
  border-radius: 10px;
  margin-bottom: 20px;
`;

export const AnimalName = styled.Text`
  font-size: 28px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
`;

export const AnimalDetailsText = styled.Text`
  font-size: 18px;
  color: #555;
  margin-bottom: 10px;
`;

export const AdoptButton = styled.TouchableOpacity`
  background-color: #4caf50;
  padding: 15px;
  border-radius: 10px;
  align-items: center;
  margin-top: 20px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;

