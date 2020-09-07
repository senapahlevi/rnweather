import React from 'react';
import {View, ImageBackground,StyleSheet,Image, Text } from 'react-native';

import AppButton from '../components/AppButton';

function ScreenWelcome(){
    return(
        <ImageBackground
            blurRadius={2}
            style={styles.background}
            source={require('../assets/background.jpg')}>
        <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require("../assets/logo-red.png")}/>
            <Text>we sell you dont need </Text>
        </View>
        <View style={styles.buttonContainer}>
            <AppButton title="Login"/>
            <AppButton title="Register" color="secondary"/>
        </View>
        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    background:{
        flex:1,
        justifyContent:"flex-end",
        alignItems:"center",
    },
    buttonContainer:{
      padding:20, 
      width:"100%"
    },
    logo:{
    width:100,
    height:100,
    },
    logoContainer:{
        position:"absolute",
        top:70,
        alignItems:"center"
    },
    tagline:{
        fontSize:25,
        fontWeight:"600",
        paddingVertical:10

    }


});
export default ScreenWelcome;