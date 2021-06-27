import React from 'react';

import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

const AnnouncementScreen = () => {
  return (
    <View style = {styles.container}>
      <Text> Announcement Screen </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default AnnouncementScreen;
