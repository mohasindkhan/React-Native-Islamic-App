import React, {useEffect} from 'react';

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  BackHandler,
  Alert,
} from 'react-native';

const HomeScreen = props => {

  useEffect(() => {
    const backAction = () => {
      Alert.alert('Hold on!', 'Are you sure you want to exit app?', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        {text: 'YES', onPress: () => BackHandler.exitApp()},
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.mainSection}>
        <TouchableOpacity
          style={styles.touchSection}
          activeOpacity={0.5}
          onPress={() => props.navigation.navigate('Event Calendar')}>
          <View style={styles.subSection}>
            <Text style={styles.innerText}> Events </Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.mainSection}>
        <TouchableOpacity
          style={styles.touchSection}
          activeOpacity={0.5}
          onPress={() => props.navigation.navigate('Phrases of the Day')}>
          <View style={styles.subSection}>
            <Text style={styles.innerText}> Phrase of the Day </Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.mainSection}>
        <TouchableOpacity
          style={styles.touchSection}
          activeOpacity={0.5}
          onPress={() => props.navigation.navigate('Deen Tracker')}>
          <View style={styles.subSection}>
            <Text style={styles.innerText}> Deen Tracker </Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.mainSection}>
        <TouchableOpacity
          style={styles.touchSection}
          activeOpacity={0.5}
          onPress={() => props.navigation.navigate('Announcements')}>
          <View style={styles.subSection}>
            <Text style={styles.innerText}> Announcements </Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.mainSection}>
        <TouchableOpacity
          style={styles.touchSection}
          activeOpacity={0.5}
          onPress={() => props.navigation.navigate('Activities')}>
          <View style={styles.subSection}>
            <Text style={styles.innerText}> Activities </Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.mainSection}>
        <TouchableOpacity style={styles.touchSection} activeOpacity={0.5}>
          <View style={styles.subSection}>
            <Text style={styles.innerText}> TBD </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    padding: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  mainSection: {
    width: '50%',
    height: '30%',
    padding: 5,
  },

  touchSection: {
    flex: 1,
  },

  subSection: {
    marginTop: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightgreen',
    borderColor: 'lightgreen',
    borderRadius: 10,
    /* shadowColor: '#000000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.6,
    shadowRadius: 20,
    elevation: 5 */
  },

  innerText: {
    fontSize: 20,
    color: '#000000',
    fontWeight: '400',
    fontFamily: 'bookman old style',
  },
});

export default HomeScreen;
