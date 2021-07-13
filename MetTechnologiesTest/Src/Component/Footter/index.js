import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    ImageBackground,
    TouchableOpacity,
    Dimensions,
    StatusBar,
    TextInput
} from 'react-native';
const axios = require('axios');
const Devicewidth = Dimensions.get('window').width;
const Deviceheight = Dimensions.get('window').height;



const Footer = (props) => {

    return (
        <View style={styles.Container}>
            <StatusBar backgroundColor="#eee" barStyle='dark-content'/>
            <View style={styles.FooterIconContainer}>
                <TouchableOpacity >
                    <View style={{
                        height: Deviceheight / 20,
                        width: Devicewidth / 10, alignItems: "center", justifyContent: "center", alignSelf: "center",backgroundColor:"#ABB8C3",padding:5,borderRadius:10
                    }}>
                        <Image source={require("../../Assets/Home.png")} style={{ height: "80%", width: "80%", }}></Image>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity >
                    <View style={{
                        height: Deviceheight / 30,
                        width: Devicewidth / 16, alignItems: "center", justifyContent: "center", alignSelf: "center",
                    }}>
                        <Image source={require("../../Assets/Search.png")} style={{ height: "80%", width: "80%",resizeMode:"cover" }}></Image>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{  borderRadius: 360, height: Deviceheight / 9, width: Devicewidth /4.5, alignItems: 'center', justifyContent: 'center', top: -15 }}>
                            <Image source={require("../../Assets/Bag.png")} style={{ height: "100%", width: "100%",resizeMode:"cover" }}></Image>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={{
                        height: Deviceheight / 26,
                        width: Devicewidth / 15, alignItems: "center", justifyContent: "center", alignSelf: "center",
                    }}>
                        <Image source={require("../../Assets/Hearts.png")} style={{ height: "60%", width: "80%",resizeMode:"cover" }}></Image>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={{
                        height: Deviceheight / 20,
                        width: Devicewidth / 15, alignItems: "center", justifyContent: "center", alignSelf: "center",
                    }}>
                        <Image source={require("../../Assets/Profile.png")} style={{ height: "50%", width: "70%", }}></Image>
                    </View>
                </TouchableOpacity>


            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        alignSelf: 'center',
        justifyContent: "center",
        width: Devicewidth,
        height: Deviceheight / 13,
        backgroundColor: "#fff",
        borderTopColor: '#f1f1f1',
        borderTopWidth: 1,
        elevation: 1,
    },
    FooterIconContainer: {
        width: Devicewidth,
        height: Deviceheight / 13,
        justifyContent: 'space-around',
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: '#fff',
        borderTopColor: '#f1f1f1',
        borderTopWidth: 1,
    },
})


export default Footer