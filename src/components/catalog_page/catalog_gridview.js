import React, {useState} from 'react';
import ItemModal from './item_Modal';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Modal,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Description from '../../assets/icons/description';
import Verticals from './verticals';
import {styles} from './Styles';
import DATA from '../../screens/data_json';

const GridItem = ({item}) => {

  const [cart, setCart] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);
  const [checked1, setChecked1] = useState('large');
  const [selectedValue, setSelectedValue] = useState('vegetable');
  const [selectedValue1, setSelectedValue1] = useState('coke150');
  const [selected, setSelected] = useState('variants');
  const [count, setCount] = useState(2);
  const [selectedPrice, setSelectedPrice] = useState(0);
  const navigation = useNavigation();

  const toggleModal = () => {
    if (item.available) {
      setModalVisible(!isModalVisible);
    }
  };

  const handleCheckboxChange = value => setSelectedValue(value);
  const handleCheckboxChange1 = value => setSelectedValue1(value);
  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => count > 0 && setCount(count - 1);

  const calculateTotal = () => {
    let total = 0;
    const smallPrice =
      parseFloat(item.price1.replace('SAR ', '').replace(',', '')) || 0;
    const mediumPrice =
      parseFloat(item.price2.replace('SAR ', '').replace(',', '')) || 0;
    const largePrice =
      parseFloat(item.price3.replace('SAR ', '').replace(',', '')) || 0;
    if (checked1 === 'small') total += smallPrice;
    else if (checked1 === 'medium') total += mediumPrice;
    else if (checked1 === 'large') total += largePrice;
    return total * count;
  };
  const addToCart = selectedItem => {
    setCart(prevCart => {
      const existingItemIndex = prevCart.findIndex(
        item => item.id === selectedItem.id,
      );
      if (existingItemIndex > -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex] = {
          ...updatedCart[existingItemIndex],
          quantity: selectedItem.quantity,
          variant: selectedItem.variant,
          total: selectedItem.total,
        };
        console.log('Cart updated:', updatedCart);
        return updatedCart;
      } else {
        const updatedCart = [...prevCart, selectedItem];
        console.log('Cart updated:', updatedCart);
        return updatedCart;
      }
    });
  };
  const handleAddToOrder = () => {
    const total = calculateTotal();
    if (total > 0 && checked1) {
      const newItem = {
        id: item.id,
        name: item.title,
        quantity: count,
        variant: checked1,
        total: total,
      };
      addToCart(newItem);
      navigation.navigate('Home', {cartItems: newItem});
    } else {
      console.log('Please select a valid variant.');
    }
  };
  return (
    <>
      <TouchableOpacity
        style={[styles.item, !item.available && styles.unavailable]}
        onPress={toggleModal}>
        {item.image && (
          <Image source={{uri: item.image}} style={styles.itemImage} />
        )}
        <View style={styles.itemTextContainer}>
          <Text style={styles.itemTitle}>{item.title}</Text>
          <Text
            style={[
              styles.itemVariants,
              !item.available && styles.unavailableText,
            ]}>
            {item.variants || ' '}
          </Text>
        </View>
        <TouchableOpacity style={styles.iconContainer}>
          <View style={styles.iconBackground}>
            <Description />
          </View>
        </TouchableOpacity>
      </TouchableOpacity>

      <ItemModal
        isVisible={isModalVisible}
        toggleModal={toggleModal}
        item={item}
        handleCheckboxChange={handleCheckboxChange}
        handleCheckboxChange1={handleCheckboxChange1}
        selectedValue={selectedValue}
        selectedValue1={selectedValue1}
        checked1={checked1}
        setChecked1={setChecked1}
        count={count}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
        calculateTotal={calculateTotal}
        handleAddToOrder={handleAddToOrder}
        selected={selected}
        setSelected={setSelected}
        selectedPrice={selectedPrice}
        setSelectedPrice={setSelectedPrice}
      />
    </>
  );
};

const GridLayout = () => {
  const [selectedItem, setSelectedItem] = useState('All');
  const filteredData =
    selectedItem === 'All'
      ? DATA
      : DATA.filter(item => item.category === selectedItem);

  return (
    <View style={styles.container}>
      <Verticals
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}/>
      <FlatList
        data={filteredData}
        renderItem={({item}) => <GridItem item={item} />}
        keyExtractor={item => item.id}
        numColumns={3}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.grid}
      />
    </View>
  );
};
export default GridLayout;
