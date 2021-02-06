import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity, TextInput} from 'react-native';

export default function Search(){
	return (
		<View style={styles.searchContainer} >
			<TextInput placeholder="Search ..." style={styles.search}  />
		</View>
	)

}

const styles = StyleSheet.create({

	searchContainer:{
		backgroundColor:'#eee'
	},
	search:{
		paddingHorizontal: 10,
		paddingVertical: 20,
		margin: 20,
		backgroundColor: '#fff'
	}

});