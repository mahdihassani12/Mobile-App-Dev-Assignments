import React,{useState, useEffect} from 'react';
import {Text, StyleSheet, View, TouchableOpacity, TextInput} from 'react-native';
import * as SQLite from 'expo-sqlite';
const db = SQLite.openDatabase('contacts.db');

export default function Search(){

	const [allContacts, setAllContacts] = useState([]);
	const [filteredContacts, setFilteredContacts] = useState([]);

	useEffect(()=>{
		db.transaction(tx => {
			tx.executeSql('select * from contact',[],(tx, {rows})=>{
				var data = [];
				for(var i =0; i<rows.length; i++){
					data.push(rows[i]);
				}	
				setAllContacts(data);
			});	
		})
	});

	const searchContacts = (text) => {
		const filteredText = text.toLowerCase();
		const newContacts = allContacts.fliter( (contact) => {
			const item = contact.name.toLowerCase();
			return item.indexOf(filteredText) > -1;	
		});

		setFilteredContacts(newContacts);
	}

	return (
		<View>

			<View style={styles.searchContainer} >
				<TextInput placeholder="Search ..." style={styles.search} onChangeText = { (text) => searchContacts(text) } />
			</View>

			{ filteredContacts.length > 0 ?
				<FlatList 
					keyExtractor = { (item) => item.id }
					data={filteredContacts}	
					renderItem = { ({item}) => {
						return <ContactListItems name={item.name} phone={item.phone} onPress={ () => navigation.navigate('Profile',{item:item}) } onDeleteContact = { () => deleteContact(item.id) } />
					}}
				/> :
				<View>
					<Text>No Contacts Found!</Text>
				</View>
			}

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