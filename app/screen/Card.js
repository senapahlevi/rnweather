import React from 'react';
import{View,StyleSheet,Image} from 'react-native';

import AppText from"../components/AppText";
import colors from '../config/colors';

function Card({title,subTitle,image}){
    return(
        <View style={styles.card}>
            <Image style={styles.image} source={image}/>
            <View style={styles.detailContainer}>
                <AppText>{title}</AppText>
                <AppText> {subTitle}</AppText>
            </View>
        </View>
    );
}

const styles= StyleSheet.create({
    card:{
        borderRadius:15,
        backgroundColor:colors.white,
        marginBottom:20,
    },
    detailContainer:{
        padding:20
    },
    image:{
        width:"100%",
        height:200,
    },
    subTitle:{
        color:colors.secondary,
        fontWeight:"bold"
    },
    title:{
        marginBottom:7
    },
});
export default Card;