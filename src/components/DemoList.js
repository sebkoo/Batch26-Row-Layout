import React, {useState} from 'react'
import {StyleSheet, View} from "react-native";
import Row_Layout from "./Row_Layout";

// const Friends = [
// 	{name:'Krunal', key:1},
// 	{name:'Sebastian', key:2},
// 	{name:'Kevin', key:3},
// 	{name:'Sahild', key:4},
// 	{name:'Zyou', key:5},
// 	{name:'Eli', key:6},
// 	{name:'Aida', key:7},
// 	{name:'Alok', key:8},
// 	{name:'Lokesh', key:9},
// ]

const Friends = ['Krunal', 'Sebastian', 'Kevin', 'Sahild', 'Zyou', 'Eli', 'Aida', 'Alok', 'Lokesh']

// Custom Components
const DemoList = () => {
	return (
		<View style={styles.container}>
			<Row_Layout
				name={'Krunal'}
				body={"Batch-26 Mobile Application Developer in iOS and Android via React Native from Apolis"}
				photo={require("../../assets/Panini.jpg")}
			/>
			<Row_Layout
				name={'Sebastian'}
				body={"Batch-26 Mobile Application Developer in iOS and Android via React Native from Apolis"}
				photo={require("../../assets/Panini.jpg")}
			/>
			<Row_Layout
				name={'Kevin'}
				body={"Batch-26 Mobile Application Developer in iOS and Android via React Native from Apolis"}
				photo={require("../../assets/Panini.jpg")}
			/>
			<Row_Layout
				name={'Sahild'}
				body={"Batch-26 Mobile Application Developer in iOS and Android via React Native from Apolis"}
				photo={require("../../assets/Panini.jpg")}
			/>
			<Row_Layout
				name={'Krunal'}
				body={"Batch-26 Mobile Application Developer in iOS and Android via React Native from Apolis"}
				photo={require("../../assets/Panini.jpg")}
			/>
			<Row_Layout
				name={'Zyou'}
				body={"Batch-26 Mobile Application Developer in iOS and Android via React Native from Apolis"}
				photo={require("../../assets/Panini.jpg")}
			/>
			<Row_Layout
				name={'Eli'}
				body={"Batch-26 Mobile Application Developer in iOS and Android via React Native from Apolis"}
				photo={require("../../assets/Panini.jpg")}
			/>
			<Row_Layout
				name={'Aida'}
				body={"Batch-26 Mobile Application Developer in iOS and Android via React Native from Apolis"}
				photo={require("../../assets/Panini.jpg")}
			/>
			<Row_Layout
				name={'Alok'}
				body={"Batch-26 Mobile Application Developer in iOS and Android via React Native from Apolis"}
				photo={require("../../assets/Panini.jpg")}
			/>
			<Row_Layout
				name={'Lokesh'}
				body={"Batch-26 Mobile Application Developer in iOS and Android via React Native from Apolis"}
				photo={require("../../assets/Panini.jpg")}
			/>
		</View>
	)
}

export default DemoList

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
