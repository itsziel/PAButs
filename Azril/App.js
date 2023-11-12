import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeBaseProvider } from 'native-base';
import LandingPage from './component/LandingPage';
import Event from './component/Event';
import Certificate from './component/Certificate';
import Beasiswa from './component/Beasiswa';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="LandingPage">
          <Stack.Screen
            name="LandingPage"
            component={LandingPage}
            options={{ headerShown: false }} 
          />
          <Stack.Screen
            name="Event"
            component={Event}
            options={{ headerShown: false }} 
          />
          <Stack.Screen
            name="Certificate"
            component={Certificate}
            options={{ headerShown: false }} 
          />
          <Stack.Screen
            name="Beasiswa"
            component={Beasiswa}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
