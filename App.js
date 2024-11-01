import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';


import HomeScreen from './src/screens/Home/home';



const Stack = createStackNavigator();

export default function App() {

  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={HomeScreen} options={{title : 'ConectAdoção'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
