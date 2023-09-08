import React from "react";
import {View, Text, StyleSheet,FlatList} from 'react-native';
import slides from "../../../styles/slides";
import FirstOnBoard from "./onboard1";

const Onboarding =()=>{
    return(
        <View style={style.container}
        horizontal
        >
        <FlatList data={slides} renderItem={({item})=> <FirstOnBoard item={item}/>}
        horizontal
        showsHorizontalScrollIndicator
        />
        </View>
    )
}


const style = StyleSheet.create({
    container:{
        flex: 1,
        justify: "center",
        alignItems: "center"
    }
})

export default Onboarding;