import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

const CustomCheckbox = ({ label, isChecked, onChange, value, valueColor }) => {
  return (
    <View>
      <View style={styles.row}>
        <View style={styles.row3}>
          <CheckBox
            value={isChecked}
            onValueChange={onChange}
            tintColors={{ true: 'rgb(18, 99, 223)', false: 'gray' }} // Customize colors
          />
          <Text style={styles.label}>{label}</Text>
        </View>
        <Text style={[styles.modalTextt, { color: valueColor }]}>
          {value}
        </Text>
      </View>
      <View style={styles.line1} />
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  row3: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    marginLeft: 8,
    color: 'black',
  },
  modalTextt: {
    marginLeft: 'auto',
    fontWeight: '900',
  },
  line1: {
    height: 1.5,
    width: '100%',
    backgroundColor: 'rgb(228, 232, 235)',
    marginVertical: 10,
  },
});

export default CustomCheckbox;
