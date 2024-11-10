// AnimalListScreen.js
import React, { useState } from 'react';
import { Container, AnimalCard, AnimalImage, AnimalName, AnimalInfo, AnimalDetails } from './style';
import { FlatList, TouchableOpacity, Text} from 'react-native';
import AnimalAddScreen from '../AnimalAdd/AnimalAddScreen';


const animalsMock = [{
    id: '1',
    name: 'Rex',
    age: '2 anos',
    specie: 'Dog',
    breed: 'Golden Retriever',
    image: require('../../assets/animalPhotos/rex.jpeg'),
    description: "oii, sou o rex, me adote."
  },
  {
    id: '2',
    name: 'Lucas',
    age: '40 anos',
    specie: 'Gatinho',
    breed: 'viado',
    image: require('../../assets/animalPhotos/lucas.jpg'),
    description: 'louco para acasalar'
  },]



  const AnimalListScreen = ({ navigation }) => {
    const [animals, setAnimals] = useState(animalsMock);
  
    const addAnimal = (animal) => {
      setAnimals([...animals, animal]);
    };
  
    return (
      <Container>
        <FlatList
          data={animalsMock}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <AnimalCard onPress={() => navigation.navigate('AnimalDetails', { animal: item })}>
              <AnimalImage source={item.image} />
              <AnimalName>{item.name}</AnimalName>
            </AnimalCard>
          )}
        />
  
        <TouchableOpacity
          style={{
            padding: 20,
            backgroundColor: '#4caf50',
            alignItems: 'center',
            margin: 20,
            borderRadius: 10,
          }}
          onPress={() => navigation.navigate('AnimalAddScreen', { AnimalAddScreen })}
        >
          <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold' }}>Cadastrar Novo Animal</Text>
        </TouchableOpacity>
      </Container>
    );
  };
  
  export default AnimalListScreen;