import React from 'react'
import { View, Text, Animated, Image } from 'react-native'
import { styles } from './styles'

const AnimatedHeader = ({
    headerHeight = { large: 250, collapse: 120 },
    circleHeight = { large: 150, collapse: 80 },
    scrollY,
    inputRange,
    img,
}) => {

    /**
       * @description :  Header Height Animation
     */
    const headerHeightAnim = scrollY.interpolate({
        inputRange: inputRange,
        outputRange: [
            headerHeight?.large,
            headerHeight?.large,
            headerHeight?.large - 50,
            headerHeight?.collapse
        ],
        extrapolate: 'clamp'
    });


    /**
       * @description :  Header Logo Animation
     */

    const headerLogoAnim = scrollY.interpolate({
        inputRange: inputRange,
        outputRange: [
            circleHeight?.large,
            circleHeight?.large,
            circleHeight?.large - 10,
            circleHeight?.collapse
        ],
        extrapolate: 'clamp'
    });



    const headerLogoRadiusAnim = scrollY.interpolate({
        inputRange: inputRange,
        outputRange: [
            circleHeight?.large / 2,
            circleHeight?.large / 2,
            (circleHeight?.large - 10) / 2,
            circleHeight?.collapse / 2
        ],
        extrapolate: 'clamp'
    });


    /**
       * @description :  Header Logo UI
     */
    const func_renderCenterLogo = () => {

        return (

            <Animated.View style={[styles.centerLogoWrapper, {
                height: headerLogoAnim,
                width: headerLogoAnim,
                borderRadius: 90
            }]}>
                <Animated.Image source={img} style={styles.centerLogo} />
            </Animated.View>
        )

    }

    const func_renderWelcomeText = () => {
        return (
            <Animated.View style={styles.welcomeTextWrapper}>
                <Text style={{ color: '#D9FAFB', fontSize: 25 }}>
                Froebel Education Center
                </Text>
            </Animated.View>

        )
    }
    return (

        <Animated.View style={[styles.container, {

            height: headerHeightAnim

        },
        ]}>
            {func_renderWelcomeText()}
            {func_renderCenterLogo()}


        </Animated.View>



    )

}

export default AnimatedHeader;