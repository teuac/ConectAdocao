// LoginScreen.js
import React from 'react';
import { Container, Title, Icon, Input, LoginButton, LoginButtonText, SignUpText } from './styles';
import { Text, TouchableOpacity } from 'react-native';



const LoginScreen = ({ navigation }) => {
  return (
    <Container>
      <Icon source={require('../../assets/icon/connectadocao-icon.png')} />
      <Title>ConnectAdoção</Title>

      <Input 
        placeholder="Email" 
        keyboardType="email-address" 
        autoCapitalize="none" 
        placeholderTextColor="#999" 
      />
      <Input 
        placeholder="Senha" 
        secureTextEntry 
        placeholderTextColor="#999" 
      />

      <LoginButton onPress={() => navigation.navigate('Home')}>
        <LoginButtonText>Entrar</LoginButtonText>
      </LoginButton>

      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <SignUpText>Não tem uma conta? Cadastre-se</SignUpText>
      </TouchableOpacity>
    </Container>
  );
};

export default LoginScreen;