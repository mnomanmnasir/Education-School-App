import React, {useState} from 'react'
import { RefreshControl,StyleSheet, ActivityIndicator, TextInput, FlatList, Text, Animated, Dimensions, TouchableOpacity, View, Image, ScrollView, Button, ImageBackground } from 'react-native';
import Navigation from '../config/Navigation';
import Ionicons from '@expo/vector-icons/Ionicons';
// import { IconButton } from 'react-native-paper';
const { height } = Dimensions.get('window');

function Home(props) {
    
    // const [refresh, setRefresh] = useState(false);
    // const pullme = () => {

    //     setRefresh(true)
    //     setTimeout(() => {
    //         setRefresh(false)
    //     }, 3000)
    // }
    // const [username, setUsername] = useState('');
    // const [password, setPassword] = useState('');
    // const [isLoggedIn, setLoggedIn] = useState(false);    
    // const [username, setUsername] = useState('');
    // const [password, setPassword] = useState('');
    // state = {
    //     screenHeight: 0,
    // };
    // onContentSizeChange = (contentWidth, contentHeight) => {
    //     this.setState({ screenHeight: contentHeight });
    // }
    // const handleLogout = () => {
    //     // Clear input fields and perform any other necessary logout actions
    //     setUsername('');
    //     setPassword('');
    //   };
    // const handleLogout = () => {
    //     setUsername('');
    //     setPassword('');
    //     setLoggedIn(false);
    //   };
    const scrollEnabled = true;


    const buttons = [
        {
            title: 'Button 1',
            Ionicons: 'rocket',
            onPress: () => {
                // props.navigation.navigate('Home')}
                // Action for Button 1
                // props.navigation.navigate('About')
                // handleButtonPress('Button 1');
                // navigation.navigate('Home', { buttonTitle:'Button 1'})
                // console.warn('BUTTON 1')
                // navigation.navigate('Home')
            },


        },
    ]
    return (


        <ScrollView
            // contentContainerStyle={styles.scrollview}
            // scrollEnabled={scrollEnabled}
            // onContentSizeChange={this.onContentSizeChange}
            // onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }])}
            // refreshControl={
            //     <RefreshControl
            //         refreshing={refresh}
            //         onRefresh={() => pullme()}
            //     />
            // }
        >
            <View style={styles.container}>

                <Text style={{ fontSize: 32 }}>
                    
                </Text>
                {/* <TouchableOpacity style={styles.Button}>
                    <Ionicons.Button name="home-outline" onPress={() => props.navigation.navigate('About')} size={35} style={styles.icon} >
                        <Text style={styles.btnText}>
                            Home
                        </Text>
                    </Ionicons.Button>
                </TouchableOpacity> */}
                {/* <Button onPress={() => props.navigation.navigate('About')} title='Go to About'>
                    </Button> */}

                {/* <TouchableOpacity style={styles.Button}>

                    <Ionicons.Button name="home-outline" onPress={() => props.navigation.navigate('Login')} size={35} style={styles.icon} >
                        <Text style={{ fontSize: 20, color: '#fff' }}>

                            Welcome to Login Form
                        </Text>

                    </Ionicons.Button> */}
                {/* <Button onPress={() => props.navigation.navigate('About')} title='Go to About'>

                    </Button> */}
                {/* </TouchableOpacity> */}
                {/* <TouchableOpacity style={styles.Button}>

                    <Ionicons.Button name='server-outline' onPress={() => props.navigation.navigate('Service')} size={35} style={styles.icon}>
                        <Text style={styles.btnText}>
                            Serivce
                        </Text>
                    </Ionicons.Button>

                </TouchableOpacity> */}
                {/* <Button onPress={() => props.navigation.navigate('Service')} title='Go to Serivce'>

                    </Button> */}
                {/* <TouchableOpacity style={styles.Button}>
                    <Ionicons.Button name='notifications' onPress={() => props.navigation.navigate('Notification')} style={styles.icon} size={35}>
                        <Text style={styles.btnText}>
                            Notification
                        </Text>
                    </Ionicons.Button>
                </TouchableOpacity> */}
                {/* <Button onPress={() => props.navigation.navigate('Notification')} title='Go to Notification'>
                    </Button> */}
                {/* <TouchableOpacity style={styles.Button}>

                    <Ionicons.Button name='male' onPress={() => props.navigation.navigate('Contact')} style={styles.icon} size={35}>

                        <Text style={styles.btnText}>
                            Contact
                        </Text>
                    </Ionicons.Button>
                </TouchableOpacity> */}
                {/* <Button onPress={() => props.navigation.navigate('Contact')} title='Go to Contact'></Button> */}
                {/* <TouchableOpacity style={styles.Button}>

                    <Ionicons.Button name='location-outline' onPress={() => props.navigation.navigate('Location')} size={35} style={styles.icon} >

                        <Text style={styles.btnText}>
                            Location
                        </Text>
                    </Ionicons.Button>
                </TouchableOpacity> */}
                {/* <Button onPress={() => props.navigation.navigate('Contact')} title='Go to Contact'></Button> */}

                {/* <TouchableOpacity style={styles.Button}>

                    <Ionicons.Button onPress={() => props.navigation.navigate('TermCalendar')} name="calendar" size={35} style={styles.icon}>

                        <Text style={styles.btnText}>
                            Term Calendar
                        </Text>
                    </Ionicons.Button>

                </TouchableOpacity> */}
                {/* <Button onPress={() => props.navigation.navigate('Contact')} title='Go to Contact'></Button> */}
                {/* <Ionicons name='airplane-outline' size={34} /> */}
                {/* <TouchableOpacity style={styles.Button}>

                    <Ionicons.Button name='ios-options' onPress={() => props.navigation.navigate('Options')} size={35} style={styles.icon} >

                        <Text style={styles.btnText}>
                            Options
                        </Text>

                    </Ionicons.Button>

                </TouchableOpacity> */}
                {/* <Button onPress={() => props.navigation.navigate('Contact')} title='Go to Contact'></Button> */}
                {/* <Ionicons name='airplane-outline' size={34} /> */}
                <TouchableOpacity style={styles.Button}>

                    <Ionicons.Button name='ios-newspaper' onPress={() => props.navigation.navigate('Notices')} size={35} style={styles.icon}>
                        <Text style={styles.btnText}>
                            Notices
                        </Text>
                    </Ionicons.Button>
                    {/* <Button onPress={() => props.navigation.navigate('Contact')} title='Go to Contact'></Button> */}

                    {/* <Ionicons name='airplane-outline' size={34} /> */}

                </TouchableOpacity>
                <TouchableOpacity style={styles.Button}>

                    <Ionicons.Button name='ios-call-outline' onPress={() => props.navigation.navigate('CallUs')} size={35} style={styles.icon} >
                        <Text style={styles.btnText}>
                            Call Us
                        </Text>
                    </Ionicons.Button>

                    {/* <Button onPress={() => props.navigation.navigate('Contact')} title='Go to Contact'></Button> */}
                    {/* <Ionicons name='airplane-outline' size={34} /> */}

                </TouchableOpacity>
                <TouchableOpacity style={styles.Button}>

                    <Ionicons.Button name='settings-outline' onPress={() => props.navigation.navigate('Event')} size={35} style={styles.icon} >
                        <Text style={styles.btnText}>
                            Events
                        </Text>
                    </Ionicons.Button>

                    {/* <Button onPress={() => props.navigation.navigate('Contact')} title='Go to Contact'></Button> */}
                    {/* <Ionicons name='airplane-outline' size={34} /> */}

                </TouchableOpacity>
                <TouchableOpacity style={styles.Button}>

                    <Ionicons.Button name='settings-outline' onPress={() => props.navigation.navigate('Login')} size={35} style={styles.icon} >
                        <Text style={styles.btnText}>
                            LogOut
                        </Text>
                    </Ionicons.Button>

                    {/* <Button onPress={() => props.navigation.navigate('Contact')} title='Go to Contact'></Button> */}
                    {/* <Ionicons name='airplane-outline' size={34} /> */}

                </TouchableOpacity>
                <TouchableOpacity style={styles.Button}>

<Ionicons.Button name='settings-outline' onPress={() => props.navigation.navigate('OurParents')} size={35} style={styles.icon} >
    <Text style={styles.btnText}>
        Our Parents
    </Text>
</Ionicons.Button>

{/* <Button onPress={() => props.navigation.navigate('Contact')} title='Go to Contact'></Button> */}
{/* <Ionicons name='airplane-outline' size={34} /> */}

</TouchableOpacity>
                {/* <Button onPress={() => props.navigation.navigate('Contact')} title='Go to Contact'></Button> */}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // display: 'flex',
        // width: 300,
        // backgroundColor: '#fff',
        alignItems: 'center',
        // justifyContent: 'center',
        // marginTop: 50
        // overflow:     'hidden',
        padding: 10
    },
    scrollview: {
        flexGrow: 1,
        // width: 100
    },
    icon: {
        flex: 1,
        // marginLeft: -180,
        // marginTop: 0,
        // color: 'green',
        // marginHorizontal: 10,
        // marginVertical: 50,
        // paddingVertical: 50,
        // justifyContent: 'center',
        // alignItems: 'center',
        // fontSize: 50
    },

    Button: {
        padding: 10,
        width: 400,
    },
    btnText: {
        // marginTop: -50,
        // padding: 100
        // backgroundColor: 'green'
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: 20,
        color: '#f1f1f1',
        flex: 0.9
    }

})

export default Home;