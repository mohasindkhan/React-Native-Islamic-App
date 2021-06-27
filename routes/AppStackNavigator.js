import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {createStackNavigator} from '@react-navigation/stack';

import SplashScreen from '../Components/SplashScreen';
import AuthNavigator from '../routes/AuthNavigator';
import AppNavigator from '../routes/AppNavigator';

const Stack = createStackNavigator();

const AppStackNavigator = () => {
  
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
          name="AppNavigator" 
          component={AppNavigator} 
          options={{
            headerShown: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    
  );

}

export default AppStackNavigator;
