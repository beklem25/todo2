import React from 'react';
import {Text, View, StyleSheet} from "react-native";

const Navbar = () => {
    return (
        <View style={styles.navbar}>
           <Text style={styles.text}>Завдання </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    navbar: {
        height:70,
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor:'#C30FF5',
        paddingBottom: 10,
    },
    text: {
        color: 'white',
        fontSize: 24,

    }
})

export default Navbar;