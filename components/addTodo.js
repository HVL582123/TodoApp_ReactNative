import { StyleSheet, TextInput, View, Button } from 'react-native';
import React, { useState } from 'react';

export default function AddTodo ({ submitHandler }) {
    
    const [text, setText] = useState('');

    const changeHandler = (textVal) => {
        setText(textVal);
    }

    const submitAndClear = () => {
      submitHandler(text)
      setText('')
    }

    return (
    <View>
      <TextInput
      style={styles.input}
        placeholder='new todo...'
        onChangeText={changeHandler}
        value={text}    //Needed for submiAndClear to properly work?
      />
      <Button onPress={() => submitAndClear()} title='add todo' color='coral' />
    </View>
  )
}


const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#565656',
    },
})