import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import IMAGES from '../../images'

const HeroImg = () => {
  return (
    <View style={styles.component}>
                <Image source={IMAGES.HERO} style={{ width: 300, height: 300, margin: "auto" }} />
    </View>
  )
}

export default HeroImg

const styles = StyleSheet.create({
    component:{
        margin:"auto"
    }
})