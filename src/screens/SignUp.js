import React, { useContext, useState } from 'react';
import { View, ScrollView, StyleSheet, Text, Button, Touchable, TouchableOpacity } from 'react-native';
import Background from './Background';
import Btn from './Button';
import { darkGreen } from './Constants';
import Field from './Fields';
import Navigation from '../config/Navigation';
import { TextInput } from 'react-native-paper';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
// import { AuthContext } from '../../components/Context';


const SignUp = (props) => {

  const [name, setName] = useState();

  // const [parent_name, setparent_name] = useState();
  // const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  // const [contact, setContact] = useState();
  const [password, setPassword] = useState();
  const navigation = useNavigation();
  // const val = useContext(AuthContext);
  // const {register} = useContext(AuthContext) 

  myfun = async () => {
    try {
      const response = await fetch('https://froebelapp.com/api/auth/register', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 'name': name, 'email': email, 'password': password })
      });

      const resData = await response.json()
      if (resData.status === true) {
        // Login successful, redirect to the home page
        navigation.navigate('Login');
      } else {
        alert(resData.message);
      }
    }
    catch (error) {
      console.error(error);
    }

  };
  return (
    <ScrollView
      // contentContainerStyle={styles.container}
      // horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      >

      <View style={{ alignItems: 'center' }}>
        {/* <Text
          style={{
            color: 'white',
            fontSize: 64,
            fontWeight: 'bold',
            marginTop: 20,
          }}>
          Register
        </Text> */}
        <Text
          style={{
            color: 'blue',
            fontSize: 25,
            fontWeight: 'bold',
            marginBottom: 20,
          }}>
          Create a new account
        </Text>
        <View
          style={{
            backgroundColor: 'white',
            height: 700,
            width: 460,
            // borderTopLeftRadius: 130,
            paddingTop: 10,
            alignItems: 'center',
          }}>
          <TextInput value={name}
            onChangeText={(value) => setName(value)} placeholder="First Name" style={{ width: 300, borderRadius: 10, margin: 10 }} />
          {/* <TextInput
            value={parent_name}
            style={{ width: 300, borderRadius: 10, margin: 10 }}
            placeholder="Enter your parent name"
            onChangeText={(value) => setEmail(value)}
          // keyboardType={'email-address'}

          /> */}

          <TextInput
            value={email}
            style={{ width: 300, borderRadius: 10, margin: 10 }}
            placeholder="Email"
            onChangeText={(value) => setEmail(value)}
          // keyboardType={'email-address'}

          />
          <TextInput value={password} placeholder="Password" secureTextEntry={true}
            onChangeText={(value) => setPassword(value)} style={{ width: 300, borderRadius: 10, margin: 10 }} />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              width: '78%',
              paddingRight: 16
            }}>
            {/* <Text style={{color: 'grey', fontSize: 16}}>
              By signing in, you agree to our{' '}
            </Text> */}
          </View>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: "center",
              width: '78%',
              paddingRight: 16,
              marginBottom: 10
            }}>
          </View>
          <Button onPress={myfun} title='SignUp'></Button>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
              Already have an account ?{' '}
            </Text>
            {/* <TouchableOpacity
                onPress={() => props.navigation.navigate('Home')}>
                <Text
                  style={{ color: 'skyblue', fontWeight: 'bold', fontSize: 16 }}>
                  Login
                </Text>
              </TouchableOpacity> */}
          </View>
          <TouchableOpacity style={{ borderRadius: 50 }}>
            <Ionicons.Button onPress={() => props.navigation.navigate('Login')} size={35} style={styles.icon} >
              <Text style={styles.buttonText}>
                Login
              </Text>
            </Ionicons.Button>
            {/* <Button onPress={() => props.navigation.navigate('Home')} title='Login'>
                        </Button>  */}
          </TouchableOpacity>
        </View>
      </View>
      {/* </Background> */}
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  // container: {
  //   flexGrow: 1,
  //   padding: 16,
  // },
  Field: {
    padding: 50
  },

  Button: {
    // padding: 10,
    //    color: 'yellow',
    // width: 1000,
    alignItems: 'center',
    marginTop: -150,
    // borderColor: 
    border: 10,
    // height:0,
    // borderRadius: 30,
    // fontSize: 200,
  },
  buttonText: {
    // padding: 10,
    // color: 'yellow',
    width: 250,
    textAlign: 'center',
    alignItems: 'center',
    //    marginTop: -150,
    // borderColor: 
    // border: 10,
    color: 'white',

    // borderRadius: 100,
    // fontSize: 300,
    fontSize: 20,
    // height:
    // backgroundColor: ''

    // backgroundColor: 'skyblue'
  }
})

export default SignUp;