// import {StyleSheet, Text, View} from 'react-native';
// import React from 'react';
// import MenuBar from '../assets/icons/menuicon';
// import Notification from '../assets/icons/notification';
// import {Image} from 'react-native-svg';

// function Home_Appbar() {
//   return (
//     <View>
//       <View style={styles.app}>
//         <View style={styles.top}>
//           <MenuBar />
//           <Text style={styles.text}>Sales</Text>
//         </View>
//         <View style={styles.top}>
//           <Notification />
//           <Image
//             source={require('../assets/img/image.jpg')}
//             style={{width: 200, height: 200, resizeMode: 'contain'}}
//           />
//         </View>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   app: {
//     padding: 20,
//     backgroundColor: 'rgb(6, 40, 61)',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   top: {
//     gap: 10,
//     flexDirection: 'row',
//   },
//   text: {
//     fontWeight: '900',
//     fontSize: 20,
//     color: 'white',
//   },
// });

// export default Home_Appbar;
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'; // Import Image from 'react-native'
import React from 'react';
import MenuBar from '../../assets/icons/menuicon';
import Notification from '../../assets/icons/notification';

function Home_Appbar() {
  const notificationCount = 9;
  return (
    <View>
      <View style={styles.app}>
        <View style={styles.top}>
          <TouchableOpacity>
            <MenuBar />
          </TouchableOpacity>
          <Text style={styles.text}>Sales</Text>
        </View>
        <View style={styles.top}>
          <TouchableOpacity>
            <Notification />
            {notificationCount > 0 && (
              <View style={styles.badge}>
                <Text style={styles.badgeText}>{notificationCount}</Text>
              </View>
            )}
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../../assets/img/image.jpg')} // Correct image path
              style={{width: 70, height: 30, resizeMode: 'contain'}}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    position: 'absolute',
    right: -5,
    top: -5,
    backgroundColor: 'red',
    borderRadius: 10,
    width: 17,
    height: 17,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
  app: {
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: 'rgb(6, 40, 61)',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  top: {
    gap: 15,
    paddingBottom: 10,
    flexDirection: 'row',
  },
  text: {
    fontWeight: '900',
    fontSize: 20,
    color: 'white',
  },
});

export default Home_Appbar;
