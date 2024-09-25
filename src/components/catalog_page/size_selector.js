// SizeSelector.js
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {RadioButton} from 'react-native-paper'; // Assuming you're using react-native-paper for RadioButton

const SizeSelector = ({
  checked1,
  setChecked1,
  setSelectedPrice,
  item,
  styles,
}) => {
  return (
    <View style={[styles.infoBox, {paddingHorizontal: 20}]}>
      <View style={styles.row}>
        <Text style={[styles.modalText, {color: 'black'}]}>Quantity</Text>
      </View>

      {/* Small Pizza Selection */}
      <TouchableOpacity
        onPress={() => {
          setChecked1('small');
          setSelectedPrice(Number(item.price1) || 0);
        }}>
        <View style={styles.row}>
          <View style={styles.row3}>
            <RadioButton
              value="small"
              status={checked1 === 'small' ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked1('small');
                setSelectedPrice(Number(item.price1) || 0);
              }}
              color="rgb(18, 99, 223)"
            />
            <Text style={styles.label}>Pizza (Small)</Text>
          </View>
          <Text
            style={[
              styles.modalText,
              {
                color: checked1 === 'small' ? 'rgb(18, 99, 223)' : 'black',
              },
            ]}>
            {item.small}
          </Text>
        </View>
      </TouchableOpacity>

      <View style={styles.line1} />

      {/* Medium Pizza Selection */}
      <TouchableOpacity
        onPress={() => {
          setChecked1('medium');
          setSelectedPrice(Number(item.price2) || 0);
        }}>
        <View style={styles.row}>
          <View style={styles.row3}>
            <RadioButton
              value="medium"
              status={checked1 === 'medium' ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked1('medium');
                setSelectedPrice(Number(item.price2) || 0);
              }}
              color="rgb(18, 99, 223)"
            />
            <Text style={styles.label}>Pizza (Medium)</Text>
          </View>
          <Text
            style={[
              styles.modalText,
              {
                color: checked1 === 'medium' ? 'rgb(18, 99, 223)' : 'black',
              },
            ]}>
            {item.medium}
          </Text>
        </View>
      </TouchableOpacity>

      <View style={styles.line1} />

      {/* Large Pizza Selection */}
      <TouchableOpacity
        onPress={() => {
          setChecked1('large');
          setSelectedPrice(Number(item.price3) || 0);
        }}>
        <View style={styles.row}>
          <View style={styles.row3}>
            <RadioButton
              value="large"
              status={checked1 === 'large' ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked1('large');
                setSelectedPrice(Number(item.price3) || 0);
              }}
              color="rgb(18, 99, 223)"
            />
            <Text style={styles.label}>Pizza (Large)</Text>
          </View>
          <Text
            style={[
              styles.modalText,
              {
                color: checked1 === 'large' ? 'rgb(18, 99, 223)' : 'black',
              },
            ]}>
            {item.large}
          </Text>
        </View>
      </TouchableOpacity>

      <View style={styles.line1} />
    </View>
  );
};

export default SizeSelector;
