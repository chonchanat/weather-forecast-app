import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>Weather API</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        paddingTop: 38,
        height: 110,
        backgroundColor: "coral",
    },
    title: {
        fontSize: 34,
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
    }
});