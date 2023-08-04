import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Animated } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const Button = ({ title, iconName, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
       <Ionicons name={iconName} size={32} color="green" />
           <Text style={styles.title}>{title}
           
           {/* onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }])} */}

           </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#007bff',
    borderRadius: 45,
    padding: 12,
    margin: 8,
    // position: 'absolute',
    // top: 90,
    marginTop: 30,
    width: 250,
    overflow: 'scroll',
    alignItems: 'center',
    // justifyContent: 'center',
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.25/,
    // shadowRadius: 4,
    // elevation: 5,
  },
  title: {
    fontSize: 20,
    color: '#fff',
    marginLeft: 50,
    // justifyContent: 'center',
  },
});

export default Button;