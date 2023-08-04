import { StyleSheet, Text, TextInput, View, FlatList, Button, TouchableOpacity, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import React, { useState, useEffect } from 'react';
// import Header from './components/header';
import AddTodo from './AddParents';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Ionicons from '@expo/vector-icons/Ionicons';



export default function App() {
    const [todos, setTodos] = useState([
        // { todo: 'Buy a coffee', key: '1' },
        // { todo: 'House Cleaning', key: '2' },
        // { todo: 'Buying Items', key: '3' },
    ]);
    // const [children_name, setName] = useState([]);

    useEffect(() => {
        loadTodos();
    }, []);

    const loadTodos = async () => {
        try {
            const storedTodos = await AsyncStorage.getItem('todos');
            if (storedTodos) {
                setTodos(JSON.parse(storedTodos));
            }
        } catch (error) {
            console.error('Error loading todos:', error);
        }
    };
    
    const onPressHandler = (id) => {
        setTodos((preTodos) => preTodos.filter(todo => todo.key !== id));
    };

    const onSubmitHandler = (text) => {
        if (text.length > 0) {
            setTodos((preTodos) => {
                return [{ todo: text, key: Math.random().toString() }, ...preTodos];
            });
            console.log("added: " + text);
        }
        else {
            Alert.alert('OOPS!', 'Please Insert the name', [
                { onPress: () => console.log('alert close') }
            ])
        }
    }
    const saveTodos = async () => {
        try {
            await AsyncStorage.setItem('todos', JSON.stringify(todos));
        } catch (error) {
            console.error('Error saving todos:', error);
        }
    };

    useEffect(() => {
        saveTodos();
    }, [todos]);

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.container}>
                {/* header */}
                {/* <Header /> */}

                <View style={styles.content}>


                    <AddTodo onSubmitHandler={onSubmitHandler} />
                    {/* todo form */}

                    <View >
                        {/* list */}
                        <FlatList
                            data={todos}
                            renderItem={({ item }) => (
                                <TouchableOpacity>
                                    <Text style={styles.list}> {item.todo} </Text>
                                </TouchableOpacity>
                            )}
                        />
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        margin: 30,
    },
    list: {
        padding: 10,
        paddingHorizontal: 35,
        borderWidth: 1,
        borderColor: 'gray',
        borderStyle: "dashed",
        marginVertical: 5,
        borderRadius: 5,
        fontSize: 16
    },
});
