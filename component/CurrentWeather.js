import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';
import { color } from 'react-native-elements/dist/helpers';

export default function CurrentWeather({ weatherData }) {

    let date = new Date();

    return (
        <View style={styles.containerCurrent}>
            <View style={styles.contentLeft}>
                <Text style={styles.date}>{date.getDate()}/{date.getMonth() + 1}/{date.getFullYear()}</Text>
                <Text style={styles.provinceName}>{weatherData.provinceName}</Text>
                <Text style={styles.provinceTemp}>{weatherData.temp} °C</Text>
                <Text style={styles.provinceMainDes}>{weatherData.main}</Text>
                <Text style={styles.provinceMainDes}>{weatherData.description}</Text>
            </View>
            <View  style={styles.contentRight}>
                <Image source={{ uri: weatherData.icon }} style={styles.img} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    containerCurrent: {
        backgroundColor: "tomato",
        marginTop: 10,
        padding: 30,
        justifyContent: "space-between",
        alignContent: "center",
        flexDirection: "row",
    },
    contentLeft: {
        width: "50%",
    },
    contentRight: {
        width: "50%",
        alignItems: "flex-end",
        justifyContent: "center",
    },
    date: {
        color: "white",
    },
    provinceName: {
        fontSize: 24,
        fontWeight: "bold",
        color: "white",
        marginVertical: 10,
    },
    provinceTemp: {
        fontSize: 18,
        color: "white",
        marginBottom: 10,
    },
    provinceMainDes: {
        fontSize: 18,
        color: "white",
    },
    img: {
        width: 120,
        height: 120,
    },
});