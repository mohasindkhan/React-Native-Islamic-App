import React, { useEffect, useState } from 'react';

import { ActivityIndicator, StyleSheet, View, AsyncStorage } from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import * as Animatable from 'react-native-animatable';


const SplashScreen = ({navigation}) => {

  const [animating, setAnimating] = useState(true);

    useEffect( () => {
        setTimeout( () => {
          setAnimating(false);
          AsyncStorage.getItem('userEmail').then( value =>
            navigation.navigate(
              value === null ? 'AuthNavigator' : 'AppDrawerNavigator' 
            ),
          );
        }, 5000);
    } ,[]);

  return (
    <View style = {styles.container}>
      <Animatable.View animation="fadeInLeft" delay={1000} duration={3000} style={styles.mainSection}>
        <FontAwesome5 name="mosque" size={100} color="#F85307" />
      </Animatable.View>
      <Animatable.Text animation="fadeInRight" delay={2000} duration={3000} style={styles.mainText}> Bismillah </Animatable.Text>

      <ActivityIndicator
        animating={animating}
        color="#FFFFFF"
        size="large"
        style={styles.activityIndicator} 
      />
    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1EF36D'
  },
  mainSection: {
    
  },
  mainText: {
    marginTop: 40,
    fontSize: 60,
    fontFamily: 'times new roman',
    fontWeight: '600',
    color: '#ffffff',
    textDecorationLine: 'underline'
  },

  activityIndicator: {
    alignItems: 'center',
    marginTop: 50,
    height: 80
  }

});

export default SplashScreen;
