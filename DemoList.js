import {StatusBar} from 'expo-status-bar'
import React from 'react'
import {Text, View, Button, TextInput, StyleSheet, FlatList, SafeAreaView, Image} from "react-native";

const friends = [
	{name:'Krunal', key:1},
	{name:'Sebastian', key:2},
	{name:'Kevin', key:3},
	{name:'Sahild', key:4},
	{name:'Zyou', key:5},
	{name:'Eli', key:6},
	{name:'Aida', key:7},
	{name:'Alok', key:8},
	{name:'Lokesh', key:9},
]

// Custom Components
export default function DemoList() {
	return (
		<SafeAreaView style={styles.container}>
			<FlatList
				data = {friends}
				renderItem = {({item}) => {
					// element = {item:{name:shobhakar}, index:0}
					// and then item : {name:shobhakar}
					return <View style={styles.viewStyle}>
						<Image source={require('./assets/Panini.jpg')} style={{width: 200, height: 200}}/>
						<Text styles={styles.textStyle}> {item.name} {'\n\n'}
							Batch-26 Mobile Application {'\n'}
							Developer in iOS and Android {'\n'}
							via React Native from Apolis
						</Text>
					</View>
				}}
			/>
		</SafeAreaView>
	)
}

// add style
const styles = StyleSheet.create({
	viewStyle: {
		alignItems: 'flex-end',
		flexDirection: 'row',
		// justifyContent: 'flex-end'
	},
	textStyle: {
		// flex: 1,
		// textAlign: 'right',
		// alignSelf: 'flex-end',
		// flexDirection: 'column',
		backgroundColor: '#fff',
		// marginLeft: 'auto',
		// position: 'absolute',
		// right: 0
		// alignItems: 'center',
		// justifyContent: 'center',
	},
});
