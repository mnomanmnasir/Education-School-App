import { StyleSheet, View, TextInput, Button } from 'react-native';
import React, { useState } from 'react';


export default function AddTodo({ onSubmitHandler }) {
  const [text, setText] = useState("");
  const changeHandler = (text) => {
    setText(text);
  }
  const handleSubmit = () => {
    if (text.trim()) {
      onSubmitHandler(text);
      setText(""); // Clear the input field after adding a student
    }
  };

  return (
    <View style={styles.form}>
      <TextInput style={styles.input}
        placeholder='Enter the name'
        onChangeText={changeHandler}
        value={text}
      />
      <Button
        onPress={handleSubmit}
        title={"Add Student"} />
    </View>
  )
}
const styles = StyleSheet.create({
  form: {
    marginVertical: 5
  },
  input: {
    borderBottomColor: "#ddd",
    borderBottomWidth: 1,
    marginBottom: 10,
    fontSize: 16
  },
});