import react from 'react'
import { StyleSheet } from 'react-native'


const welcomeTextHeight = 50;
export const styles = StyleSheet.create({


    container: {
        height: 200,
        backgroundColor: '#024aad',
        alignItems: 'center',
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
    },
    centerLogoWrapper: {
        position: 'absolute',
        bottom: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#8ff',
        overflow: 'hidden'
    },
    centerLogo: {
        flex: 1,
        borderRadius: 50,
        width: 150

    },
    welcomeTextWrapper: {
        position: 'absolute',
        bottom: 0,
        height: welcomeTextHeight,
        justifyContent: 'center'
    },
  
})