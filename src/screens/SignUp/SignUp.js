// src/screens/SignUpScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  padding: 20px;
`;

const Title = styled.Text`
  font-size: 32px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
`;

const Input = styled.TextInput`
  width: 100%;
  padding: 15px;
  border-radius: 10px;
  border: 1px solid #ccc;
  margin-bottom: 15px;
  font-size: 16px;
  background-color: #fff;
`;

const Button = styled.TouchableOpacity`
  width: 100%;
  padding: 15px;
  background-color: #4caf50;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

const ButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;

const SignUpScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = () => {
    if (password !== confirmPassword) {
      Alert.alert('Erro', 'As senhas não coincidem!');
      return;
    }
    if (name && email && password) {
      Alert.alert('Cadastro realizado com sucesso!');
      navigation.navigate('Login');
    } else {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
    }
  };

  return (
    <Container>
      <Icon name="user-plus" size={50} color="#4caf50" />
      <Title>Cadastro</Title>

      <Input
        placeholder="Nome Completo"
        value={name}
        onChangeText={setName}
      />
      
      <Input
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <Input
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <Input
        placeholder="Confirme a Senha"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />

      <Button onPress={handleSignUp}>
        <ButtonText>Registrar</ButtonText>
      </Button>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={{ color: '#007bff', marginTop: 20 }}>
          Já tem uma conta? Faça login
        </Text>
      </TouchableOpacity>
    </Container>
  );
};

export default SignUpScreen;