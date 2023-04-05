import { View, Text } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Start from './src/pages/Start/Start'
import Language from './src/pages/Language/Language'
import Onboarding from './src/pages/Onboarding/Onboarding'
import Login from './src/pages/Login/Login'
import Home from './src/pages/Home/Home';
import DashBoard from './src/pages/DashBoard/DashBoard';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen
          name="Start"
          component={Start}
          
        />
        <Stack.Screen name="Language" component={Language} />
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="DashBoard" component={DashBoard} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App