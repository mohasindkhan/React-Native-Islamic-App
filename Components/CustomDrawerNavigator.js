import React from 'react';

import { 
  SafeAreaView,
  View,
  StyleSheet,
  Alert,
  Text,
  Linking
} from 'react-native';

import 
    { DrawerContentScrollView, DrawerItemList, DrawerItem } 
    from '@react-navigation/drawer';


const CustomDrawerNavigator = ({ props }) => {

    return (
      <SafeAreaView style={{flex: 1}}>
        <DrawerContentScrollView {...props}
          contentContainerStyle={{paddingTop: 0, marginTop: 0}}>
          <DrawerItemList {...props} />
          <DrawerItem
            label="Visit Us"
            onPress={() => Linking.openURL('https://aboutreact.com/')}
          />
          <View style={styles.customItem}>
            <Text
              onPress={() => {
                Linking.openURL('https://aboutreact.com/');
              }}>
              Rate Us
            </Text>
          </View>
          <DrawerItem
            label={({color}) => (
              <Text style={{color: '#000000'}}>Logout</Text>
            )}
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
                      // AsyncStorage.clear();
                      props.navigation.replace('AuthNavigator');
                    },
                  },
                ],
                {cancelable: false},
              );
            }}
          />
        </DrawerContentScrollView>
        <Text
          style={{
            fontSize: 16,
            textAlign: 'center',
            color: 'grey',
          }}>
          www.aboutreact.com
        </Text>
      </SafeAreaView>

      // <DrawerContentScrollView {...props}>
      //     <DrawerItemList {...props} />
      //     <DrawerItem
      //         label="Sign Out"
      //         onPress={ () => { } }
      //     />
      // </DrawerContentScrollView>
    );

} 

const styles = StyleSheet.create({
    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
      },
    
      userInfoSection: {
        margin: 0,
        paddingTop: 80,
        paddingLeft: 20,
        alignItems: 'center',
      },
    
      title: {
        color: '#F2777A',
        fontWeight: 'bold',
      },
    
      caption: {
        color: '#F2777A',
        fontSize: 14,
        lineHeight: 14,
        paddingBottom: 20,
      },
    
      customItem: {
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
      }
});

export default CustomDrawerNavigator;