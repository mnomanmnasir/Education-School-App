import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Dashboard from './src/config/Dashboard/index.js';
// import SignUp from './src/screens/SignUp.js';
// import Login from './src/screen/Login.js'



export default function App() {
  return (
    // <View style={styles.container}>
    
    <Dashboard />
    // <Login/>
    // <LocalNotification/>
    //   <Text> Hello World</Text>
    //   {/* <StatusBar style="auto" /> */}
    //   {/* <Header /> */}
    //   {/* <Image style={styles.header} source={require('./assets/headerImage.jpg')} /> */}
    //   <Header />
    // </View>
  );
}

//   const Header = () => {

//     return(

//     )
// }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // header: {
  //   //   flex: 1,
  //   width: 500,
  //   height: 500,
  //   resizeMode: 'contain'
  // }

});

