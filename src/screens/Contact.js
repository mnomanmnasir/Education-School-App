import React from 'react'
import { StyleSheet, ActivityIndicator, TextInput, FlatList, Text, TouchableOpacity, View, Image, ScrollView, Button, ImageBackground } from 'react-native';
import Navigation from '../config/Navigation';
// import Ionicons from '@expo/vector-icons/Ionicons';
import Ionicons from '@expo/vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';


function Contact(props) {
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 32}}>
                Welcome To Contact
            </Text>
            <TouchableOpacity style={styles.Button}>

<Ionicons.Button name='home-outline' onPress={() => props.navigation.navigate('Home')} size={34} style={styles.icon} >

    <Text style={{ fontSize: 20, color: '#fff' }}>
        Go To Home Page
    </Text>
</Ionicons.Button>
</TouchableOpacity>
            {/* <Button onPress={() => props.navigation.navigate('About')} title='Go to about'> </Button> */}
            {/* <Button onPress={() => props.navigation.navigate('About')} title='Go to about'> </Button> */}
            {/* <Button onPress={() => props.navigation.navigate('About')} title='Go to about'> </Button> */}
            {/* <Button onPress={() => props.navigation.navigate('About')} title='Go to about'> </Button> */}
        
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
        // marginTop: 
    },
    // Button: {
    //     padding: 10
    // }
    
    Button: {
        padding: 10,
        width: 300,


    },
    icon: {
        // marginLeft: -180,
        // marginTop: 0,
        // color: 'green',
        // marginHorizontal: 10,
        // marginVertical: 50,
        // paddingVertical: 50,
        justifyContent: 'center',
        alignItems: 'center',
        // fontSize: 50
    },
})

export default Contact;