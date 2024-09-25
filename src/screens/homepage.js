import {SafeAreaView, StyleSheet, Text, View, TouchableOpacity, ScrollView, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import Home_Appbar from '../components/homepage/home_appbar';
import SearchBar from '../components/homepage/searchbar';
import CartSummary from '../components/homepage/cartcomponent';
import Addicon1 from '../assets/icons/addicon';
import Subicon1 from '../assets/icons/subicon';
import Arrowfront1 from '../assets/icons/arrowfront_white';

export default function Homescreen({navigation, route}) {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    console.log('Routed to HomeScreen');
    if (route.params?.cartItems) {
      const newOrder = route.params.cartItems;
      setCartItems(prevDetails => {
        const existingItemIndex = prevDetails.findIndex(
          item => item.name === newOrder.name,
        );
        if (existingItemIndex > -1) {
          const updatedDetails = [...prevDetails];
          updatedDetails[existingItemIndex].quantity += newOrder.quantity;
          updatedDetails[existingItemIndex].total += newOrder.total;
          return updatedDetails;
        }
        return [...prevDetails, newOrder];
      });
    }
  }, [route.params]);

  const handleDecrease = index => {
    setCartItems(prevDetails => {
      const updatedDetails = [...prevDetails];
      const unitPrice =
        updatedDetails[index].total / updatedDetails[index].quantity;

      if (updatedDetails[index].quantity > 1) {
        updatedDetails[index].quantity -= 1;
        updatedDetails[index].total =
          unitPrice * updatedDetails[index].quantity;
      } else {
        updatedDetails.splice(index, 1);
      }
      return updatedDetails;
    });
  };

  const handleIncrease = index => {
    setCartItems(prevDetails => {
      const updatedDetails = [...prevDetails];
      const unitPrice =
        updatedDetails[index].total / updatedDetails[index].quantity;

      updatedDetails[index].quantity += 1;
      updatedDetails[index].total = unitPrice * updatedDetails[index].quantity;
      return updatedDetails;
    });
  };
  

  return (
    <SafeAreaView style={styles.container}>
      <Home_Appbar />
      <ScrollView style = {{marginBottom: 50}}>
        <SearchBar />
        <CartSummary />
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <Text style={styles.tableHeaderLeft}>Item({cartItems.length})</Text>
            <Text style={styles.tableHeaderRight}>Quantity</Text>
          </View>
          <View style={styles.line1} />

          {cartItems.length === 0 ? (
            <View style={styles.emptyCartContainer}>
              <Image
                style={styles.emptyCartIcon}
                source={{
                  uri: 'https://cdn-icons-png.flaticon.com/512/11010/11010851.png',
                }}
              />
              <Text style={styles.emptyCartText}>Cart is empty</Text>
              <Text style={styles.scanInstruction}>
                Scan barcode or add items from catalog
              </Text>
            </View>
          ) : (
            cartItems.map((orderItem, index) => {
              const priceValue = parseFloat(orderItem.total) || 0;

              console.log(orderItem);
              {/* if pushing to backend , i have to push orderItem as all updates are in orderItem only */}

              return (
                <View key={index}>
                  <View style={styles.tableRow}>
                    <View style={styles.itemColumn}>
                      <Text style={styles.tableCell}>{orderItem.name}</Text>
                      <Text style={styles.tableCell1}>{orderItem.variant}</Text>
                    </View>
                    <View style={styles.amountColumn}>
                      <View style={styles.countContainer}>
                        <TouchableOpacity
                          onPress={() => handleDecrease(index)}
                          disabled={orderItem.quantity <= 1}>
                          <Subicon1 style={styles.icon} />
                        </TouchableOpacity>
                        <Text style={styles.countText}>
                          {orderItem.quantity}
                        </Text>
                        <TouchableOpacity onPress={() => handleIncrease(index)}>
                          <Addicon1 style={styles.icon} />
                        </TouchableOpacity>
                      </View>
                      <Text style={styles.countText1}>
                        {priceValue.toFixed(2)}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.line1} />
                </View>
              );
            })
          )}
        </View>
      </ScrollView>

      {cartItems.length > 0 && (
        <View style={styles.fixedBottom}>
          <TouchableOpacity
            style={styles.paymentButton}
            onPress={() => navigation.navigate('Payment_Summary')}>
            <View style={styles.paymentButtonContent}>
              <View>
                <Text style={styles.text}>Items</Text>
                <Text style={styles.text}>{cartItems.length}</Text>
              </View>
              <View style={styles.arrowContainer}>
                <Text style={styles.text}>View Payment Summary</Text>
                <Arrowfront1 />
              </View>
            </View>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  line1: {
    height: 1,
    backgroundColor: 'rgb(234, 237, 240)',
    width: '100%',
    marginVertical: 5,
  },
  emptyCartContainer: {
    alignItems: 'center',
    height: 400,
    justifyContent: 'center',
    marginTop: 32,
  },
  emptyCartIcon: {
    width: 100,
    height: 100,
    marginBottom: 16,
  },
  emptyCartText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 8,
  },
  scanInstruction: {
    color: 'grey',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  table: {
    margin: 10,
    padding: 10,
  },
  tableHeaderLeft: {
    fontWeight: 'bold',
    fontSize: 14,
    flex: 1,
    textAlign: 'left',
    paddingVertical: 5,
    color: 'grey',
  },
  tableHeaderRight: {
    fontWeight: 'bold',
    fontSize: 14,
    flex: 1,
    textAlign: 'right',
    paddingVertical: 5,
    color: 'grey',
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
    paddingHorizontal: 7,
    borderColor: '#bbb',
  },
  itemColumn: {
    flex: 1,
    paddingTop: 10,
    alignItems: 'flex-start',
  },
  amountColumn: {
    flex: 1,
    alignItems: 'flex-end',
    paddingBottom: 10,
  },
  tableCell: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 17,
    paddingBottom: 10,
  },
  tableCell1: {
    color: 'grey',
    fontWeight: '500',
    fontSize: 17,
  },
  countContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 5,
    marginTop: 10,
  },
  icon: {
    marginHorizontal: 5,
  },
  countText1: {
    textAlign: 'center',
    color: 'black',
    minWidth: 30,
    paddingTop: 10,
    fontSize: 15,
    fontWeight: 'bold',
  },
  countText: {
    textAlign: 'center',
    color: 'black',
    minWidth: 30,
    fontSize: 15,
    fontWeight: 'bold',
  },
    text: {
      color: 'white',
      fontWeight: '900',
    },
    fixedBottom: {
      position: 'absolute',
      bottom: 0,
      left: 5,
      right: 5,
      backgroundColor: 'white',
    },
    paymentButton: {
      backgroundColor: 'rgb(18, 99, 223)',
      paddingVertical: 10,
      paddingHorizontal: 15,
      borderRadius: 10, // Border radius for rounded corners
      margin: 10, // Margin on all sides
    },
    paymentButtonContent: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    arrowContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
  });
