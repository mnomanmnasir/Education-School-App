import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, TouchableOpacity, Text, View, FlatList } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NoticeDetailScreen from './NoticeDetailScreen';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook


const API_URL = 'https://froebelapp.com/api/get/event';
const COLOR = '#0015b0';

const App = (props) => {
  const [email] = useState('admin@email.com');
  const [password] = useState('1234')
  const [data, setData] = useState([]);
  const [error, setError] = useState();
  // const [isLoading, setIsLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    fetchNoticeData();
  }, []);

  const fetchNoticeData = async () => {
    try {
      let token = await AsyncStorage.getItem('token');
      // let token = "8yJpUwsmfRkgjoRRgdOcD88o7Kpib2XJ45s6U1eC";

      const headers = {
        Authorization: `Bearer ${token}`,
      };
      console.log(headers)

      if (!token) {
        // If the token is not available, perform the login API call to get the token
        const loginResponse = await axios.post('https://froebelapp.com/api/auth/login', {
          email: [email], // Replace with your username
          password: [password], // Replace with your password
        });

        console.log(loginResponse.data);

        // Assuming the response contains the token in `loginResponse.data.token`
        // token = loginResponse.data.token;

        // await AsyncStorage.setItem('jwtToken', token);
        // console.log('Token stored successfully:', token);
      }

      const response = await axios.get(API_URL, { headers });
      const responseData = response.data;

      if (responseData.status === 'success') {
        const noticesData = responseData.data;
        setData(noticesData);
        setError(null);
      } else {
        throw new Error('An error occurred while retrizeving the data.');
      }
    } catch (error) {
      console.error('Error:', error);
      let errorMessage = 'Error occurred while fetching data.';
      if (error.response && error.response.status) {
        if (error.response.status === 500) {
          errorMessage = 'Internal Server Error. Please try again later.';
        } else if (error.response.status === 401) {
          errorMessage = `Unauthorized. Please check your login credentials.  `;
        } else {
          errorMessage = `Request failed with status code ${error.response.status}.`;
        }
      }
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }

  };

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Error: {error}</Text>
      </View>
    );
  }


  // useEffect(() => {
  //   fetchNoticeData();
  // }, []);

  return (
    <View style={styles.container}>
      <FlatList
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        data={data}
        keyExtractor={(item) => item?.id}
        renderItem={({ item }) => {
          if (!item || typeof item.id === 'undefined') {
            return null;
          }
          return (
            <TouchableOpacity
              style={styles.item}
              onPress={() => {
                // Navigate to NoticeDetails screen with notice details as params
                props.navigation.navigate('NoticeDetailScreen', { item });

              }}
            >
              <View style={{ width: '15%' }}></View>
              <View style={{ width: '105%' }}>
                {/* <Text style={{ fontWeight: 'bold', fontSize: 20 }}>
                  id : {item.id}
                </Text> */}
                <Text style={{ fontWeight: 'bold', fontSize: 20 }}>
                  {item.title}
                </Text>
                <Text style={{ fontWeight: 'bold' }}>
                  Description : {item.description}

                </Text>
                <Text style={{ fontWeight: 'bold' }}>
                  Summary : {item.summary}
                </Text>
                <Text style={{ fontWeight: 'bold' }}>
                  Created at : {item.created_at}
                </Text>
                <Text style={{ fontWeight: 'bold' }}>{item.update_at}</Text>
                {/* <Text>{item.value}</Text> */}
              </View>
            </TouchableOpacity>

          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: COLOR,
  },
  header: {
    backgroundColor: COLOR,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 50,
  },
  headerText: {
    color: 'green',
  },
  container: {
    padding: 10,
    border: 10,
    borderBottomStartRadius: 50,
    backgroundColor: '#fff',
  },
  separator: {
    height: 15,
    backgroundColor: '#CED0CE',
  },
  item: {
    padding: 15,
    flex: 1,
  },
  tinyIcon: {
    width: 50,
    height: 50,
  },
  errorText: {
    color: 'red',
  },
});

export default App;
