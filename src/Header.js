import React from "react";
import { Image, StyleSheet } from 'react-native'

const Header = () => {

    return (
        <Image style={styles.header} source={require('../assets/headerImage.jpg')} />

    )

}



const styles = StyleSheet.create({
    header: {
        //   flex: 1,
        width: 400,
        height: 100,
        resizeMode: 'contain',
        background: "red"
    },
});

export default Header;