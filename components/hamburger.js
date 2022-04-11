import React from 'react';
import { Button, StyleSheet, Text, View, Pressable } from 'react-native';
const Hamburger = (props) =>{
  return(
 <View style={styles.hamburger}>
    <Button title="Home" color="blue" onPress={() => props.navigation.navigate('Home')} />
    <Button title="NotHome" color="blue" onPress={() => props.navigation.navigate('NotHome')} />
  </View>
  )
}

const styles = StyleSheet.create({
hamburger: {
  flex: 1,
  flexDirection: 'column',
  backgroundColor: 'red',
  height: '100%',
  maxWidth: '30%',
  display: 'flex',
  paddingTop: 30
}
});
export default Hamburger;