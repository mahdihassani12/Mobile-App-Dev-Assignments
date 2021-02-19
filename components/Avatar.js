import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

export default function Avatar({ name, size }){
	// const initial = name[0].toUpperCase();
	return(
		<View style={[styles.avatarContainer , {height: size, width: size} ]}>
			<Text style={styles.avatarTxt}> {name} </Text>
		</View>	
	)

}

const styles = StyleSheet.create({
	avatarContainer:{
		borderRadius: '50%',
		borderColor: 'white',
		backgroundColor:'#3498DB',
		justifyContent: 'center',
		alignItems: 'center'
	},
	avatarTxt:{
		color: '#fff'
	}
});