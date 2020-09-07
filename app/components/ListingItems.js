import React from 'react';
import {View,StyleSheet, Image, TouchableOpacity,TouchableHighlight} from 'react-native';

import AppText from './AppText';
import colors from '../config/colors';

import Swipeable from "react-native-gesture-handler/Swipeable";

function ListingItems({title,subTitle,image,onPress,renderRightActions}){
    return(
    <Swipeable renderRightActions={renderRightActions}>
    <TouchableHighlight onPress={()=>console.log()}>
        <View style={styles.container}>
            <Image style={styles.image} source={image}/>
                <View>
                    <AppText style={styles.title}>{title}</AppText>
                    <AppText style={styles.subTitle}>{subTitle}</AppText>
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
   image:{
       width:70,
       height:60,
       borderRadius:35,
       marginRight:20
   },
   subTitle:{
       color:colors.medium
   },
   title:{
       fontWeight:"500"
   }
});
export default ListingItems;