import React from 'react';

import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

const ChatsScreen = () => {
  return (
    <View style = {styles.container}>
      <Text> Chats Screen </Text>
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

export default ChatsScreen;
