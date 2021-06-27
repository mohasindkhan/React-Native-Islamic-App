import React from 'react';

import HomeScreen from '../Components/HomeScreen';
import PhrasesOfTheDay from '../Components/PhrasesOfTheDay';
import DeenTrackerScreen from '../Components/DeenTrackerScreen';
import ActivitiesScreen from '../Components/ActivitiesScreen';
import AnnouncementScreen from '../Components/AnnouncementScreen';
import EventCalendarScreen from '../Components/EventCalendarScreen';
import ChatsScreen from '../Components/ChatsScreen';

import CustomDrawer from './CustomDrawer';

import {createDrawerNavigator} from '@react-navigation/drawer';

import { StyleSheet } from 'react-native';

const Drawer = createDrawerNavigator();

const AppDrawerNavigator = () => {
  return (
    <Drawer.Navigator
    initialRouteName="Home"
      drawerContentOptions={{
        activeTintColor: '#000000',
        activeBackgroundColor: '#ffffff',
        marginLeft: '-3%',
        marginRight: '-3%',
        labelStyle: {
          fontSize: 20,
          fontFamily: 'bookman old style',
        }
      }}
      drawerStyle={{
        backgroundColor: 'lightgreen',
        marginTop: 10,
      }} 
      screenOptions={{
        headerShown: true,
        headerStyle: {
            backgroundColor: 'lightgreen',
          },
          headerTitleStyle: {
            textAlign: 'center',
            marginRight: 50,
          }}}
      drawerContent={ props => <CustomDrawer {...props} /> } >
      <Drawer.Screen name="Home Screen" component={HomeScreen} />
      <Drawer.Screen name="Phrases of the Day" component={PhrasesOfTheDay} />
      <Drawer.Screen name="Deen Tracker" component={DeenTrackerScreen} />
      <Drawer.Screen name="Activities" component={ActivitiesScreen} />
      <Drawer.Screen name="Announcements" component={AnnouncementScreen} />
      <Drawer.Screen name="Event Calendar" component={EventCalendarScreen} />
      <Drawer.Screen name="Chats" component={ChatsScreen} />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  
});

export default AppDrawerNavigator;
