import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, Modal} from 'react-native';
import SizeSelector from './size_selector';
import Closeicon from '../../assets/icons/closeicon';
import Arrowfront from '../../assets/icons/arrowfront';
import Description from '../../assets/icons/description';
import {styles} from './Styles';
import CheckboxOptions from './checkbox_Options';

const ItemModal = ({
  isVisible,
  toggleModal,
  item,
  handleCheckboxChange,
  handleCheckboxChange1,
  selectedValue,
  selectedValue1,
  checked1,
  setChecked1,
  count,
  handleIncrement,
  handleDecrement,
  calculateTotal,
  handleAddToOrder,
  selected,
  setSelected,
  selectedPrice,
  setSelectedPrice,
}) => {
  const [isCustomVisible, setCustomVisible] = useState(false);

  const toggleCustomModal = () => {
    setCustomVisible(!isCustomVisible);
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={toggleModal}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Image source={{uri: item.image}} style={styles.modalImage} />
          <TouchableOpacity style={styles.icon} onPress={toggleModal}>
            <Closeicon />
          </TouchableOpacity>
          <View style={styles.modalcontext}>
            <Text style={[styles.modalText, {color: 'black'}]}>
              {item.desc}
            </Text>
            <View>
              <View style={styles.variantstyle}>
                <Text style={styles.text2}>Small,Medium,Large</Text>
                <Text style={styles.text1}>{item.value}</Text>
              </View>
            </View>
            <View>
              <Text
                style={{
                  color: 'black',
                  paddingHorizontal: 1,
                  marginVertical: 10,
                }}>
                {item.description}
              </Text>
            </View>
            <View style={styles.line} />
            <View style={styles.row}>
              <Text style={styles.text2}>Calorie per 100g</Text>
              <Text style={styles.text2}>Food Type</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.text1}>{item.kcal}</Text>
              <Text style={styles.text1}>Non-veg</Text>
            </View>
            <View style={styles.line} />
            <TouchableOpacity style={styles.button} onPress={toggleCustomModal}>
              <Text style={styles.additem}>Add Item</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Second Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isCustomVisible}
        onRequestClose={toggleCustomModal}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContentt}>
            <View style={[styles.row, {paddingHorizontal: 20}]}>
              <Text style={[styles.modalText, {color: 'black'}]}>
                Variants & Add-ons
              </Text>
              <TouchableOpacity
                onPress={toggleCustomModal}
                style={styles.arrowfront}>
                <Arrowfront />
              </TouchableOpacity>
            </View>

            <View style={styles.row1}>
              <Image source={{uri: item.image}} style={styles.itemImage1} />
              <Text
                style={[styles.modalText1, {width: '80%', textAlign: 'left'}]}>
                {item.desc}
              </Text>
              <TouchableOpacity style={styles.iconContainer1}>
                <View style={styles.iconBackground1}>
                  <Description />
                </View>
              </TouchableOpacity>
            </View>
            <View
              style={[
                styles.roww,
                {marginVertical: 10, paddingHorizontal: 20},
              ]}>
              <TouchableOpacity
                style={[
                  styles.variant,
                  {
                    borderColor:
                      selected === 'variants'
                        ? 'rgb(18, 99, 223)'
                        : 'rgb(225, 229, 232)',
                    backgroundColor:
                      selected === 'variants'
                        ? 'rgb(18, 99, 223)'
                        : 'transparent',
                    borderWidth: 1,
                  },
                ]}>
                <Text
                  style={[
                    styles.modalText2,
                    {
                      color: selected == 'variants' ? 'white' : 'black',
                    },
                  ]}
                  onPress={() => {
                    setSelected(selected === 'variants' ? null : 'variants');
                  }}>
                  Variants(2)
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.variant1,
                  {
                    borderColor:
                      selected === 'addons'
                        ? 'rgb(18, 99, 223)'
                        : 'rgb(225, 229, 232)',
                    backgroundColor:
                      selected === 'addons'
                        ? 'rgb(18, 99, 223)'
                        : 'transparent',
                    borderWidth: 1,
                  },
                ]}>
                <Text
                  style={[
                    styles.modalText3,
                    {
                      color: selected == 'addons' ? 'white' : 'black',
                    },
                  ]}
                  onPress={() => {
                    setSelected(selected === 'addons' ? null : 'addons');
                  }}>
                  Add-ons
                </Text>
              </TouchableOpacity>
            </View>
            {selected === 'variants' && (
              <>
                <SizeSelector
                  checked1={checked1}
                  setChecked1={setChecked1}
                  setSelectedPrice={setSelectedPrice}
                  item={item}
                  styles={styles}
                />
                <View style={styles.line2} />
                <View
                  style={{
                    width: '100%',
                    paddingVertical: 10,
                    paddingHorizontal: 20,
                    backgroundColor: 'white',
                  }}>
                  <View style={[styles.row, {marginHorizontal: 5}]}>
                    <Text style={styles.text1}>Item Total</Text>
                    <Text style={styles.text11}>SAR {calculateTotal()}.00</Text>
                  </View>
                  <View style={styles.handle}>
                    <View style={styles.boxx1}>
                      <TouchableOpacity onPress={handleDecrement}>
                        <Text style={styles.textt7}>-</Text>
                      </TouchableOpacity>
                      <Text style={styles.textt7}>{count}</Text>
                      <TouchableOpacity onPress={handleIncrement}>
                        <Text style={styles.textt7}>+</Text>
                      </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                      style={styles.boxx2}
                      onPress={handleAddToOrder}>
                      <Text style={styles.textt6}>Add to Order</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </>
            )}

            {selected === 'addons' && (
              <View style={[styles.infoBox, {padding: 20}]}>
                <View style={styles.row}>
                  <Text style={[styles.modalText, {color: 'black'}]}>
                    Toppings
                  </Text>
                  <TouchableOpacity></TouchableOpacity>
                </View>
                <CheckboxOptions
                  selectedValue={selectedValue}
                  selectedValue1={selectedValue1}
                  handleCheckboxChange={handleCheckboxChange}
                  handleCheckboxChange1={handleCheckboxChange1}
                  item={item}
                  calculateTotal={calculateTotal}
                  styles={styles}
                />
                <View style={styles.handle}>
                  <View style={styles.line1} />
                  <View style={styles.boxx1}>
                    <TouchableOpacity onPress={handleDecrement}>
                      <Text style={styles.textt7}>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.textt7}>{count}</Text>
                    <TouchableOpacity onPress={handleIncrement}>
                      <Text style={styles.textt7}>+</Text>
                    </TouchableOpacity>
                  </View>
                  <TouchableOpacity style={styles.boxx2}>
                    <Text style={styles.textt6}>Add to Order</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </View>
        </View>
      </Modal>
    </Modal>
  );
};
export default ItemModal;
