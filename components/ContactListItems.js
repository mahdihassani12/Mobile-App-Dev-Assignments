import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import Avatar from './Avatar.js';

export default function ContactListItems({ name, phone, onPress }){
	return (
		<TouchableOpacity style={styles.container} onPress={onPress}>
			<View style = {styles.contactInfo}>
				<Avatar name={name} size={40} />
				<View style={styles.contactDetail}>
					<Text style={styles.title}>{name}</Text>
					<Text style={styles.subTitle}>{phone}</Text>
				</View>
			</View>
		</TouchableOpacity>
	)

}

const styles = StyleSheet.create({
	container:{
		flex: 1
	},
	contactInfo:{
		flexDirection: 'row',
		paddingTop: 10,
		paddingBottom: 10,
		paddingLeft: 10,
		paddingRight: 24,
		backgroundColor: '#D8D8D8',
		borderBottomWidth:1,
		borderBottomColor: '#000'
	},
	contactDetail:{
		marginLeft:20
	},
	title:{
		color: '#000',
		fontSize: 16,
		fontWeight: 'bold'
	},
	subTitle:{
		color:'#3498DB'
	}
});