import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Closeicon from '../../assets/icons/closeicon';
import Doticons from '../../assets/icons/3doticon';
import { useNavigation } from '@react-navigation/native';

export default function Catalog_appbar() {
  const navigation = useNavigation();
  return (
    <View style={{marginHorizontal: 15, marginTop: 20, marginBottom: 10}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={styles.text}>Catalog</Text>
        <View style={{flexDirection: 'row', gap: 10}}>
          <Doticons />
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Closeicon />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 17,
    color: 'black',
    fontWeight: '900',
  },
});
