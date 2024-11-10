// HomeScreen.js
import React from 'react';

import { Container, Title, Button,ButtonText } from './style';



const HomeScreen = ({ navigation }) => (
  <Container>
    <Title>Adote um Amigo</Title>
    <Button onPress={() => navigation.navigate('AnimalList')}>
      <ButtonText>Ver Animais</ButtonText>
    </Button>
    <Title>Encontre um lar</Title>
    <Button onPress={() => navigation.navigate('AnimalList')}>
      <ButtonText>Cadastrar Animal</ButtonText>
    </Button>
  </Container>
);

export default HomeScreen;