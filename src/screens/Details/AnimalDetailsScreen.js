import React from 'react';
import { Container, AnimalImage, AnimalName, AnimalDetailsText, AdoptButton,ButtonText } from './Style';
import { View, Text, TouchableOpacity, Alert } from 'react-native';




const AnimalDetailsScreen = ({ route }) => {
  const { animal } = route.params;

  const handleAdopt = () => {
    Alert.alert('Parabéns!', 'Você demonstrou interesse em adotar este animal!');
  };

  return (
    <Container>
      <AnimalImage source={animal.image} />
      <AnimalName>{animal.name}</AnimalName>
      <AnimalDetailsText>Espécie: {animal.specie}</AnimalDetailsText>
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