import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import IMAGES from '../../images';

const SplashScreen = ({navigation} : any) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.reset({
              index: 0,
              routes: [{ name: 'HomeScreen' }],
            });
          }, 2000);
    },[])
  return (
    <View style={styles.fullpage}>
      <View style={{ padding: 20 }}>
                <Image source={IMAGES.HERO} style={{ width: 300, height: 300, margin: "auto" }} />
            </View>
      <Text style={styles.txt}>Welcome to Weather App!!</Text>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
    fullpage:{
        flex:1,
        margin:"auto",
        justifyContent:"center"
    },
    txt:{
        color:"gray",
        fontSize:50,
        fontWeight:200
    }
})