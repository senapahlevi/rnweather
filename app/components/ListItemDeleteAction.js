import React from 'react';
import {View,StyleSheet} from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import colors from '../config/colors';

function ListItemDeleteAction({onPress}){
    return (
    <TouchableWithoutFeedback onPress={onPress}>
        <View>
            <MaterialCommunityIcons 
            name="trash-can"
            size={35} 
            color={colors.white}>

            </MaterialCommunityIcons>
        </View>
    </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container :{
        backgroundColor:colors.danger,
        width:70,
        justifyContent:"center",
        alignItems:"center"
    }
});