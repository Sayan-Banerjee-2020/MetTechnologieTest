import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, StatusBar, Dimensions, TextInput, TouchableOpacity, FlatList, ScrollView } from 'react-native';
const Devicewidth = Dimensions.get('window').width;
const Deviceheight = Dimensions.get('window').height;
const axios = require('axios');
import Footer from "../../Component/Footter";
import SingelBuisnessList from "../../Component/SingelBuisness"
import FilterModal from "../../Component/FIlterModal"
const Data = [
	{
		key: '1',
		name: 'Grocery',
	},
	{
		key: '2',
		name: 'Restaurant',
	},
	{
		key: '3',
		name: 'Beauty & Spa',
	},
	{
		key: '4',
		name: 'Health & Medical',
	},
	{
		key: '5',
		name: 'Grocery',
	},
];

export default class Home extends Component {
	constructor(props) {
		super(props)
		this.state = {
			BuisnessData: [],
			FilterModal: false
		}
	}
	state = this.state;

	async componentDidMount() {
		this.GetBuisness()
	}
	GetBuisness = () => {
		const object = {
			"user_id": "",
			"category_ids": '',
			"latitude": 22.4851231,
			"longitude": 88.3653907,
			"order_by": '',
			"order_mode": '',
		}
		axios.post(` https://devfitser.com/Trendlie/api/get-business`, object)
			.then(response => {
				this.setState({
					BuisnessData: response.data.data.business_data,
				})
			})
			.catch(error => {
				// console.log("my buisness data error", error);
			})
	}
	closeModal = () => {
		this.setState({
			FilterModal: false
		})
	}
	HandelFilterChoice = (value) => {
		let object = {}
		if (value == 0) {
			object = {
				"user_id": "",
				"category_ids": '',
				"latitude": 22.4851231,
				"longitude": 88.3653907,
				"order_by": 'business_name',
				"order_mode": 'ASC',
			}
		}
		else if (value == 1) {
			object = {
				"user_id": "",
				"category_ids": '',
				"latitude": 22.4851231,
				"longitude": 88.3653907,
				"order_by": 'business_name',
				"order_mode": 'DESC',
			}
		}
		else if (value == 2) {
			object = {
				"user_id": "",
				"category_ids": '',
				"latitude": 22.4851231,
				"longitude": 88.3653907,
				"order_by": 'distance',
				"order_mode": 'ASC',
			}
		}
		else if (value == 3) {
			object = {
				"user_id": "",
				"category_ids": '',
				"latitude": 22.4851231,
				"longitude": 88.3653907,
				"order_by": 'distance',
				"order_mode": 'DESC',
			}
		}
		else if (value == 4) {
			object = {
				"user_id": "",
				"category_ids": '',
				"latitude": 22.4851231,
				"longitude": 88.3653907,
				"order_by": 'avrg_rating',
				"order_mode": 'ASC',
			}
		}
		else if (value == 5) {
			object = {
				"user_id": "",
				"category_ids": '',
				"latitude": 22.4851231,
				"longitude": 88.3653907,
				"order_by": 'avrg_rating',
				"order_mode": 'DESC',
			}
		}
		else {
			object = {
				"user_id": "",
				"category_ids": '',
				"latitude": 22.4851231,
				"longitude": 88.3653907,
				"order_by": '',
				"order_mode": '',
			}
		}
		axios.post(` https://devfitser.com/Trendlie/api/get-business`, object)
			.then(response => {
				this.setState({
					BuisnessData: response.data.data.business_data,
				})
			})
			.catch(error => {
				// console.log("my buisness data error", error);
			})

	}
	render() {
		return (

			<View style={styles.Container}>
				<StatusBar backgroundColor="#eee" barStyle='dark-content' />
				<FilterModal
					modalProps={this.state.FilterModal}
					onPressClose={() => this.closeModal()}
					HandelFilter={(Filtervalue) => this.HandelFilterChoice(Filtervalue)}
					navigation={this.props.navigation}
				/>
				{/* Header Section */}
				<View style={{ backgroundColor: "#fff", width: Devicewidth, height: Deviceheight / 5.5, alignItems: "center", paddingTop: 10 }}>

					{/* Location Display Section */}
					<View style={{ backgroundColor: "#fff", width: Devicewidth, height: Deviceheight / 12, alignItems: "center", justifyContent: "space-evenly", flexDirection: "row" }}>
						<View style={{
							height: Deviceheight / 40,
							width: Devicewidth / 25, alignItems: "center", justifyContent: "center", alignSelf: "center", marginBottom: 10
						}} >
							<Image source={require("../../Assets/HeaderLocation.png")} style={{ height: "100%", width: "100%", resizeMode: 'cover', }} />
						</View>
						<View style={{ width: Devicewidth / 1.4, height: Deviceheight / 14, alignItems: 'flex-start', justifyContent: "center", }}>
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
					<View style={{ width: Devicewidth, height: Deviceheight / 12, alignItems: "center", justifyContent: "space-evenly", flexDirection: "row" }}>
						<View style={{ flexDirection: "row", width: Devicewidth / 1.35, alignItems: "center", alignSelf: "center", backgroundColor: "#fff", borderRadius: 10, paddingLeft: 10, borderWidth: 1, borderColor: "#98A8B5", elevation: 1 }}>
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
							width: Devicewidth / 9, alignItems: "center", justifyContent: "center", alignSelf: "center", padding: 2
						}} >
							<Image source={require("../../Assets/Down.png")} style={{ height: "100%", width: "100%", resizeMode: 'cover', }} />
						</TouchableOpacity>
					</View>
				</View>

