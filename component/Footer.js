import React from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

export default function Footer() {
    return (
        <View style={styles.footer}>
            <Text style={styles.textFooter}>open-api by https://openweathermap.org/</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    footer: {
        height: 60,
        backgroundColor: "coral",
        paddingVertical: 10,
        paddingHorizontal: 20,
        justifyContent: "center",
    },
    textFooter: {
        textAlign: "right",
        color: "white",
    }
});