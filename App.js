import 'react-native-gesture-handler';

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import SplashScreen from './Components/SplashScreen';
import AuthNavigator from './routes/AuthNavigator';
import AppDrawerNavigator from './routes/AppDrawerNavigator';

const Stack = createStackNavigator();

import { StyleSheet } from 'react-native';

const App = () => {
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen 
          name="SplashScreen" 
          component={SplashScreen} 
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen 
          name="AuthNavigator" 
          component={AuthNavigator} 
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen 
          name="AppDrawerNavigator" 
          component={AppDrawerNavigator} 
          options={{
            headerShown: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>

  );
};

const styles = StyleSheet.create({ });

export default App;
