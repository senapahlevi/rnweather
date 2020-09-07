import React from 'react';
import {Image,StyleSheet,View} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import colors from '../config/colors';
function ViewImageScreen(){ 
    return( 
    <View style={styles.container}>    
        <View style={styles.iconClose}>
            <MaterialCommunityIcons name="close" color="white" size={30}/>
        </View>
        
        <View style={styles.iconDelete}>
            <MaterialCommunityIcons name="trash-can-outline" color="white" size={30}/>
        </View>
    <Image resizeMode="contain" 
    style={styles.image} 
    source={require("../assets/chair.jpg")}/>
    </View>
    );
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.black,
        flex:1,
        top:20
    },
    iconClose:{
        top:30,
        position:"absolute",
        left:30,
    },
    iconDelete:{
        top:30,
        position:"absolute",
        right:30,
    },
    image:{
        width:"100%",
        height:"100%",
        top:1
    }, 
})

export default ViewImageScreen;