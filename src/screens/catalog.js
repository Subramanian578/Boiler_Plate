// import {StyleSheet, Text, View} from 'react-native';
// import React from 'react';
// import Verticals from '../components/verticals';
// import Catalog_appbar from '../components/catalog_appbar';
// import GridLayout from '../components/catalog_gridview';
// import Printbill from '../components/printbill';

// export default function Catalog() {
//   return (
//     <View style={styles.container}>
//       <Catalog_appbar />
//       {/* <Verticals/> */}
//       <View style={{marginBottom: 10}}></View>
//       <GridLayout />
//       <View style={{marginBottom: 50}}></View>
//       <View style = {styles.bill}>
//         <Printbill />
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     height: '100%',
//   },
//   bill: {
//     justifyContent: 'flex-end',
//     alignContent: 'flex-end',
//   },
// });
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Catalog_appbar from '../components/catalog_page/catalog_appbar';
import GridLayout from '../components/catalog_page/catalog_gridview';
import Printbill from '../components/payment_summary/printbill';

export default function Catalog() {
  return (
    <View style={styles.container}>
      <Catalog_appbar />
      {/* <Verticals/> */}
      <View style={{flex: 1}}>
        <GridLayout />
      </View>
      <View style={styles.bill}>
        <Printbill />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between', 
  },
  bill: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 10,
  },
});
