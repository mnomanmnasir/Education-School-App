import React, { useRef, Component, useState, useContext } from 'react';
import { View, Text, StyleSheet, Platform, TouchableWithoutFeedback, Button, Keyboard, Touchable, TouchableOpacity, ScrollView, KeyboardAvoidingView } from 'react-native';
import Background from './Background';
import Ionicons from '@expo/vector-icons/Ionicons';
import Btn from './Button';
import { darkGreen } from './Constants';
import Field from './Fields';
import Navigation from '../config/Navigation';
import Home from '../screens/Home'
import { TextInput } from 'react-native-paper';
// import { AsyncStorage } from 'react-native'
import { useNavigation } from '@react-navigation/native';
// import { AuthContext } from '../../components/AuthContext';
// import { useAuth } from '../../components'
import AsyncStorage from '@react-native-async-storage/async-storage';


const API_URL = 'https://froebelapp.com/api/auth/login';


const Login = (props) => {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();
    // const val = useContext(AuthContext);

    myfun = async () => {
        try {
            const token = await AsyncStorage.getItem('jwtToken');
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${token}`, // Replace YOUR_BEARER_TOKEN_HERE with your actual bearer token
                },

                body: JSON.stringify({ 'email': email, 'password': password })
                // console.log(headers.Authorization);
                });

            const resData = await response.json()
            console.log('Response:', resData);
            await AsyncStorage.setItem('token', resData.token);
            // console.log('Token:', token);

            if (resData.status === true) {
                // Login successful, redirect to the home page
                navigation.navigate('Home');
                alert(resData.message);
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
                        marginVertical: 20,
                    }}>
                    Login
                </Text> */}
                <View
                    style={{
                        backgroundColor: 'white',
                        // height: 200,
                        // margin: 10,
                        width: 450,
                        // borderTopLeftRadius: 130,
                        // paddingTop: 10,
                        alignItems: 'center',
                    }}>
                    <Text style={{ fontSize: 35, color: 'skyblue', fontWeight: 'bold' }}>
                        Welcome Back
                    </Text>
                    <Text
                        style={{
                            color: 'grey',
                            fontSize: 19,
                            fontWeight: 'bold',
                            padding: 10
                            // marginBottom: 20,
                        }}>
                        Login to your account
                    </Text>
                    {/* <KeyboardAvoidingView style={styles.container} behavior="padding"> */}
                    {/* <Text>{val}</Text> */}
                    <TextInput
                        value={email}
                        style={{ fontSize: 15, width: 300, borderRadius: 10 }}
                        placeholder="Email"
                        // onPress={myfun}
                        autoCapitalize='none'
                        autoCorrect={false}
                        onChangeText={(value) => setEmail(value)}
                    // keyboardType={'email-address'}
                    // onSubmitEditing={focusPasswordInput}
                    // ref={emailInutRef}

                    />
                    <TextInput
                        value={password}
                        placeholder="Password"
                        autoCapitalize='none'
                        autoCorrect={false}
                        onChangeText={(value) => setPassword(value)}
                        secureTextEntry={true}
                        style={{ width: 300, borderRadius: 10, margin: 10 }}
                    />
                    <View
                        style={{ alignItems: 'flex-end', width: '70%', paddingRight: 16, marginBottom: 200 }}>
                        {/* <Text style={{ color: "skyblue", fontWeight: 'bold', fontSize: 16 }}>
                            Forgot Password ?
                        </Text> */}
                    </View>
                    <TouchableOpacity style={styles.Button}>
                        <Ionicons.Button onPress={myfun}>
                            <Text style={styles.buttonText}>
                                Login
                            </Text>
                        </Ionicons.Button>
                        {/* <Button onPress={() => props.navigation.navigate('Home')} title='Login'>
                        </Button> */}
                    </TouchableOpacity>
                    {/* <Button onPress={() => props.navigation.navigate('Contact')} title='Go to Contact'></Button> */}
                    {/* <Btn textColor='white' bgColor={darkGreen} btnLabel="Login" onPress={() => alert("Logged In")} /> */}
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "center" }}>
                        <Text style={{ fontSize: 16, fontWeight: "bold", padding: 5 }}>Don't have an account ? </Text>
                        {/* <TouchableOpacity> */}
                        {/* <Button onPress={() => props.navigation.navigate('Contact')} title='Go to Contact'></Button> */}
                        {/* <Text style={{ color: "skyblue", fontWeight: 'bold', fontSize: 16 }}>Signup</Text> */}
                        {/* </TouchableOpacity> */}
                    </View>
                    <TouchableOpacity style={{ borderRadius: 50, height: 300 }}>
                        <Ionicons.Button onPress={() => props.navigation.navigate('SignUp')} size={35} style={styles.icon} >
                            <Text style={styles.buttonText}>
                                SignUp
                            </Text>
                        </Ionicons.Button>
                        {/* <Button onPress={() => props.navigation.navigate('Home')} title='Login'>
                        </Button>  */}
                    </TouchableOpacity>

                </View>
            </View>
        </ScrollView>
        // </KeyboardAvoidingView >

    );
}


const styles = StyleSheet.create({


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
        width: 200,
        textAlign: 'center',
        alignItems: 'center',
        //    marginTop: -150,
        // borderColor: 
        // border: 10,
        color: 'white',

        // borderRadius: 100,
        // fontSize: 300,
        fontSize: 15,
        // height:400
        // backgroundColor: ''

        // backgroundColor: 'skyblue'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 16,
    },
})

export default Login;