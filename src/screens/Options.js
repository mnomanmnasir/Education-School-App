import React from 'react'
import { StyleSheet, ActivityIndicator, TextInput, FlatList, Text, TouchableOpacity, View, Image, ScrollView, Button, ImageBackground } from 'react-na  tive';
import Navigation from '../config/Navigation';
import Ionicons from '@expo/vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';


function Options(props) {
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 25 }}>
                Select Any Option?
            </Text>
            <TouchableOpacity style={styles.Button}>

            <Ionicons.Button name='person' onPress={() => props.navigation.navigate('User')} size={34} style={styles.icon} >
            
            <Text style={{fontSize: 20, color: '#fff'}}>
                 User
              </Text>
                </Ionicons.Button>
</TouchableOpacity>                          

<TouchableOpacity style={styles.Button}>

<Ionicons.Button name='ios-business' onPress={() => props.navigation.navigate('Admin')} size={34} style={styles.icon} >

<Text style={{fontSize: 20, color: '#fff'}}>
     Admin
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

export default Options;