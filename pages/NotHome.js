import { Button, StyleSheet, Text, View, Pressable } from 'react-native'
import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import Icon from 'react-native-vector-icons/FontAwesome'
import Hamburger from "../components/hamburger"
const NotHome = (props) =>{
  const [isOn, setIsOn] = useState(true);
  const switchu = () => {
      setIsOn(!isOn);
  };
  const myIcon = <Icon name="rocket" size={30} color="#900" />; 

  return(
      <View style={styles.homeBody}>     
        {isOn && <Hamburger navigation = {props.navigation}/>}       
        <View style={styles.body}> 
          <Text>NotHome pageeeeeee</Text>
          <Icon name="music" size={30} color="#fff" onPress={switchu} style={styles.but}/>
          <Icon name="glass" />
        </View>
        <Pressable  onPress={switchu} style={styles.but} android_ripple={{color:'blue'}}> 
          <Text>Hello there /</Text>
        </Pressable>
          <StatusBar style='dark' />
      </View>
  )
}

const styles = StyleSheet.create({
  homeBody:{
    flex: 1,
    flexDirection: "row"
  },
  body: {
      flex: 2,
      position: 'relative',
      backgroundColor: 'orange',
      height: '100%',
  },
  but:{
    position: "absolute",
    backgroundColor: 'purple',
    top: 0,
    left: 0
}
});

export default NotHome;