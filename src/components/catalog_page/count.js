import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const Count = ({count, handleIncrement, handleDecrement}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignContent: 'flex-end',
      }}>
      <View style={styles.box1}>
        <TouchableOpacity onPress={handleDecrement}>
          <Text style={styles.text7}>-</Text>
        </TouchableOpacity>
        <Text style={styles.text7}>{count}</Text>
        <TouchableOpacity onPress={handleIncrement}>
          <Text style={styles.text7}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  box1: {
    width: '50%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'grey',
    borderWidth: 1.5,
    gap: 15,
    borderStyle: 'solid',
    borderRadius: 10,
  },
  text7: {
    color: 'black',
    fontWeight: '900',
    fontSize: 15,
    textAlign: 'center',
  },
});

export default Count;
