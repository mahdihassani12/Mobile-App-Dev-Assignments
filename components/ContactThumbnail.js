import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import Avatar from './Avatar.js';

export default function ContactThumbnail({ name , phone }){
	return(
		<View style={styles.thumbnail} >
			<Avatar name={name} size={90} />
			<Text style={styles.name} >
				{name}
			</Text>
			<Text style={styles.phone} >
				{phone}
			</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	thumbnail:{
		justifyContent: 'center',
		alignItems: 'center'
	},
	name:{
		color:'#fff',
		fontSize: 16,
		fontWeight:'bold'
	},
	phone:{
		color: '#fff',
		fontSize:16
	}	
});