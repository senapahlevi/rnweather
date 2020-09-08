import React, { useState } from 'react';
import {FlatList,StyleSheet,View,StatusBar} from 'react-native';

import ListingItems from '../components/ListingItems';
import Screen from '../components/Screen';
import ListItemsSeparator from '../components/ListingItemsSeparator';
import ListItemDeleteAction from '../components/ListItemDeleteAction';
const InitialMessages=[
    {
        id:1,
        title:'T1',
        description:'D1',
        image:require("../assets/mosh.jpg")
    },
    {
        id:2,
        title:'T2',
        description:'D2',
        image:require("../assets/mosh.jpg")
    }
];

function MessageScreen(props){
    const[messages,setMessages]=useState(InitialMessages);
//delete message from InitialMessages and call the server/delete on backend
    const [refreshing,setRefreshing] = useState(false);
    

    const handleDelete = (message) =>{
    setMessages(messages.filter((m)=>m.id!==message.id));
    };

return(
    <Screen>
        <FlatList
            data={messages}
            keyExtractor={(message) => message.id.toString()}
            renderItem={({item})=>(
            <ListingItems
                subTitle={item.description}
                image={item.image}
                onPress={()=>console.log("message selected",item)}
                renderRightActions={()=>(
                <ListItemDeleteAction onPress={()=>handleDelete(item)}/>
                )}
             />
            )}
        ItemSeparatorComponent={ListItemsSeparator}
        refreshing={refreshing}
        onRefresh={()=>{
            setMessages([
                {
                    id:2,
                    title:'T2',
                    description:'D1',
                    image:require("../assets/mosh.jpg")
                },
            ]);
        }}
    />
    </Screen>
    );
}

const styles = StyleSheet.create({
 
});
export default MessageScreen;