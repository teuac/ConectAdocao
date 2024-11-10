import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';


import HomeScreen from './src/screens/Home/home';
import AnimalListScreen from './src/screens/AnimalsList/AnimalListScreen';
import LoginScreen from './src/screens/Login/LoginScreen';
import { AnimalDetails } from './src/screens/AnimalsList/style';
import AnimalDetailsScreen from './src/screens/Details/AnimalDetailsScreen';



const Stack = createStackNavigator();

export default function App() {

  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Home" component={HomeScreen} options={{title : 'ConectAdoção'}}/>
        <Stack.Screen name="AnimalList" component={AnimalListScreen} options={{title : 'ConectAdoção'}}/>
        <Stack.Screen name="AnimalDetails" component={AnimalDetailsScreen} options={{title: 'ConectAdoção'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
