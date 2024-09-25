import { StyleSheet, Text, View , TouchableOpacity} from 'react-native'
import React from 'react'
import Printer from '../../assets/icons/printicon'
// import {useNavigation} from '@react-navigation/native';

export default function Printbill() {
  // const navigation = useNavigation();
  return (
    <View>
      <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignContent: 'flex-end',
            gap: 10,
            marginHorizontal: 10,
            marginVertical: 15,
          }}>
          <TouchableOpacity style={styles.box1}>
            <Printer/>
            <Text style={styles.text7}>Print Bill</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.box2}>
            <Text style={styles.text6}>Proceed Payment</Text>
          </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
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
})