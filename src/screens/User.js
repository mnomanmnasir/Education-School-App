import React from 'react'
import { StyleSheet, ActivityIndicator, TextInput, FlatList, Text, TouchableOpacity, View, Image, ScrollView, Button, ImageBackground } from 'react-native';
import Navigation from '../config/Navigation';
import Ionicons from '@expo/vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';


function TermCalendar(props) {
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 25 }}>
                Welcome To Users
            </Text>
            <TouchableOpacity style={styles.Button}>

                <Ionicons.Button name='home-outline' onPress={() => props.navigation.navigate('Home')} size={34} style={styles.icon} >
                    <Text style={{ fontSize: 20, color: '#fff' }}>
                        Go To Home Page
                    </Text>
                </Ionicons.Button>
            </TouchableOpacity>
            {/* <Button onPress={() => props.navigation.navigate('Service')} title='Go to Service'> </Button> */}
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },

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

export default TermCalendar;