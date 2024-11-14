import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Props = {
    title: string | number
}

const CommonTxt = ({title}: Props) => {
  return (
    <Text style={styles.txt}>{title}</Text>
  )
}

export default CommonTxt

const styles = StyleSheet.create({
    txt:{
        fontWeight:500,
        fontSize:20,
        color:"#313131"
    }
})