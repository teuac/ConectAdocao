// AnimalListScreen.js
import React from 'react';
import { Container, AnimalCard, AnimalImage, AnimalName, AnimalInfo, AnimalDetails } from './style';
import { FlatList} from 'react-native';


const animalsMock = [{
    id: '1',
    name: 'Rex',
    age: '2 anos',
    specie: 'Dog',
    breed: 'Golden Retriever',
    image: '/src/assets/animalPhotos/rex.jpeg',
  },
  {
    id: '2',
    name: 'Lucas',
    age: '40 anos',
    specie: 'Gatinho',
    breed: 'Aquariano nato',
    image: 'https://example.com/path/to/mia.jpg',
  },]



const AnimalListScreen = ({ navigation }) => (
  <Container>
    <FlatList
      data={animalsMock}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <AnimalCard onPress={() => navigation.navigate('AnimalDetails', { animal: item })}>
          <AnimalImage source={{ uri: item.image }} />
          <AnimalInfo>
            <AnimalName>{item.name}</AnimalName>
            <AnimalDetails>{item.age} - {item.breed}</AnimalDetails>
          </AnimalInfo>
        </AnimalCard>
      )}
    />
  </Container>
);

export default AnimalListScreen;