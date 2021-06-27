import React from 'react';

import {
  SafeAreaView,
  View,
  StyleSheet,
  Alert,
  Text
} from 'react-native';

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';


import AsyncStorage from '@react-native-community/async-storage';


const CustomDrawer = props => {

    const firstName = 'Mohasin';
    const lastName = 'Khan';

  return (
    <SafeAreaView style={{flex: 1}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{paddingTop: 0, marginTop: 0}}>
        <View style={styles.userInfoSection}>
            <Text style={styles.title}> { `${firstName.charAt(0) + '' + lastName.charAt(0)} ` } </Text>
        </View>
        <View style={{marginBottom: 5}}>
            <Text style={styles.dividerSection}> </Text>
        </View>
        <DrawerItemList {...props} />
        <View>
            <Text style={styles.dividerSection}> </Text>
        </View>
        <DrawerItem
          label={ ({}) => 
            <Text style={{marginTop: 5, color: '#000000', fontSize: 20}}>
              Logout
            </Text>
          }
          onPress={() => {
            props.navigation.toggleDrawer();
            Alert.alert(
              'Logout',
              'Are you sure? You want to logout?',
              [
                {
                  text: 'Cancel',
                  onPress: () => {
                    return null;
                  },
                },
                {
                  text: 'Confirm',
                  onPress: () => {
                    AsyncStorage.clear();
                    props.navigation.replace('AuthNavigator');
                  }
                }
              ],
              {cancelable: false},
            );
          }}
        />
      </DrawerContentScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  userInfoSection: {
    marginVertical: 30,
    marginHorizontal: 80,
    alignItems: 'center',
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    borderStyle: 'solid',
    borderWidth: 3,
    borderColor: 'transparent',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.6,
    shadowRadius: 20,
    elevation: 5
  },

  title: {
    fontSize: 30,
    paddingHorizontal: 20,
    paddingVertical: 50,
    alignItems: 'center',
    textAlign: 'center',
    color: 'green',
    fontWeight: 'bold',
  },

  dividerSection: {
    height: 3,
    width: '97%',
    backgroundColor: 'grey'
   }
});

export default CustomDrawer;
