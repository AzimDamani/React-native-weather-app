import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Props = {
    children: string
}

const Header = ({children}: Props) => {
  return (
    <View>
      <Text style={styles.txt}>{children}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    txt:{
        color:"black",
        fontWeight:300,
        fontSize:50
    }
})