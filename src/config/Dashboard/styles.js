import { StyleSheet } from "react-native";
export const cardHeight = 100;
export const cardMargin = 16;

export const styles = StyleSheet.create({

    safeArea: {
        flex: 1,
        // height: 50,
        backgroundColor: '#891393cc',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    container: {
        flex: 1,
        backgroundColor: '#fefefe',
        //   alignItems: 'center',
        //   height: 10,
        //   justifyContent: 'center',
    },

    renderItemsContainer: {
        padding: 0,
        // margin: 50
    },

    row: {
        height: 100,
        margin: cardMargin,
        backgroundColor: '#f1f1f1',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,

    },
    shadow: {
        shadowColor: 'green',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.4,
        shadowRadius: 5,
    },

    // header: {
    //   //   flex: 1,
    //   width: 500,
    //   height: 500,
    //   resizeMode: 'contain'
    // }
    cardContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'yellow',
    },

});

