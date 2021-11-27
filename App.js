import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    SafeAreaView,
    Alert,
    TouchableWithoutFeedback,
    Keyboard,
    FlatList,
} from 'react-native';
import axios from 'axios';

import Header from './component/Header';
import Input from './component/Input';
import CurrentWeather from './component/CurrentWeather';
import PredictWeather from './component/PredictWeather';
import Footer from './component/Footer';

export default function App() {

    console.log("App restarted!")

    const [isLoading, setIsLoading] = useState(false);

    const [weatherData, setWeatherData] = useState({
        provinceName: "",
        temp: "",
        main: "",
        description: "",
        icon: "",
        use: false,
    });
    const [predictData, setPredictData] = useState();

    async function getWeather(provice) {
        let lon;
        let lat;
        await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${provice}&limit=1&appid=4ca3986ff8639e629d04f56454b9dbcd`)
            .then(res => {
                lon = res.data[0].lon;
                lat = res.data[0].lat;
                // console.log("ดึงค่าข้อมูล lon lat เรียบร้อย...")
            })
            .catch(err => {
                Alert.alert("ไม่พบจังหวัดที่คุณค้นหา", "กรุณาค้นหาใหม่อีกครั้ง")
                setIsLoading(false);
            })

        await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&appid=4ca3986ff8639e629d04f56454b9dbcd&units=metric`)
            .then(res => {
                // console.log("ดึงค่าข้อมูลที่ทำนายไว้เรียบร้อยแล้ว...")
                let predict = res.data.daily;
                predict.pop();
                predict.shift();
                setPredictData(predict);
            })
            .catch(err => {
                console.log(err)
            })

        await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${provice}&appid=4ca3986ff8639e629d04f56454b9dbcd&lang=en&units=metric`)
            .then(res => {
                // console.log(`ดึงค่าข้อมูล ${provice} เรียบร้อยแล้ว...`)
                const data = res.data;
                setWeatherData(prev => {
                    return {
                        ...prev,
                        provinceName: data.name,
                        temp: data.main.temp,
                        main: data.weather[0].main,
                        description: data.weather[0].description,
                        icon: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
                        use: true,
                    }
                })
                setIsLoading(false);
            })
            .catch(err => {
                console.log(err)
            })

    }

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <SafeAreaView style={styles.container}>
                <Header />
                <View style={styles.content}>
                    <Input getWeather={getWeather} />
                    {weatherData.use ?
                        (
                            < View style={styles.contentData}>
                                {/* <FlatList
                                    data={predictData}
                                    renderItem={({ data }) => {
                                        <Text>Hello</Text>
                                        // <PredictWeather predictData={data} />
                                    }} /> */}
                                <PredictWeather predictData={predictData} />
                                <CurrentWeather weatherData={weatherData} />
                            </View>
                        )
                        :
                        (<></>)}
                </View>
                <Footer />
            </SafeAreaView>
        </TouchableWithoutFeedback >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: "space-between",
    },
    content: {
        padding: 20,
        height: 550,
    },
    contentData: {
        paddingVertical: 20,
    },
});
