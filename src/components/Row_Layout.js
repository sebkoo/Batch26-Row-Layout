import React, { Component } from 'react'
import {View, Text, Image, StyleSheet} from 'react-native'

const Row_Layout = ({ name, body, photo }) => (
	<View style={styles.container}>
		<Image source={photo} style={styles.photoStyle} />
		<View style={styles.textContainer}>
			<Text style={styles.nameStyle}>{name}</Text>
			<Text style={styles.bodyStyle}>{body}</Text>
		</View>
	</View>
);

export default Row_Layout

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		padding: 10,
		marginLeft:16,
		marginRight:16,
		marginTop: 8,
		marginBottom: 8,
		borderRadius: 5,
		backgroundColor: '#FFF',
		elevation: 2
	},
	photoStyle: {
		height: 50,
		width: 50
	},
	textContainer: {
		flex: 1,
		flexDirection: 'column',
		marginLeft: 12,
		// justifyContent: 'center'
	},
	nameStyle: {
		fontSize: 20,
		// fontWeight: 'bold',
	},
	bodyStyle: {
		fontSize: 12,
		// fontFamily: 'Cochin'
	},
});
