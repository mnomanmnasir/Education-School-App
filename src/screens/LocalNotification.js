// import { useState, useEffect, useRef } from 'react';
// import { Text, View, Button, Platform, Alert } from 'react-native';
// import * as Device from 'expo-device';
// import * as Notifications from 'expo-notifications';
// // import { Vibration } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import messaging from '@react-native-firebase/messaging';

// Notifications.setNotificationHandler({
//   handleNotification: async () => ({
//     shouldShowAlert: true,
//     shouldPlaySound: true,
//     shouldSetBadge: true,
//   }),
// });

// // Second, call the method

// Notifications.scheduleNotificationAsync({
//   content: {
//     title: "Notification",
//     body: "New Notification",
//     sound : 'default'
//   },
//   trigger: null,
// });
// export default function LocalNotification() {

//   const [expoPushToken, setExpoPushToken] = useState('');
//   const [notification, setNotification] = useState(null);
//   const [isModalVisible, setModalVisible] = useState(false);
//   const notificationListener = useRef();
//   const responseListener = useRef();

//   useEffect(() => {
//     registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

//     notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
//       setNotification(notification);
//     });

//     responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
//       console.log(response);
//     });

//     return () => {
//       Notifications.removeNotificationSubscription(notificationListener.current);
//       Notifications.removeNotificationSubscription(responseListener.current);
//     };
//   }, []);

//   return (
//     <View
//     style={{
//       flex: 1,
//       alignItems: 'center',
//       justifyContent: 'space-around',
//     }}
//   >
//     <Text>Your expo push token: {expoPushToken}</Text>
//     <View style={{ alignItems: 'center', justifyContent: 'center' }}>
//       {/* Display the notification content */}
//       {notification && (
//         <View>
//           <Text>Title: {notification.request.content.title} </Text>
//           <Text>Body: {notification.request.content.body}</Text>
//           <Text>Data: {JSON.stringify(notification.request.content.data)}</Text>
//         </View>
//       )}
//     </View>
//     <Button title="Show Notification" onPress={handleShowNotification} />

//     {/* Modal to show notification content */}
//     <Modal visible={isModalVisible} animationType="slide" transparent>
//       <TouchableOpacity
//         style={styles.modalOverlay}
//         activeOpacity={1}
//         onPress={handleModalClose}
//       >
//         <View style={styles.modalContent}>
//           {notification && (
//             <View>
//               <Text style={styles.modalTitle}>
//                 {notification.request.content.title}
//               </Text>
//               <Text style={styles.modalBody}>
//                 {notification.request.content.body}
//               </Text>
//               <Text style={styles.modalData}>
//                 {JSON.stringify(notification.request.content.data)}
//               </Text>
//             </View>
//           )}
//         </View>
//       </TouchableOpacity>
//     </Modal>
//   </View>

//   );
// }

// async function schedulePushNotification() {
//   await Notifications.scheduleNotificationAsync({
//     content: {
//       title: "You've got mail! 📬",
//       body: 'Here is the notification body',
//       data: { data: 'goes here' },
//     },
//     trigger: { seconds: 2 },
//   });
// }

// async function registerForPushNotificationsAsync() {
//   let token;

//   if (Platform.OS === 'android') {
//     await Notifications.setNotificationChannelAsync('default', {
//       name: 'default',
//       importance: Notifications.AndroidImportance.MAX,
//       vibrationPattern: [0, 250, 250, 250],
//       lightColor: '#FF231F7C',
//     });
//   }

//   if (Device.isDevice) {
//     const { status: existingStatus } = await Notifications.getPermissionsAsync();
//     let finalStatus = existingStatus;
//     if (existingStatus !== 'granted') {
//       const { status } = await Notifications.requestPermissionsAsync();
//       finalStatus = status;
//     }
//     if (finalStatus !== 'granted') {
//       alert('Failed to get push token for push notification!');
//       return;
//     }
//     token = (await Notifications.getExpoPushTokenAsync()).data;
//     console.log(token);
//   } else {
//     alert('Must use physical device for Push Notifications');
//   }
//   return token;
// }



// // export default function LocalNotification() {
// //   const requestUserPermission = async () => {
// //     const authStatus = await messaging().requestPermission();
// //     const enabled =
// //       authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
// //       authStatus === messaging.AuthorizationStatus.PROVISIONAL;

// //     if (enabled) {
// //       console.log('Authorization status:', authStatus);
// //     }

// //   }


// //   useEffect(() => {

// //     if (requestUserPermission()) {
// //       //return FCM token for the device 
// //       messaging.getToken().then(token => {
// //         console.log(token)
// //       })
// //     }
// //     else {
// //       console.log("Failed Status Token", authStatus)
// //     }

// //     // Check whether an initial notification is available
// //     messaging()
// //       .getInitialNotification()
// //       .then(async (remoteMessage) => {
// //         if (remoteMessage) {
// //           console.log(
// //             'Notification caused app to open from quit state:',
// //             remoteMessage.notification,
// //           );
// //         }
// //       });

// //     // Assume a message-notification contains a "type" property in the data payload of the screen to open

// //     messaging().onNotificationOpenedApp(async (remoteMessage) => {
// //       console.log(
// //         'Notification caused app to open from background state:',
// //         remoteMessage.notification,
// //       );
// //     });


// //     // Register background handler
// //     messaging().setBackgroundMessageHandler(async remoteMessage => {
// //       console.log('Message handled in the background!', remoteMessage);
// //     });


// //     const unsubscribe = messaging().onMessage(async remoteMessage => {
// //       Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
// //     });

// //     return unsubscribe;

// //   }, [])

