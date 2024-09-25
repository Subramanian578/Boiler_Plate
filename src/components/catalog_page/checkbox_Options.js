import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import CustomCheckbox from './checkboxcomp';

const CheckboxOptions = ({
  selectedValue,
  selectedValue1,
  handleCheckboxChange,
  handleCheckboxChange1,
  item,
  calculateTotal,
  styles,
}) => {
  return (
    <>
      <TouchableOpacity onPress={() => handleCheckboxChange('vegetable')}>
        <CustomCheckbox
          label="Vegetable Party"
          isChecked={selectedValue === 'vegetable'}
          onChange={() => handleCheckboxChange('vegetable')}
          value={item.small}
          valueColor={
            selectedValue === 'vegetable' ? 'rgb(18, 99, 223)' : 'black'
          }
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleCheckboxChange('cheese')}>
        <CustomCheckbox
          label="Grated Cheese"
          isChecked={selectedValue === 'cheese'}
          onChange={() => handleCheckboxChange('cheese')}
          value={item.medium}
          valueColor={selectedValue === 'cheese' ? 'rgb(18, 99, 223)' : 'black'}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleCheckboxChange('mix')}>
        <CustomCheckbox
          label="Vegetable Mix"
          isChecked={selectedValue === 'mix'}
          onChange={() => handleCheckboxChange('mix')}
          value={item.large}
          valueColor={selectedValue === 'mix' ? 'rgb(18, 99, 223)' : 'black'}
        />
      </TouchableOpacity>

      {/* Beverages Section */}
      <View style={styles.row}>
        <Text style={[styles.modalText, {color: 'black'}]}>Beverages</Text>
        <TouchableOpacity></TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => handleCheckboxChange1('coke150')}>
        <CustomCheckbox
          label="Coke 150ml"
          isChecked={selectedValue1 === 'coke150'}
          onChange={() => handleCheckboxChange1('coke150')}
          value={item.small}
          valueColor={
            selectedValue1 === 'coke150' ? 'rgb(18, 99, 223)' : 'black'
          }
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleCheckboxChange1('coke250')}>
        <CustomCheckbox
          label="Coke 250ml"
          isChecked={selectedValue1 === 'coke250'}
          onChange={() => handleCheckboxChange1('coke250')}
          value={item.medium}
          valueColor={
            selectedValue1 === 'coke250' ? 'rgb(18, 99, 223)' : 'black'
          }
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleCheckboxChange1('grape')}>
        <CustomCheckbox
          label="Grape Juice"
          isChecked={selectedValue1 === 'grape'}
          onChange={() => handleCheckboxChange1('grape')}
          value={item.large}
          valueColor={selectedValue1 === 'grape' ? 'rgb(18, 99, 223)' : 'black'}
        />
      </TouchableOpacity>

      {/* Total and Actions */}
      <View style={[styles.row, {marginHorizontal: 5}]}>
        <Text style={styles.text1}>Item Total</Text>
        <Text style={styles.text11}>SAR {calculateTotal()}.00</Text>
      </View>
    </>
  );
};

export default CheckboxOptions;
