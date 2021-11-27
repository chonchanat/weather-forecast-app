import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';

export default function PredictWeather({ predictData }) {

    if (predictData) {
        // predictData.shift();
        // predictData.pop();

        let date = new Date();
        const predict = predictData.map((data, index) => {
            return (
                <View key={index} style={styles.contentPredict}>
                    {/* <Text>{data.weather[0].icon}</Text> */}
                    <Text>{date.getDate() + index + 1}</Text>
                    <Image source={{uri: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}} style={styles.img}/>
                    <Text>{data.temp.day.toFixed(0)}°</Text>
                </View>
            );
        });

        return (
            <View style={styles.containerPredict}>
                {predict}
            </View>
        );
    }
    else {
        return (
            <>
                <Text>None</Text>
            </>
        );
    }
}

const styles = StyleSheet.create({
    containerPredict: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20,
    },
    contentPredict: {
        backgroundColor: "#ffdab9",
        paddingVertical: 20,
        alignItems: "center",

    },
    img: {
        width: 50,
        height: 50,
        marginVertical: 10,
    },
});