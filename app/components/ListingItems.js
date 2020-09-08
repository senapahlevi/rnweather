import React from 'react';
import {View,StyleSheet, Image, TouchableOpacity,TouchableHighlight} from 'react-native';

import AppText from './AppText';
import colors from '../config/colors';

import Swipeable from "react-native-gesture-handler/Swipeable";

function ListingItems({title,subTitle,IconComponent,image,onPress,renderRightActions}){
    return(
    <Swipeable renderRightActions={renderRightActions}>
    <TouchableHighlight onPress={()=>console.log()}>
        <View style={styles.container}>
            {IconComponent}
            {image && <Image style={styles.image} source={image}/>}
                <View style={styles.detailsContainer}>
                    <AppText style={styles.title}>{title}</AppText>
                    {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
                </View>
        </View>
    </TouchableHighlight>
    </Swipeable>
        );
}

const styles = StyleSheet.create({
   container:{
        flexDirection:"row"
   },
   detailsContainer:{
       marginLeft:10,
       justifyContent:"center"
   },
   image:{
       width:70,
       height:60,
       borderRadius:35,
   },
   subTitle:{
       color:colors.medium
   },
   title:{
       fontWeight:"500"
   }
});
export default ListingItems;