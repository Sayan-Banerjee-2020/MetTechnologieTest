import React, { useState, useEffect } from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet, Dimensions,Image } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
const Devicewidth = Dimensions.get('window').width;
const Deviceheight = Dimensions.get('window').height;
import RadioForm from 'react-native-simple-radio-button';

const FilterModal = (props) => {
    const [modal, modalVisible] = useState(false);
    const { modalProps, SetmodalProps } = props;
    const [Filtervalue, SetFiltervalue] = useState('')
    const [CheckOffer, SetCheckOffer] = useState(false)
    const { navigation } = props

    const radio_props = [
        { label: 'Name A-Z', value: 0 },
        { label: 'Name Z-A', value: 1 },
        { label: 'By Distance (Low to High)', value: 2 },
        { label: 'By Distance (High to Low)', value: 3 },
        { label: 'Reviews (Low to High)', value: 4 },
        { label: 'Reviews (High to Low)', value: 5 }
    ];

    useEffect(() => {

    }, [])
   const HandelApply=()=>{
        props.onPressClose()
        props.HandelFilter(Filtervalue)
    }
    return (
        <View>
            {
                modalProps ?
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalProps}
                        onRequestClose={() => {
                            modalVisible(!modal)
                        }}>
                        <View style={styles.modalContainer}>
                            <View style={styles.HeadrIconContainer}>
                                <TouchableOpacity onPress={() => props.onPressClose()} style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: "grey", height: Deviceheight / 50,width: Devicewidth / 25,alignSelf:"center"}}>
                                <Image source={require("../../Assets/Cross.png")} style={{ height: "100%", width: "100%", resizeMode: 'cover', }} />
                                </TouchableOpacity>
                                <View style={{ alignItems: 'center', justifyContent: 'center', height: Deviceheight / 20, paddingBottom: 8 }}>
                                    <Text style={{ color: '#44A9FB', fontWeight: 'bold', fontSize: 18, textAlign: 'left', marginLeft: 30 }}>Filter</Text></View>
                            </View>
                            <View style={{ backgroundColor: "#fff", alignItems: "flex-start", paddingLeft: 10, width: Devicewidth, paddingTop: 10,paddingBottom:20}}>
                                <RadioForm
                                    radio_props={radio_props}
                                    initial={0}
                                    formHorizontal={false}
                                    labelHorizontal={true}
                                    buttonColor={'#2196f3'}
                                    animation={true}
                                    onPress={(value) => SetFiltervalue(value)}
                                />
                            </View>
                            <View style={{ backgroundColor: "#BDC7D0", alignItems: "flex-start", paddingLeft: 10, width: Devicewidth, height: Deviceheight / 12, flexDirection: "row", paddingTop: 15 }}>
                                <CheckBox
                                    disabled={false}
                                    tintColor={"#44A9FB"}
                                    onFillColor={"#44A9FB"}
                                    onTintColor={"#44A9FB"}
                                    onCheckColor={"#44A9FB"}
                                    value={CheckOffer}

                                    onValueChange={(newValue) => SetCheckOffer(newValue)}
                                />
                                <Text style={{ fontSize: 16, color: "#44A9FB", textAlign: "left", marginTop: 6, marginLeft: 10 }}>Offers available</Text>
                            </View>
                            <View style={{ backgroundColor: "#fff", height: Deviceheight / 7, alignItems: 'center', justifyContent: "center", width: Devicewidth, }}>
                                <TouchableOpacity onPress={() => HandelApply()} style={{ backgroundColor: "#44A9FB", height: Deviceheight / 12, alignItems: 'center', justifyContent: "center", width: Devicewidth / 2.2, borderRadius: 50 }}>
                                    <Text style={{ fontSize: 20, color: "#fff", textAlign: 'center'}}>APPLY</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>
                    : null
            }
        </View>
    );
}


export default FilterModal;


const styles = StyleSheet.create({
    modalBody: {
        alignItems: 'center',
        justifyContent: 'space-around',
        flex: 1,
        width: Devicewidth,
        backgroundColor: '#fff',
        paddingBottom: 10,
        paddingTop: 10
    },
    modalContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: ' rgba(0,0,0,0.8)',
        paddingTop: Deviceheight / 2.4,
    },
    HeadrIconContainer: {
        alignSelf: 'center',
        alignItems: 'flex-start',
        width: Devicewidth,
        height: Deviceheight / 15,
        backgroundColor: '#fff',
        justifyContent: "flex-start",
        flexDirection: 'row',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        paddingTop: 15,
        paddingLeft: 15
    },
})