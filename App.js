
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navbar from "./components/Navbar";
import AddTodo from "./components/AddTodo";

export default function App() {
    const [todos, setTodos] = useState([])
    const addTodo = title => {
        // const newTodo = {
        //     id: Date.new().toString(),
        //     title: title
        //}

        setTodos(prev => [
            ...prev,
            {
              id: Date.now().toString(),
              title: title
        }
        ])

    }


    return (
    <View>

      <Navbar />
      <View style={styles.container}>
      <AddTodo onSubmit = {addTodo} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      paddingHorizontal: 30,
      paddingVertical: 20

  }
});
