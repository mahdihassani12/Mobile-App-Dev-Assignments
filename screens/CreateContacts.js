import React,{useState} from 'react';
import {Text, StyleSheet, View, TouchableOpacity, TextInput} from 'react-native';
import * as SQLite from 'expo-sqlite';
const db = SQLite.openDatabase('contacts.db');

export default function CreateContacts({navigation}){

	const [name, setName] = useState(null);
	const [phone, setPhone] = useState(null);
	const [email, setEmail] = useState(null);

	const addContact = (name, phone, email) => {
		db.transaction(tx => {
			tx.executeSql('insert into contact(name, phone, email) values(?, ?, ?);',[name, phone, email], () => navigation.navigate('Contacts'));
		})	
	}

	return (
		<View style={styles.formContainer} >
			<TextInput placeholder="Name" style={styles.input} value={name} onChangeText={ (name) => setName(name) } />
			<TextInput placeholder="Email" keyboardType="email-address" style={styles.input} value={email} onChangeText={ (email) => setEmail(email) } />
			<TextInput placeholder="Phone" keyboardType="numeric" style={styles.input} value={phone} onChangeText={ (phone) => setPhone(phone) } />
			<TouchableOpacity style={styles.btn} >
				<Text style={styles.txt} onPress={ ()=> addContact(name, phone, email)} >Save</Text>
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
		borderRadius:5,
		backgroundColor:'#fff'
	},
	txt:{
		color:'#000'
	}

});