				{/* Body Section */}
				<View style={{ backgroundColor: "#fff", width: Devicewidth, height: Deviceheight / 1.35, alignItems: 'flex-start', justifyContent: "center" }}>
					<Text style={{ fontSize: 18, color: "#2B2E37", fontWeight: "bold", textAlign: "left", marginBottom: 15, paddingLeft: 15 }}>Browse Categories</Text>
					<View style={styles.FlatlistContainer}>
						<FlatList
							data={Data}
							horizontal={true}
							showsHorizontalScrollIndicator={false}
							keyExtractor={(item, index) => index.toString()}
							renderItem={({ item }) => (
								<View style={{ backgroundColor: '#fff', alignItems: "center", justifyContent: "center", height: Deviceheight / 18, marginHorizontal: 5, paddingVertical: 10, paddingHorizontal: 15, borderRadius: 10, elevation: 5, marginTop: 2 }}>
									<Text style={{ fontSize: 16, color: "#576E82", textAlign: "center" }}>{item.name}</Text>
								</View>
							)}
						/>
					</View>
					<View style={{ width: Devicewidth, height: Deviceheight / 16, alignItems: "center", justifyContent: 'space-between', flexDirection: "row", paddingHorizontal: 15, marginTop: 10 }}>
						<Text style={{ fontSize: 18, color: "#2B2E37", fontWeight: "bold", textAlign: "left", }}>Business List</Text>

						<View style={{ width: Devicewidth / 4.3, height: Deviceheight / 18, alignItems: "center", justifyContent: 'space-between', flexDirection: "row", }}>
							<TouchableOpacity style={{
								height: Deviceheight / 32,
								width: Devicewidth / 11, alignItems: "center", justifyContent: "center", alignSelf: "center",
							}} onPress={() => this.setState({ FilterModal: true })} >
								<Image source={require("../../Assets/Filter.png")} style={{ height: "100%", width: "100%", resizeMode: 'cover', }} />
							</TouchableOpacity>
							<TouchableOpacity style={{
								height: Deviceheight / 30,
								width: Devicewidth / 18, alignItems: "center", justifyContent: "center", alignSelf: "center",
							}} >
								<Image source={require("../../Assets/HeaderLocation.png")} style={{ height: "100%", width: "100%", resizeMode: 'cover', }} />
							</TouchableOpacity>
						</View>
					</View>

					<View style={styles.FlatlistContainer1}>
						<FlatList
							data={this.state.BuisnessData}
							horizontal={false}
							showsVerticalScrollIndicator={false}
							keyExtractor={(item, index) => index.toString()}
							renderItem={({ item }) => (
								<SingelBuisnessList
									Image={item.business_image}
									Name={item.title}
									Description={item.description}
									Ratting={item.avrg_rating}
									Distance={item.distance}
								/>
							)}
						/>
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
		width: Devicewidth / 20,
		marginHorizontal: 5,
		// backgroundColor:"grey"
	},
	FlatlistContainer: {
		padding: 5,
		height: Deviceheight / 13,
		width: Devicewidth,
		alignItems: 'center',
		justifyContent: 'center',
		// backgroundColor: "yellow"
	},
	FlatlistContainer1: {
		padding: 5,
		height: Deviceheight / 1.9,
		width: Devicewidth,
		alignItems: 'center',
		justifyContent: 'center',
		// backgroundColor: "yellow"
	},
})