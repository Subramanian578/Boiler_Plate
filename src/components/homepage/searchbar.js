import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Bookicon from '../../assets/icons/bookicon';
import SearchIcon from '../../assets/icons/searchicon';

function searchbar() {
  const [inputText, setInputText] = useState('');
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.row}>
        <SearchIcon style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Search"
          placeholderTextColor={'grey'}
          value={inputText}
          onChangeText={text => setInputText(text)}
          autoCorrect={false}
        />
        <TouchableOpacity
          style={styles.book}
          onPress={() => navigation.navigate('Catalog')}>
          <Bookicon />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    position: 'absolute',
    left: 15,
    top: 12,
    width: 30,
    height: 30,
    color: 'black',
  },
  input: {
    paddingVertical: 10,
    paddingLeft: 45,
    width: '85%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    color: 'black',
    alignContent: 'center',
  },
  row: {
    flexDirection: 'row',
    margin: 20,
    justifyContent: 'space-between',
  },
  book: {
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1.5,
    padding: 10,
  },
});

export default searchbar;
