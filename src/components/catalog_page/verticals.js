// import {
//   StyleSheet,
//   View,
//   ScrollView,
//   TouchableOpacity,
//   Text,
// } from 'react-native';
// import React, { useState } from 'react';

// export default function Verticals({ selectedItem, setSelectedItem }) {
//   const catalogItems = [
//     'All',
//     'Favourite',
//     'Burger',
//     'Sandwich',
//     'Juice',
//     'Pizza',
//   ];

//   return (
//     <View style={styles.container}>
//       <ScrollView
//         horizontal={true}
//         showsHorizontalScrollIndicator={false}
//         style={styles.scrollContainer}>
//         {catalogItems.map((item, index) => (
//           <TouchableOpacity
//             key={index}
//             onPress={() => setSelectedItem(item)}
//             style={[
//               styles.item,
//               selectedItem === item && styles.selectedItem,
//             ]}>
//             <Text
//               style={[
//                 styles.text,
//                 selectedItem === item && styles.selectedText,
//               ]}>
//               {item}
//             </Text>
//           </TouchableOpacity>
//         ))}
//       </ScrollView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     marginTop: 10,
//     marginRight: 15,
//   },
//   scrollContainer: {
//     paddingHorizontal: 10,
//   },
//   item: {
//     padding: 10,
//     marginHorizontal: 5,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 10,
//     backgroundColor: '#f9f9f9',
//   },
//   selectedItem: {
//     borderColor: '#007BFF',
//     backgroundColor: '#007BFF',
//   },
//   text: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     color: '#000',
//   },
//   selectedText: {
//     color: '#fff',
//   },
// });
import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Text,
} from 'react-native';
import React from 'react';
import Staricon from '../../assets/icons/star';

export default function Verticals({ selectedItem, setSelectedItem }) {
  const catalogItems = ['All', 'Favourite', 'Burger', 'Sandwich', 'Juice', 'Pizza'];

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.scrollContainer}>
        {catalogItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => setSelectedItem(item)}
            style={[
              styles.item,
              selectedItem === item && styles.selectedItem,
            ]}>
            <View style={[styles.iconTextWrapper,selectedItem === item && styles.selectedText,]}>
            {item === 'Favourite' && (
                <Staricon/>
              )}
              <Text
                style={[
                  styles.text,
                  selectedItem === item && styles.selectedText,
                ]}>
                {item}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginRight: 15,
  },
  scrollContainer: {
    paddingHorizontal: 10,
  },
  item: {
    padding: 10,
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    backgroundColor: '#f9f9f9',
    flexDirection: 'row',
    alignItems: 'center',
  },
  selectedItem: {
    borderColor: '#007BFF',
    backgroundColor: '#007BFF',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000',
  },
  selectedText: {
    color: '#fff',
  },
  iconTextWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 5,
  },
});
