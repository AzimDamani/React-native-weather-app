import { StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'

const FavouritesScreen = ({ navigation, route }: any) => {
    const [city, setCity] = useState<string[]>(route.params.favouriteCities);

    

    return (
        <View>
            <FlatList
                data={city}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate("DetailsScreen", { cityName: item })}>
                        <View style={styles.cityItem}>
                            <Text style={{fontWeight:300, textAlign:"center", fontSize:30}}>{item} 📍</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

export default FavouritesScreen;

const styles = StyleSheet.create({
    cityItem: {
        padding: 20,
        backgroundColor:"white",
        margin:20,
        borderRadius:20,
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    }
});
