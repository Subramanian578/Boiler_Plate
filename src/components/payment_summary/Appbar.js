import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import SvgComponent from '../../assets/icons/arrowback';
import {useNavigation} from '@react-navigation/native';
import ArrowBack from '../../assets/icons/arrowback';

function Appbar() {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.top}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}><ArrowBack/></TouchableOpacity>
        <Text style={styles.text}>Payment Summary</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  top: {
    padding: 10,
    height: 60,
    alignItems: 'center',
    gap: 5,
    flexDirection: 'row',
    backgroundColor: 'rgb(6, 40, 61)',
  },
  text: {
    fontWeight: '900',
    fontSize: 20,
    color: 'white',
  },
});

export default Appbar;
