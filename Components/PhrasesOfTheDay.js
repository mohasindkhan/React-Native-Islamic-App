import React, {useState} from 'react';

import Feather from 'react-native-vector-icons/Feather';

import {StyleSheet, View, Text, FlatList, TouchableOpacity} from 'react-native';

const PhrasesOfTheDay = props => {
  const [arrayOfPhrases, setArrayOfPhrases] = useState([
    {
      id: 1,
      ArabiText: 'kayfa haluk?',
      EnglishText: 'How are you doing?',
      isFavourite: false,
    },
    {
      id: 2,
      ArabiText: 'ma asmak?',
      EnglishText: 'what is your name?',
      isFavourite: false,
    },
    {
      id: 3,
      ArabiText: 'saeid bilaqayik?',
      EnglishText: 'Glad to meet you?',
      isFavourite: false,
    },
    {
      id: 4,
      ArabiText: 'azyk?',
      EnglishText: 'How are you?',
      isFavourite: false,
    },
    {
      id: 5,
      ArabiText: 'nasaf liliizeaj?',
      EnglishText: 'Sorry for the inconvenience?',
      isFavourite: false,
    },
    {
      id: 6,
      ArabiText: 'hal hdha muhima hqana?',
      EnglishText: 'Is this really important?',
      isFavourite: false,
    },
    {
      id: 7,
      ArabiText: 'hal hu mumkin?',
      EnglishText: 'Is it possible?',
      isFavourite: false,
    },
    {
      id: 8,
      ArabiText: 'kayf hi jayida?',
      EnglishText: 'How good is it?',
      isFavourite: false,
    }
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.dateSection}>
        Today's date: {new Date().toLocaleDateString()}{' '}
      </Text>
      <View style={styles.contentSection}>
        <FlatList
          data={arrayOfPhrases}
          renderItem={({item}) => (
            <TouchableOpacity style={{flex: 1}} activeOpacity={0.8}>
            <View style={styles.mainSection}>
              <View key={item.id} style={styles.textSection}>
                <Text style={styles.arabiText}> {item.ArabiText} </Text>
                <Text style={styles.englishText}> {item.EnglishText} </Text>
              </View>
              <View style={styles.iconSection}>
                <TouchableOpacity activeOpacity={0.5}>
                  <Feather name="heart" size={42} color="#145A32" />
                </TouchableOpacity>
              </View>
            </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20,
  },
  dateSection: {
    paddingLeft: 10,
  },
  contentSection: {
    padding: 10  
  },
  mainSection: {
    marginVertical: 14,
    paddingVertical: 20,
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderBottomColor: '#0E6251',
    borderBottomWidth: 4,
    backgroundColor: 'lightgreen',
    shadowColor: 'red',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 5
  },
  textSection: {
    marginTop: 8,
    width: '80%'
  },
  arabiText: {
    fontSize: 28,
    fontFamily: 'times new roman',
    color: '#145A32',
    fontWeight: 'bold'
  },
  englishText: {
    marginTop: 20,
    fontSize: 24,
    fontFamily: 'times new roman',
  },
  iconSection: {
    marginTop: 30,
    width: '20%'
  }
});

export default PhrasesOfTheDay;
