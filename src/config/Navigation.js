import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import About from '../screens/About';
import Location from '../screens/Location'
import Home from '../screens/Home';
// import LocalNotification from '../screens/LocalNotification'
import OurParents from '../screens/OurParents'
import Service from '../screens/Service'
import Contact from '../screens/Contact'
import TermCalendar from '../screens/TermCalendar';
import Notices from '../screens/Notices'
import CallUs from '../screens/CallUs'
import User from '../screens/User'
import Options from '../screens/Options'
import Admin from '../screens/Admin'
import Event from '../screens/Event'
import Login from '../screens/Login'
import SignUp from '../screens/SignUp'
import { StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import NoticeDetailScreen from '../screens/NoticeDetailScreen';

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login"
                    component={Login}
                />

                <Stack.Screen name="SignUp"
                    component={SignUp}

                />
                <Stack.Screen name="Home"
                    component={Home}

                    options={{ headerShown: false }}
                />
                <Stack.Screen name="NoticeDetailScreen"
                    component={NoticeDetailScreen}
                    options={{ title: 'Notice Details' }}
                />

                <Stack.Screen name="About" component={About}

                    options={{
                        title: "Abouting"
                    }}
                />
                <Stack.Screen name="Service" component={Service}
                />  
                {/* <Stack.Screen name="LocalNotification" component={LocalNotification} /> */}
                <Stack.Screen name="Contact" component={Contact} />
                <Stack.Screen name="Location" component={Location} />
                <Stack.Screen name="TermCalendar" component={TermCalendar} />
                <Stack.Screen name="Notices" component={Notices}
                />
                <Stack.Screen name="CallUs" component={CallUs} />
                <Stack.Screen name="OurParents" component={OurParents} />
                <Stack.Screen name="Options" component={Options} />
                <Stack.Screen name="User" component={User} />
                <Stack.Screen name="Admin" component={Admin} />
                <Stack.Screen name="Event" component={Event} />
                {/* <Stack.Screen name="LocalNotificaition" component={LocalNotificaition} /> */}
            </Stack.Navigator>
        </NavigationContainer>
    );
}


const styles = StyleSheet.create({
    // homeNavigator: {
    //     //   flex: 1,

    //     backgroundColor: 'red',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     //   borderRadius: '5'
    // },
    // button: {
    //     //   flex: 1,
    //     width: 500,
    //     height: 500,
    //     resizeMode: 'contain',
    //     marginTop: 100
    // }

});


export default Navigation;