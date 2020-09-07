import React from 'react';
import {View, Image,StyleSheet} from 'react-native';

import AppText from '../components/AppText';
import colors from '../config/colors';
import ListingItems from '../components/ListingItems';
function ListingDetails(props){
    return(
        <View>
            <Image style={styles.image} source={require('../assets/jacket.jpg')}/>
            <View style={styles.detailContainer}>
                <AppText style={styles.title}>Red Jacket comfortable</AppText>
                <AppText style={styles.price }>$90</AppText>
                <View style={styles.userContainer}>
                    <ListingItems
                        image={require("../assets/mosh.jpg")}
                        title="Sena Pahlevi Ristiawanto"
                        subTitle="5 Listing"
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    detailContainer:{
      padding:20,  
      marginVertical:20
    },
    image:{
        width:"100%",
        height:200,
        top:50,
        borderRadius:20
    },
    price:{
        color:colors.secondary,
        fontWeight:"bold",
        fontSize:20,
        
    },
    title:{
        fontSize:20,
        fontWeight:"300",
        marginVertical:20
    },
    userContainer:{
        marginVertical:30,
    }
});
export default ListingDetails;