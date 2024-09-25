import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Counter = ({ count, handleIncrement, handleDecrement, buttonLabel}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignContent: 'flex-end',
        gap: 10,
        marginLeft: 5,
        marginTop: 20,
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
      <TouchableOpacity style={styles.box2}>
        <Text style={styles.text6}>{buttonLabel}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    box1: {
        width: '40%',
        paddingVertical: 15,
        paddingHorizontal: 5,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        borderColor: 'grey',
        borderWidth: 1.5,
        gap: 5,
        borderStyle: 'solid',
        borderRadius: 10,
      },
      box2: {
        width: '60%',
        paddingVertical: 15,
        paddingHorizontal: 10,
        flexDirection: 'row',
        backgroundColor: 'rgb(18, 99, 223)',
        gap: 5,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
      },
      text6: {
        color: 'white',
        fontWeight: '500',
        fontSize: 15,
      },
      text7: {
        color: 'black',
        fontWeight: '900',
        fontSize: 15,
      },
});

export default Counter;
