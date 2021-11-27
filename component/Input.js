import React, { useState } from 'react';
import {
    StyleSheet,
    TextInput,
    Button,
    View,
} from 'react-native';

export default function Input({ getWeather }) {

    const [text, setText] = useState();

    return (
        <View style={styles.containerInput}>
            <TextInput style={styles.inputbar} 
                placeholder="search by city name..."
                onChangeText={setText} />
            <Button title="Search" color="tomato"
                onPress={() => getWeather(text)} />
        </View>
    );
}

const styles = StyleSheet.create({
    containerInput:{
        flexDirection: "row",
        paddingVertical: 10,
    },
    inputbar: {
        borderWidth: 1,
        borderColor: "#777",
        height: 40,
        width: "80%",
        paddingHorizontal: 15,
    },
});