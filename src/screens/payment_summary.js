import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Appbar from '../components/payment_summary/Appbar';
import Order from '../components/payment_summary/Order';
import Printbill from '../components/payment_summary/printbill';

function Payment_summary() {
  return (
    <View>
      <Appbar />
      <Order />
    </View>
  );
}

const styles = StyleSheet.create({});

export default Payment_summary;
