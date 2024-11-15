import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import FavBtn from '../../atoms/FavBtn'
import CommonTxt from '../../atoms/DetailsTxt'
import DetailsLayout from '../../template/Details'

type locationDetail = {
    name: string,
    country: string
}

type condition = {
    text: string,
    icon: string
}

type weatherDetail = {
    temp_c: number,
    temp_f: number,
    condition: condition,
    cloud: number
}

type foreCastDayArray = {
    maxtemp_c: number,
    maxtemp_f: number,
    condition: condition
}
type foreCastDetails = {
    date: string,
    day: foreCastDayArray

}
const DetailsScreen = ({ navigation, route }: any) => {
    const [locationDetails, setLocationDetails] = useState<locationDetail>({
        name: "",
        country: ""
    });
    const [weatherDetails, setWeatherDetails] = useState<weatherDetail>({
        temp_c: 0,
        temp_f: 0,
        condition: {
            text: "",
            icon: ""
        },
        cloud: 0

    });
    const [threeDayFC, setThreeDayFC] = useState<foreCastDetails[]>();

    const saveToFav = (cityName: string) => {
        route.params.saveToFavourites(cityName);
    }

    const getData = async (city: string) => {
        const searchTerm = city === "" ? "Hyderabad" : city
        const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=ea2a8160610549bb80204116222802&q=${searchTerm}&days=3`);
        const data = await response.json();
        const weatherInfo = data.current;
        const locationInfo = data.location;
        const forecastDays = data.forecast.forecastday
        setLocationDetails({ name: locationInfo.name, country: locationInfo.country });

        setWeatherDetails({
            temp_c: weatherInfo.temp_c,
            temp_f: weatherInfo.temp_f,
            condition: {
                text: weatherInfo.condition.text,
                icon: weatherInfo.condition.icon,
            },
            cloud: weatherInfo.cloud
        });
        const foreCastData = forecastDays.map((data: any) => ({
            date: data.date,
            day: {
                maxtemp_c: data.day.maxtemp_c,
                maxtemp_f: data.day.maxtemp_f,
                condition: {
                    text: data.day.condition.text,
                    icon: data.day.condition.icon
                }
            }
        }));

        setThreeDayFC(foreCastData);
    }

    useEffect(() => {
        const city = route.params.cityName;
        getData(city);
    }, [])

    return (
       <DetailsLayout >
            <FavBtn title={"Save ⭐"} onPress={() => saveToFav(locationDetails.name)} />

            <View style={styles.card}>
                <CommonTxt title={locationDetails.name} />
                <CommonTxt title={locationDetails.country} />
                <Image source={{ uri: `https:${weatherDetails.condition.icon}` }} style={{ width: 100, height: 100 }} />
                <CommonTxt title={weatherDetails.condition.text} />
                <CommonTxt title={`${weatherDetails.temp_c} °C`} />
                <CommonTxt title={`${weatherDetails.temp_f} °F`} />
                <CommonTxt title={`Cloud ${weatherDetails.cloud}`} />
            </View>



            <FlatList
                style={{padding:10, margin:"auto",
                    marginTop:20
                }}
                data={threeDayFC}
                keyExtractor={(item) => item.date}
                horizontal
                renderItem={({ item }) => (
                    <View style={styles.forecastCard}>
                        <Text style={{fontSize:10}}>{item.date}</Text>
                        <Image source={{ uri: `https:${item.day.condition.icon}` }} style={{ width: 50, height: 50 }} />
                        <Text style={{fontWeight:700}}>{item.day.maxtemp_c} °C</Text>
                        <Text style={{fontWeight:700}}>{item.day.maxtemp_f} °F</Text>
                    </View>
                )}
            />
        </DetailsLayout>
    )
}

export default DetailsScreen

const styles = StyleSheet.create({
    card: {
        backgroundColor: "white",
        elevation: 5,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.35,
        shadowRadius: 10,
        margin: "auto",
        width: "90%",
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    forecastCard: {
        backgroundColor: "white",
        elevation: 3,
        borderRadius: 10,
        padding: 10,
        marginHorizontal: 10,
        alignItems: 'center',
        width: 90,
    }
})