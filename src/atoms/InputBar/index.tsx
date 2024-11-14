import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

type Props ={
    value: string,
    onChangeText: any,
    placeholder: string
}
const InputBar = ({value, onChangeText, placeholder}: Props) => {
  return (
    <View>
      <TextInput style={styles.inp}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      placeholderTextColor={"#dddddd"}
      />
    </View>
  )
}

export default InputBar

const styles = StyleSheet.create({
    inp:{
        color:"black",
        fontSize:30,
        fontWeight: 300,
        borderRadius: 20,
        borderColor:"black",
        marginTop:10,
        marginBottom:10,
        backgroundColor:"white",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        padding:10
    }
})