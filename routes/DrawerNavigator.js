import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';


import HomeScreen from '../Components/HomeScreen';
import PhrasesOfTheDay from '../Components/PhrasesOfTheDay';
import DeenTrackerScreen from '../Components/DeenTrackerScreen';
import ActivitiesScreen from '../Components/ActivitiesScreen';
import AnnouncementScreen from '../Components/AnnouncementScreen';
import EventCalendarScreen from '../Components/EventCalendarScreen';
import ChatsScreen from '../Components/ChatsScreen';

import CustomDrawerNavigator from '../Components/CustomDrawerNavigator';
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {

  return (

    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home"
        drawerContentOptions={{
          activeTintColor: '#000000',
          activeBackgroundColor: '#ffffff',
          marginLeft: '-3%',
          marginRight: '-3%',
          labelStyle: {
            fontSize: 20,
            fontFamily: 'bookman old style',
          },
        }}
        drawerStyle={{
          backgroundColor: 'lightgreen',
          marginTop: 10,
        }}
        drawerContent={props => <CustomDrawerNavigator {...props} />}>
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTitle: 'Home',
          }}
        />
        <Drawer.Screen
          name="Phrases of the Day"
          component={PhrasesOfTheDay}
        />
        <Drawer.Screen name="Deen Tracker" component={DeenTrackerScreen} />
        <Drawer.Screen
          name="Event Calendar"
          component={EventCalendarScreen}
        />
        <Drawer.Screen name="Announcements" component={AnnouncementScreen} />
        <Drawer.Screen name="Activities" component={ActivitiesScreen} />
        <Drawer.Screen name="Chats" component={ChatsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>

  );

};

export default DrawerNavigator;
