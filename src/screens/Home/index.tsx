import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react';
import Header from '../../atoms/Headers';
import IMAGES from '../../images';
import LinearGradient from 'react-native-linear-gradient';
import InputBar from '../../atoms/InputBar';
import HeroImg from '../../atoms/HeroImg';
import CommonButton from '../../atoms/CommonBtn';
import FavBtn from '../../atoms/FavBtn';
type DataP = {
    Location: object
    current: object,
}

const HomeScreen = ({ navigation, route }: any) => {
    const [city, setCity] = useState<string>("");
    const [favouriteCities, setFavCities] = useState<string[]>([]);
    const [weatherInfo, setWeatherInfo] = useState({});

    const saveToFavourites = (cityName: string) => {
        setFavCities((prev) => [cityName, ...prev]);
    }


    const searchData = async (city: string) => {
        navigation.navigate("DetailsScreen", { cityName: city, saveToFavourites })
    }
    return (
        <View style={{padding:20}}>
        
            <FavBtn title={"Saved -📌"} onPress={() => navigation.navigate("FavoutitesScreen", { favouriteCities })}/>
            <HeroImg />
            <Header children={"Enter your City name"} />
            <InputBar value={city} onChangeText={setCity} placeholder='Hyderabad...'  />
            <CommonButton title={"Search 🔍"} onPress={() => searchData(city)}/>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
  
})