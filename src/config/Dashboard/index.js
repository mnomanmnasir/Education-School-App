import React from 'react'
import { View, SafeAreaViewBase, ScrollView, Text, SafeAreaView, TouchableOpacity, FlatList, Animated } from 'react-native';
import { styles, cardHeight, cardMargin, Button } from './styles'
import AnimatedHeader from '../../commonUI/AnimatedHeader';
import Navigation from '../Navigation'
// import Home from '../../screens/Home'
// import About from './src/screens/About';
import iconLogo from '../../../assets/headerImage.jpg'
import Ionicons from '@expo/vector-icons/Ionicons';
import { SceneView } from 'react-navigation';
// import { AuthProvider } from '../../../components/Context';
// import Button from './Buttons';
// import Navigation from '../config/Navigation';
// import Ionicons from '@expo/vector-icons/Ionicons';



const Dashboard = () => {
    const [inputRange, setInputRange] = React.useState([])
    const data = Array.from({ length: 10 })

    const buttons = [
        {
            title: 'Button 1',
            iconName: 'rocket',
            onPress: () => {
                // props.navigation.navigate('Home')}
                // Action for Button 1
                // props.navigation.navigate('About')
                // handleButtonPress('Button 1');
                // navigation.navigate('Home', { buttonTitle:'Button 1'})
                console.warn('BUTTON 1')
                // navigation.navigate('Home')
            },


        },
        {
            title: 'Button 2',
            iconName: 'heart',
            onPress: () => {
                // Action for Button 2
                // navigation.navigate('About', { buttonTitle:'Button 1'})
                console.warn('BUTTON 2')
            },
        },
    ]
    //     {
    //         title: 'Button 3',
    //         iconName: 'heart',
    //         onPress: () => {
    //             // Action for Button 2
    //         },
    //     },
    //     {
    //         title: 'Button 4',
    //         iconName: 'heart',
    //         onPress: () => {
    //             // Action for Button 2
    //         },
    //     },

    //     {
    //         title: 'Button 5',
    //         iconName: 'heart',
    //         onPress: () => {
    //             // Action for Button 2
    //         },
    //     },
    // {
    //     title: 'Button 3',
    //     iconName: 'star',
    //     onPress: () => {
    //         // Action for Button 3
    //     },
    // },
    // {
    //     title: 'Button 2',
    //     iconName: 'heart',
    //     onPress: () => {
    //         // Action for Button 2
    //     },
    // },
    // {
    //     title: 'Button 2',
    //     iconName: 'heart',
    //     onPress: () => {
    //         // Action for Button 2
    //     },
    // },
    // {
    //     title: 'Button 2',
    //     iconName: 'heart',
    //     onPress: () => {
    //         // Action for Button 2
    //     },
    // },
    // {
    //     title: 'Button 2',
    //     iconName: 'heart',
    //     onPress: () => {
    //         // Action for Button 2
    //     },
    // },
    // {
    //     title: 'Button 2',
    //     iconName: 'heart',
    //     onPress: () => {
    //         // Action for Button 2
    //     },
    // },
    // {
    //     title: 'Button 2',
    //     iconName: 'heart',
    //     onPress: () => {
    //         // Action for Button 2
    //     },
    // },
    // {
    //     title: 'Button 2',
    //     iconName: 'heart',
    //     onPress: () => {
    //         // Action for Button 2
    //     },
    // },
    // {
    //     title: 'Button 2',
    //     iconName: 'heart',
    //     onPress: () => {
    //         // Action for Button 2
    //     },
    // },
    // {
    //     title: 'Button 2',
    //     iconName: 'heart',
    //     onPress: () => {
    //         // Action for Button 2
    //     },
    // },
    // {
    //     title: 'Button 2',
    //     iconName: 'heart',
    //     onPress: () => {
    //         // Action for Button 2
    //     },
    // },
    // {
    //     title: 'Button 2',
    //     iconName: 'heart',
    //     onPress: () => {
    //         // Action for Button 2
    //     },
    // },
    // {
    //     title: 'Button 2',
    //     iconName: 'heart',
    //     onPress: () => {
    //         // Action for Button 2
    //     },
    // },
    // {
    //     title: 'Button 2',
    //     iconName: 'heart',
    //     onPress: () => {
    //         // Action for Button 2
    //     },
    // },
    // {
    //     title: 'Button 2',
    //     iconName: 'heart',
    //     onPress: () => {
    //         // Action for Button 2
    //     },
    // },
    // {
    //     title: 'Button 2',
    //     iconName: 'heart',
    //     onPress: () => {
    //         // Action for Button 2
    //     },
    // },
    // {
    //     title: 'Button 2',
    //     iconName: 'heart',
    //     onPress: () => {
    //         // Action for Button 2
    //     },
    // },
    // {
    //     title: 'Button 2',
    //     iconName: 'heart',
    //     onPress: () => {
    //         // Action for Button 2
    //     },
    // },


    // ];
    // const handleButtonPress = (buttonIndex) => {
    //     // Handle button press based on the button title
    //     buttons[buttonIndex].onPress();
    // };
    const scrollY = React.useRef(new Animated.Value(0)).current;

    React.useEffect(() => {
        func_getInterpolationInputRange();
    }, [])

    const func_getInterpolationInputRange = () => {

        let animationHeight = cardHeight * 2
        let range = Array.from({ length: 3 }).map((item) => {
            animationHeight = animationHeight / 2;
            return animationHeight
        })

        range.push(0)

        let input_range = range.reverse();



        setInputRange(input_range)
    }

    const renderItem = ({ item, index }) => (
        <View style={styles.renderItemsContainer}>
            <View style={[styles.row, styles.shadow]}>
                {/* <Button onPress={() => props.navigation.navigate('Home')} title='Go to home'> </Button> */}
                {/* {buttons.map((button, index) => (
                        <Button
                            key={index}
                            title={button.title}
                            iconName={button.iconName}
                            onPress={button.onPress}
                        />
                    ))} */}
            </View>

            {/* <Navigation /> */}

        </View>
    )
    return (
        // <ScrollView>

        <SafeAreaView style={styles.safeArea}>

            <View style={styles.container}>
                {
                    inputRange?.length > 0 && (
                        <AnimatedHeader headerHeight={{ large: 200, collapse: 120 }}
                            circleHeight={{ large: 150, collapse: 80 }}
                            scrollY={scrollY}
                            inputRange={inputRange}
                            img={iconLogo}
                        />
                    )}


                {/* <View style={styles.cardContent}>
                    {buttons.map((button, index) => (
                        <Button
                            key={index}
                            title={button.title}
                            iconName={button.iconName}
                            onPress={button.onPress}
                        />
                    ))}
                </View> */}
                {/* <AuthProvider> */}
                    <Navigation />
                {/* </AuthProvider> */}
                {/* <FlatList
                    onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }])}
                data={data}
               renderItem={renderItem}
                keyExtractor={(item, index) => `${index} key`}
                /> */}
            </View>
        </SafeAreaView>
        // </ScrollView>
    )
}
export default Dashboard;
