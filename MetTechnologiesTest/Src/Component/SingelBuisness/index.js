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



const SingelBuisness = (props) => {

    return (
        <View style={styles.Container}>
            <View style={{
                height: Deviceheight / 7,
                width: Devicewidth / 3.5, borderRadius: 20, alignItems: "center", justifyContent: "center", alignSelf: "center",
            }} >
                <Image source={{ uri: props.Image }} style={{ height: "100%", width: "100%", resizeMode: 'cover', borderRadius: 20 }} />
            </View>
            <View style={{
                height: Deviceheight / 6,
                width: Devicewidth / 1.75, alignItems: "center", justifyContent: "center", alignSelf: "center",  marginRight: 10
            }}>

                <View style={{
                    height: Deviceheight / 9,
                    width: Devicewidth / 1.75, alignItems: "center", justifyContent: 'space-between', alignSelf: "center",  flexDirection: "row"
                }}>
                    <View style={{
                        height: Deviceheight / 9,
                        width: Devicewidth / 2, alignItems: "flex-start", justifyContent: "center", alignSelf: "center",  alignSelf: "flex-start"
                    }}>
                        <View style={{ width: Devicewidth / 2, height: Deviceheight / 24, alignItems: "center", justifyContent: 'space-between', flexDirection: "row", alignSelf: "flex-start" }}>
                            <View style={{ height: Deviceheight / 28, alignItems: "center", justifyContent: 'center', backgroundColor: "#44A9FB", alignSelf: "flex-start", borderRadius: 8, paddingHorizontal: 10 }}>
                                <Text style={{ fontSize: 12, color: "#fff", textAlign: 'center' }}>PREMIUM</Text>
                            </View>
                            <View style={{ height: Deviceheight / 28, alignItems: "center", justifyContent: 'center', borderColor: "#44A9FB", borderWidth: 1, alignSelf: "flex-start", borderRadius: 8, paddingHorizontal: 10 }}>
                                <Text style={{ fontSize: 11, color: "#44A9FB", textAlign: 'center' }}>OFFERS AVAILABLE</Text>
                            </View>
                        </View>
                        <Text style={{ fontSize: 16, color: "#000", fontWeight: "bold", textAlign: "left", marginTop: 5 }}>{props.Name}</Text>
                        <Text style={{ fontSize: 16, color: "#969696", textAlign: "left", marginTop: 3 }} numberOfLines={1}>{props.Description}</Text>
                    </View>
                    <TouchableOpacity style={{
                        height: Deviceheight / 50,
                        width: Devicewidth / 22, alignItems: 'flex-start', justifyContent: "center", alignSelf: 'flex-start', marginTop: 5,
                    }} >
                        <Image source={require("../../Assets/Hearts.png")} style={{ height: "100%", width: "100%", resizeMode: 'cover', }} />
                    </TouchableOpacity>
                </View>
                <View style={{
                    height: Deviceheight / 20,
                    width: Devicewidth / 1.75, alignItems: 'flex-start', justifyContent: 'space-between', alignSelf: "center",flexDirection:'row'
                }}>
                    <View style={{
                        height: Deviceheight / 24,
                        width: Devicewidth / 6, alignItems: 'flex-start', justifyContent:'space-between' , alignSelf: "center",  flexDirection: "row"
                    }}>
                        <View style={{
                            height: Deviceheight / 40,
                            width: Devicewidth / 18, alignItems: 'center', justifyContent: "center", alignSelf: 'center',
                        }} >
                            <Image source={require("../../Assets/StarBlue.png")} style={{ height: "100%", width: "100%", resizeMode: 'cover', }} />
                        </View>
                        <Text style={{ fontSize: 16, color: "#576E82", textAlign: 'center',marginTop:6}} numberOfLines={1}>{props.Ratting}/5</Text>
                    </View>
                    <View style={{
                        height: Deviceheight / 24,
                        width: Devicewidth / 5, alignItems: 'flex-start', justifyContent:'space-between' , alignSelf: "center",flexDirection: "row"
                    }}>
                        <View style={{
                            height: Deviceheight / 40,
                            width: Devicewidth / 32, alignItems: 'center', justifyContent: "center", alignSelf: 'center',
                        }} >
                            <Image source={require("../../Assets/LocationBlue.png")} style={{ height: "100%", width: "100%", resizeMode: 'cover', }} />
                        </View>
                        <Text style={{ fontSize: 16, color: "#576E82", textAlign: 'center',marginTop:5}} numberOfLines={1}>{props.Distance} miles</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        alignSelf: 'center',
        alignItems: "flex-start",
        justifyContent: "space-between",
        width: Devicewidth,
        height: Deviceheight / 5,
        backgroundColor: "#fff",
        elevation: 5,
        marginBottom: 10,
        paddingLeft: 20,
        paddingRight: 10,
        paddingVertical: 10,
        flexDirection: "row"
    },
})


export default SingelBuisness