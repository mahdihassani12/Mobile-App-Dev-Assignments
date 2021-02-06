import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity, TextInput} from 'react-native';


export default function CreateContacts(){
	return (
		<View style={styles.formContainer} >
			<TextInput placeholder="Name" style={styles.input} />
			<TextInput placeholder="Email" keyboardType="email-address" style={styles.input} />
			<TextInput placeholder="Phone" keyboardType="numeric" style={styles.input} />
			<TouchableOpacity style={styles.btn} >
				<Text style={styles.txt} >Save</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.btn} >
				<Text style={styles.txt} >Cancel</Text>
			</TouchableOpacity>
		</View>	
	)

}

const styles = StyleSheet.create({

	formContainer:{
		borderRadius: 30,
		marginTop:60,
		paddingVertical: 20,
		paddingHorizontal:40
	},
	input:{
		paddingBottom:10,
		marginBottom:10,
		borderBottomColor: '#000',
		borderBottomWidth:1
	},
	btn:{
		padding:20,
		marginBottom:10,
		borderRadius:5
	},
	txt:{
		color:'#000'
	}

});