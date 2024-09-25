import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import SvgComponent1 from '../../assets/icons/ordericon';
import SvgComponent2 from '../../assets/icons/deleteicon';
import SvgComponent3 from '../../assets/icons/addnotes';
import SvgComponent4 from '../../assets/icons/personicon';
import SvgComponent5 from '../../assets/icons/couponicon';
import SvgComponent6 from '../../assets/icons/discounticon';
import SvgComponent7 from '../../assets/icons/printicon';

function Order() {
  return (
    <View>
      <View style = {{height: '59%'}}>
        <View style={styles.oorder}>
          <View style={styles.order}>
            <Text style={styles.text}>Order ID:</Text>
            <Text style={styles.text1}>123456789</Text>
          </View>
          <View style={styles.order}>
            <SvgComponent1 />
            <Text style={styles.text2}>Ashwin</Text>
          </View>
        </View>

        <View style={styles.oorder}>
          <View style={styles.order}>
            <Text style={styles.text}>Sub total</Text>
          </View>
          <View style={styles.order}>
            <Text style={styles.text2}>SAR 1050.00</Text>
          </View>
        </View>

        <View style={styles.oorder}>
          <View style={styles.order}>
            <Text style={styles.text}>Discount</Text>
            <SvgComponent2 />
          </View>
          <View style={styles.order}>
            <Text style={styles.text3}>- SAR 50.00</Text>
          </View>
        </View>

        <View style={styles.oorder}>
          <View style={styles.order}>
            <Text style={styles.text}>Taxable Amount</Text>
          </View>
          <View style={styles.order}>
            <Text style={styles.text2}>SAR 900.00</Text>
          </View>
        </View>

        <View style={styles.oorder}>
          <View style={styles.order}>
            <Text style={styles.text}>Total Tax</Text>
          </View>
          <View style={styles.order}>
            <Text style={styles.text2}>SAR 40.00</Text>
          </View>
        </View>

        <View
          style={{
            height: 1.5,
            backgroundColor: 'grey',
            marginVertical: 10,
            marginHorizontal: 10,
          }}
        />

        <View style={styles.oorder}>
          <View style={styles.order}>
            <Text style={styles.text}>Grand Total</Text>
          </View>
          <View style={styles.order}>
            <Text style={styles.text4}>SAR 940.00</Text>
          </View>
        </View>
      </View>

      <View>
        <View>
          <View
            style={{
              height: 1.5,
              backgroundColor: 'rgb(232,232,232)',
              marginVertical: 10,
            }}
          />
          <View style={styles.note}>
            <SvgComponent3 />
            <Text style={styles.notes}>Add Notes</Text>
          </View>

          <View
            style={{
              height: 1.5,
              backgroundColor: 'rgb(232,232,232)',
              marginVertical: 10,
            }}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 10,
            marginVertical: 15,
          }}>
          <TouchableOpacity style={styles.box}>
            <SvgComponent4 />
            <Text style={styles.text5}>Customer</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.box}>
            <SvgComponent5 />
            <Text style={styles.text5}>Coupon</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.box}>
            <SvgComponent6 />
            <Text style={styles.text5}>Discount</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            height: 1.5,
            backgroundColor: 'rgb(232,232,232)',
            marginVertical: 10,
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            gap: 10,
            marginHorizontal: 10,
            marginVertical: 15,
          }}>
          <TouchableOpacity style={styles.box1}>
            <SvgComponent7 />
            <Text style={styles.text7}>Print Bill</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.box2}>
            <Text style={styles.text6}>Proceed Payment</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  oorder: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
  },
  order: {
    flexDirection: 'row',
    marginHorizontal: 10,
    paddingVertical: 10,
    gap: 5,
  },
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
    fontSize: 15,
  },
  text3: {
    color: 'green',
    fontWeight: '900',
    fontSize: 15,
  },
  text4: {
    color: 'black',
    fontWeight: '900',
    fontSize: 20,
  },
  notes: {
    color: 'black',
    fontWeight: '900',
    fontSize: 15,
  },
  note: {
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 10,
    paddingVertical: 20,
  },
  box: {
    padding: 10,
    flexDirection: 'row',
    borderColor: 'black',
    borderWidth: 1.5,
    gap: 5,
    borderStyle: 'solid',
    borderRadius: 10,
  },
  text5: {
    color: 'black',
    fontWeight: '900',
    fontSize: 15,
  },
  box1: {
    width: '32%',
    paddingVertical: 15,
    paddingHorizontal: 10,
    flexDirection: 'row',
    borderColor: 'rgb(18, 99, 223)',
    borderWidth: 1.5,
    gap: 5,
    borderStyle: 'solid',
    borderRadius: 10,
  },
  box2: {
    width: '65%',
    paddingVertical: 15,
    paddingHorizontal: 10,
    flexDirection: 'row',
    backgroundColor: 'rgb(18, 99, 223)',
    gap: 5,
    // borderStyle: 'solid',
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
    color: 'rgb(18, 99, 223)',
    fontWeight: '900',
    fontSize: 15,
  },
});

export default Order;
