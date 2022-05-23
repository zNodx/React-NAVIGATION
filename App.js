import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/pages/Home';
import About from './src/pages/About';

const Stack = createNativeStackNavigator();

export default function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={Home} 
          options={{
            headerShown: false
          }} 
          />
        <Stack.Screen 
          name="About" 
          component={About}
          options={{
            title: 'Sobre',
            headerTitleStyle: {
              fontWeight: 'bold'
            }
          }}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}