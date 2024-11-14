import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

type Props ={
    title:string,
    onPress: () => void
}

const FavBtn = ( {title, onPress} : Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.btn}>
    <Text style={styles.txt}>{title}</Text>
</TouchableOpacity>
  )
}

export default FavBtn

const styles = StyleSheet.create({
    btn:{
        
        
    },
    txt:{
        color:"gray",
        fontWeight:200,
        fontSize:20,
        textAlign:"right",
    }
})