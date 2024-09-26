import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Tableicon from '../../assets/icons/tableicon';
import Joystickicon from '../../assets/icons/joystick';
import Profileicon from '../../assets/icons/profileicon';
import Doticons from '../../assets/icons/3doticon';

function CartSummary() {
  const order_id = "123456789";
  return (
    <View style={{marginHorizontal: 20}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View>
          <Text style={[styles.text2 , {fontFamily: 'Poppins.Regular'}]}>Cart Summary</Text>
        </View>
        <View style={{flexDirection: 'row', gap: 15}}>
          <TouchableOpacity
            style={{
              borderRadius: 5,
              justifyContent: 'center',
              alignItems: 'center',
              borderColor: '#ccc',
              borderWidth: 1.5,
              padding: 10,
            }}>
            <Tableicon />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderRadius: 5,
              justifyContent: 'center',
              alignItems: 'center',
              borderColor: '#ccc',
              borderWidth: 1.5,
              padding: 10,
            }}>
            <Doticons />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.order}>
        <Text style={styles.text}>Order ID:</Text>
        <Text style={styles.text1}>{order_id}</Text>
      </View>
      <View style={styles.sam}>
        <View style={styles.sam}>
          <Tableicon />
          <Text style={styles.text3}>Table 1</Text>
        </View>
        <Text style={styles.ordercss}>•</Text>
        <View style={styles.sam}>
          <Joystickicon />
          <Text style={styles.text3}>Sam richard</Text>
        </View>
        <Text style={styles.ordercss}>•</Text>
        <View style={styles.sam}>
          <Profileicon />
          <Text style={styles.text3}>Mark</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: 'grey',
    fontWeight: '900',
  },
  text1: {
    color: 'black',
    fontWeight: '900',
  },
  text2: {
    color: 'black',
    fontWeight: '900',
    fontSize: 20,
  },
  order: {
    flexDirection: 'row',
    paddingBottom: 10,
    gap: 5,
  },
  text3: {
    color: 'black',
    fontWeight: '500',
  },
  sam: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  ordercss: {
    color: 'grey',
    fontWeight: '900',
  },
});

export default CartSummary;
