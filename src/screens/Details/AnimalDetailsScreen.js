import React from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.ScrollView`
  flex: 1;
  padding: 20px;
  background-color: #f5f5f5;
`;

const AnimalImage = styled.Image`
  width: 100%;
  height: 300px;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const AnimalName = styled.Text`
  font-size: 28px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
`;

const AnimalDetailsText = styled.Text`
  font-size: 18px;
  color: #555;
  margin-bottom: 10px;
`;

const AdoptButton = styled.TouchableOpacity`
  background-color: #4caf50;
  padding: 15px;
  border-radius: 10px;
  align-items: center;
  margin-top: 20px;
`;

const ButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;

const AnimalDetailsScreen = ({ route }) => {
  const { animal } = route.params;

  const handleAdopt = () => {
    Alert.alert('Parabéns!', 'Você demonstrou interesse em adotar este animal!');
  };

  return (
    <Container>
      <AnimalImage source={animal.image} />
      <AnimalName>{animal.name}</AnimalName>
      <AnimalDetailsText>Idade: {animal.age}</AnimalDetailsText>
      <AnimalDetailsText>Raça: {animal.breed}</AnimalDetailsText>
      <AnimalDetailsText>
        Descrição: {animal.description || 'Este animal é amigável e está pronto para encontrar um novo lar!'}
      </AnimalDetailsText>
      <AdoptButton onPress={handleAdopt}>
        <ButtonText>Adotar</ButtonText>
      </AdoptButton>
    </Container>
  );
};

export default AnimalDetailsScreen;