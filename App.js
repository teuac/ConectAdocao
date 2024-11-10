import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';


import HomeScreen from './src/screens/Home/home';
import AnimalListScreen from './src/screens/AnimalsList/AnimalListScreen';
import LoginScreen from './src/screens/Login/LoginScreen';



const Stack = createStackNavigator();

export default function App() {

  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="Home" component={HomeScreen} options={{title : 'ConectAdoção'}}/>
        <Stack.Screen name="AnimalList" component={AnimalListScreen} options={{title : 'ConectAdoção'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
