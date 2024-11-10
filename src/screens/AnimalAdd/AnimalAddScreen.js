import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import styled from 'styled-components/native';
import * as ImagePicker from 'expo-image-picker';


const Container = styled.ScrollView`
  flex: 1;
  padding: 20px;
  background-color: #f5f5f5;
`;

const Title = styled.Text`
  font-size: 28px;
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

const AnimalImage = styled.Image`
  width: 100%;
  height: 200px;
  border-radius: 10px;
  margin-bottom: 20px;
  background-color: #ccc;
`;

const AnimalAddScreen = ({ navigation, route }) => {
  const { addAnimal } = route.params;
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [breed, setBreed] = useState('');
  const [description, setDescription] = useState('');
  const [imageUri, setImageUri] = useState(null);

  const handleImagePicker = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImageUri(result.uri);
    }
  };

  const handleAddAnimal = () => {
    if (!name || !age || !breed || !description || !imageUri) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos e selecione uma imagem.');
      return;
    }

    const newAnimal = {
      id: Math.random().toString(),
      name,
      age,
      breed,
      description,
      image: { uri: imageUri },
    };

    addAnimal(newAnimal);
    Alert.alert('Sucesso', 'Animal cadastrado com sucesso!');
    navigation.goBack();
  };

  return (
    <Container>
      <Title>Cadastrar Animal</Title>

      {imageUri ? (
        <AnimalImage source={{ uri: imageUri }} />
      ) : (
        <TouchableOpacity onPress={handleImagePicker}>
          <AnimalImage />
          <Text style={{ textAlign: 'center', color: '#888' }}>Selecione uma Imagem</Text>
        </TouchableOpacity>
      )}

      <Input placeholder="Nome do Animal" value={name} onChangeText={setName} />
      <Input placeholder="Idade" value={age} onChangeText={setAge} keyboardType="numeric" />
      <Input placeholder="Raça" value={breed} onChangeText={setBreed} />
      <Input
        placeholder="Descrição"
        value={description}
        onChangeText={setDescription}
        multiline
        numberOfLines={4}
        style={{ height: 100 }}
      />

      <Button onPress={handleAddAnimal}>
        <ButtonText>Cadastrar Animal</ButtonText>
      </Button>
    </Container>
  );
};

export default AnimalAddScreen;