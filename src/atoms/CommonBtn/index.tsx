import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

type Props ={
    title:string,
    onPress: () => void
}

const CommonButton = ({title, onPress} : Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.btn}>
        <Text style={styles.txt}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CommonButton

const styles = StyleSheet.create({
    btn:{
        backgroundColor:"#e3f5ff",
        padding:10,
        borderRadius:20,
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        
    },
    txt:{
        color:"#7ecfff",
        fontWeight:900,
        fontSize:20,
        textAlign:"center",
        padding:5
    }
})