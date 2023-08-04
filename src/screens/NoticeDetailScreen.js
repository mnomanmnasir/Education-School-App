import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const NoticeDetailScreen = ({ route, navigation }) => {
  const { item } = route.params;

  // Function to navigate to individual notice detail screen
  // const goToNoticeDetail = () => {
  //   navigation.navigate('IndividualNoticeDetail', { notice: item });
  // };

  return (
    // <TouchableOpacity onPress={goToNoticeDetail}>
      <View style={{ padding: 20 }}>
        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>
          Title: {item.title}
        </Text>
        <Text style={{ fontWeight: 'bold' }}>
          Description: {item.description}
        </Text>
        <Text style={{ fontWeight: 'bold' }}>Summary: {item.summary}</Text>
        <Text style={{ fontWeight: 'bold' }}>
          Created at: {item.created_at}
        </Text>
        <Text style={{ fontWeight: 'bold' }}>Updated at: {item.updated_at}</Text>
        <Text>Value: {item.value}</Text>
      </View>
    // </TouchableOpacity>
  );
};

export default NoticeDetailScreen;
