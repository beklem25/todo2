import React from 'react';
import {TextInput, Button, StyleSheet, View} from "react-native";


const AddTodo = ({ onSubmit }) => {

    const pressHandler = () => {
        onSubmit('Test')

    }

    return (
        <View style={styles.block}>
            <TextInput style={styles.input}/>
            <Button title='Додати' onPress={pressHandler} />

        </View>
    )
}

const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    input: {
        width: '70%',
        padding: 10,
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomColor: '#900BB5',

    }
})

export default AddTodo;