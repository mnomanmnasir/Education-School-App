
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, FlatList, Image } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

// const API_URL = 'https://froebelapp.com/api/get/notice';
const API_URL = 'https://restcountries.com/v3.1/name/pk';
const COLOR = '#0015b0';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      // error: null,
    };
  }

  componentDidMount() {
    this.apiCall();
  }

  async apiCall() {
    try {
      let token = await AsyncStorage.getItem("JWT");
      // console.log(apiToken)
      if (token === null) {
        const response = await axios.get(API_URL);
        const responseData = response.data;
        if (responseData.token) {
          token = responseData.token;
          await AsyncStorage.setItem('jwtToken', token);
          console.log('Token stored successfully:', token);
        }
      } else {
        console.log('Data does not exist.');
      }

      const headers = {
        Authorization: `Bearer ${token}`,
      };

      const response = await axios.get(API_URL, { headers });
      const responseData = response.data;

      if (responseData.status === 'success') {
        const data = responseData.data;
        this.setState({ data, error: null });
      } else {
        throw new Error('An error occurred while retrieving the data.');
      }
    }
    catch (error) {
      console.log('Error:', error);
      let token = 'Error occurred while fetching data.';
      if (error.response && error.response.status) {
        if (error.response.status === 500) {
          errorMessage = 'Internal Server Error. Please try again later.';
        } else {
          errorMessage = `Request failed with status code ${error.response.status}.`;
        }
      }
      this.setState({ error: errorMessage });
    }
  }

  render() {
    const { data, error } = this.state;

    if (error) {
      return (
        <View style={styles.container}>
          <Text style={styles.errorText}>Error: {error}</Text>
        </View>
      );
    }
    return (
      <View style={styles.container}>
        {error ? (
          <Text>{error}</Text>
        ) : (
          <FlatList
            ItemSeparatorComponent={() => <View style={styles.separator} />}
            data={data}
            keyExtractor={(item) => item?.id}
            renderItem={({ item }) => {
              if (!item || typeof item.id === 'undefined') {
                return null;
              }
              return (
                <View style={styles.item}>
                  <View style={{ width: '15%' }}></View>
                  <View style={{ width: '85%' }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20 }}>
                      id : {item.id}
                    </Text>
                    <Text style={{ fontWeight: 'bold' }}>
                      title : {item.title}
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
                    <Text>{item.value}</Text>
                  </View>
                </View>
              );
            }}
          />
        )}
      </View>
    );
  }
}

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
    color: '#FFF',
  },
  container: {
    padding: 10,
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
});

export default App;
