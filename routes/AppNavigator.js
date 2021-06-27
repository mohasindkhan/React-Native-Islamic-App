import React from 'react';

import { Alert } from 'react-native';

import {createDrawerNavigator, DrawerItem} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import HomeScreen from '../Components/HomeScreen';
import PhrasesOfTheDay from '../Components/PhrasesOfTheDay';
import DeenTrackerScreen from '../Components/DeenTrackerScreen';
import ActivitiesScreen from '../Components/ActivitiesScreen';
import AnnouncementScreen from '../Components/AnnouncementScreen';
import EventCalendarScreen from '../Components/EventCalendarScreen';
import ChatsScreen from '../Components/ChatsScreen';
import Logout from '../Components/Logout';

import CustomDrawerNavigator from '../Components/CustomDrawerNavigator';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


const HomeStackScreen = ({navigation}) => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: 'lightgreen',
      },
      headerTitleStyle: {
        textAlign: 'center',
        marginRight: 50,
      },
    }}>
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        headerLeft: () => (
          <MaterialIcons
            name="menu"
            size={32}
            color="#000000"
            style={{marginLeft: 10}}
            onPress={() => navigation.toggleDrawer()}
          />
        ),
      }}
    />
  </Stack.Navigator>
);

const PhrasesStackScreen = ({navigation}) => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: 'lightgreen',
      },
      headerTitleStyle: {
        textAlign: 'center',
        marginRight: 50,
      },
    }}>
    <Stack.Screen
      name="Phrases of the Day"
      component={PhrasesOfTheDay}
      options={{
        headerLeft: () => (
          <MaterialIcons
            name="menu"
            size={32}
            color="#000000"
            style={{marginLeft: 10}}
            onPress={() => navigation.toggleDrawer()}
          />
        ),
      }}
    />
  </Stack.Navigator>
);

const DeenTrackerStackScreen = ({navigation}) => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: 'lightgreen',
      },
      headerTitleStyle: {
        textAlign: 'center',
        marginRight: 50,
      },
    }}>
    <Stack.Screen
      name="Deen Tracker"
      component={DeenTrackerScreen}
      options={{
        headerLeft: () => (
          <MaterialIcons
            name="menu"
            size={32}
            color="#000000"
            style={{marginLeft: 10}}
            onPress={() => navigation.toggleDrawer()}
          />
        ),
      }}
    />
  </Stack.Navigator>
);

const EventsStackScreen = ({navigation}) => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: 'lightgreen',
      },
      headerTitleStyle: {
        textAlign: 'center',
        marginRight: 50,
      },
    }}>
    <Stack.Screen
      name="Event Calendar"
      component={EventCalendarScreen}
      options={{
        headerLeft: () => (
          <MaterialIcons
            name="menu"
            size={32}
            color="#000000"
            style={{marginLeft: 10}}
            onPress={() => navigation.toggleDrawer()}
          />
        ),
      }}
    />
  </Stack.Navigator>
);

const AnnouncementsStackScreen = ({navigation}) => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: 'lightgreen',
      },
      headerTitleStyle: {
        textAlign: 'center',
        marginRight: 50,
      },
    }}>
    <Stack.Screen
      name="Announcements"
      component={AnnouncementScreen}
      options={{
        headerLeft: () => (
          <MaterialIcons
            name="menu"
            size={32}
            color="#000000"
            style={{marginLeft: 10}}
            onPress={() => navigation.toggleDrawer()}
          />
        ),
      }}
    />
  </Stack.Navigator>
);

const ActivitiesStackScreen = ({navigation}) => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: 'lightgreen',
      },
      headerTitleStyle: {
        textAlign: 'center',
        marginRight: 50,
      },
    }}>
    <Stack.Screen
      name="Activities"
      component={ActivitiesScreen}
      options={{
        headerLeft: () => (
          <MaterialIcons
            name="menu"
            size={32}
            color="#000000"
            style={{marginLeft: 10}}
            onPress={() => navigation.toggleDrawer()}
          />
        ),
      }}
    />
  </Stack.Navigator>
);

const ChatsStackScreen = ({navigation}) => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: 'lightgreen',
      },
      headerTitleStyle: {
        textAlign: 'center',
        marginRight: 50,
      },
    }}>
    <Stack.Screen
      name="Chats"
      component={ChatsScreen}
      options={{
        headerLeft: () => (
          <MaterialIcons
            name="menu"
            size={32}
            color="#000000"
            style={{marginLeft: 10}}
            onPress={() => navigation.toggleDrawer()}
          />
        ),
      }}
    />
  </Stack.Navigator>
);

const LogoutScreen = ({}) => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: 'lightgreen',
      }
    }}>
    <Stack.Screen
      name="Logout"
      component={Logout}
    />
  </Stack.Navigator>
);


const AppNavigator = () => {

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
      screenOptions={{headerShown: false}} 
      drawerContent={ props => <CustomDrawerNavigator {...props} /> } >
      <Drawer.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          headerTitle: 'Home'
        }}
      />
      <Drawer.Screen name="Phrases of the Day" component={PhrasesStackScreen} />
      <Drawer.Screen name="Deen Tracker" component={DeenTrackerStackScreen} />
      <Drawer.Screen name="Event Calendar" component={EventsStackScreen} />
      <Drawer.Screen
        name="Announcements"
        component={AnnouncementsStackScreen}
      />
      <Drawer.Screen name="Activities" component={ActivitiesStackScreen} />
      <Drawer.Screen name="Chats" component={ChatsStackScreen} />
    </Drawer.Navigator>

  );

};

export default AppNavigator;
