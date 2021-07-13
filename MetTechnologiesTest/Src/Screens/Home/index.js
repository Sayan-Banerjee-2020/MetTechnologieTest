import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, StatusBar, Dimensions, TextInput,TouchableOpacity, FlatList, ScrollView } from 'react-native';
const Devicewidth = Dimensions.get('window').width;
const Deviceheight = Dimensions.get('window').height;
import Footer from "../../Component/Footter";

export default class Home extends Component {
	constructor(props) {
		super(props)
		this.state = {

		}
	}
	state = this.state;

	render() {
		return (

			<View style={styles.Container}>
				<StatusBar backgroundColor="#eee"  barStyle='dark-content' />
				{/* Header Section */}
				<View style={{ backgroundColor: "#fff", width: Devicewidth, height: Deviceheight / 5.5, alignItems: "center", paddingTop: 10 }}>
					{/* Location Display Section */}
					<View style={{ backgroundColor: "#fff", width: Devicewidth, height: Deviceheight / 12, alignItems: "center", justifyContent: "space-evenly", flexDirection: "row" }}>
						<View style={{
							height: Deviceheight / 40,
							width: Devicewidth / 25, alignItems: "center", justifyContent: "center", alignSelf: "center",  marginBottom: 10
						}} >
							<Image source={require("../../Assets/HeaderLocation.png")} style={{ height: "100%", width: "100%", resizeMode: 'cover', }} />
						</View>
						<View style={{  width: Devicewidth / 1.4, height: Deviceheight / 14, alignItems: 'flex-start', justifyContent: "center", }}>
							<Text style={{ fontSize: 14, color: "#44A9FB", fontWeight: "bold", textAlign: "left" }}>Home</Text>
							<Text style={{ fontSize: 14, color: "#98A8B5", fontWeight: "bold", textAlign: "left" }}>Home 15A Dummy Street, Dummy City...</Text>
						</View>
						<TouchableOpacity style={{
							height: Deviceheight / 50,
							width: Devicewidth / 25, alignItems: "center", justifyContent: "center", alignSelf: "center",
						}} >
							<Image source={require("../../Assets/Pencil.png")} style={{ height: "100%", width: "100%", resizeMode: 'cover', }} />
						</TouchableOpacity>
					</View>
					{/* Search Section */}
					<View style={{  width: Devicewidth, height: Deviceheight / 12, alignItems: "center", justifyContent: "space-evenly", flexDirection: "row" }}>
						<View style={{ flexDirection: "row", width: Devicewidth / 1.35, alignItems: "center", alignSelf: "center", backgroundColor: "#fff", borderRadius: 10, paddingLeft: 10,borderWidth:1,borderColor:"#98A8B5" ,elevation:1}}>
							<TouchableOpacity style={styles.SearchIcon} >
							<Image source={require("../../Assets/SearchBlue.png")} style={{ height: "100%", width: "100%", resizeMode: 'cover', }} />
							</TouchableOpacity>
							<TextInput
								placeholder={"search by items name"}
								placeholderTextColor={"grey"}
								style={styles.SearchContainer}
								autoFocus={false}
								keyboardType={"default"}
							/>
						</View>
						<TouchableOpacity style={{
							height: Deviceheight / 18,
							width: Devicewidth / 9, alignItems: "center", justifyContent: "center", alignSelf: "center",padding:2
						}} >
							<Image source={require("../../Assets/Down.png")} style={{ height: "100%", width: "100%", resizeMode: 'cover', }} />
						</TouchableOpacity>
					</View>
				</View>


				<View style={{ backgroundColor: "green", width: Devicewidth, height: Deviceheight / 1.35 }}>
					<View style={{
						height: Deviceheight / 3,
						width: Devicewidth / 2, alignItems: "center", justifyContent: "center", alignSelf: "center",
					}} >
						<Image source={require("../../Assets/LOGO.png")} style={{ height: "100%", width: "100%", resizeMode: 'cover', }} />
					</View>

				</View>
				<Footer />
			</View>
		)
	}
}

const styles = StyleSheet.create({
	Container: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: '#fff'
	},
	SearchContainer: {
		borderRadius: 10,
		width: Devicewidth / 1.6,
		alignSelf: 'center',
		justifyContent: "flex-end",
		fontSize: 14,
		textAlign: "left",
		// backgroundColor:"green"
	  },
	  SearchIcon: {
		alignSelf: 'center',
		alignItems: 'center',
		justifyContent: 'center',
		height: Deviceheight / 40,
		width:Devicewidth/20,
		marginHorizontal: 5,
		// backgroundColor:"grey"
	  },
})