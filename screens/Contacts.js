import React,{useState, useEffect} from 'react';
import {Text, StyleSheet, View, TouchableOpacity, FlatList} from 'react-native';
import ContactListItems from '../components/ContactListItems';
import { Feather } from '@expo/vector-icons';
import * as SQLite from 'expo-sqlite';
const db = SQLite.openDatabase('contacts.db');

export default function Contacts({ navigation }){

	const [ contacts , setContacts ] = useState([]); 

	useEffect(()=>{
		db.transaction((tx)=>{
			tx.executeSql('select * from contact',[],(tx, {rows})=>{
				var data;
				for(var i = 0; i < rows.length; i++){
					data.push(rows[i]);
				}
				setContacts(data);
			});
		})
	});

	const deleteContact = (id) => {
		db.transaction(tx => {
			tx.executeSql('delete from contact where id = ?',[id]);
		});
	}

	return (
		<View>
			
			{
				contacts ?
				<FlatList 
					keyExtractor = { (item) => item.id }
					data={contacts}	
					renderItem = { ({item}) => {
						return <ContactListItems name={item.name} phone={item.phone} onPress={ () => navigation.navigate('Profile',{item:item}) } onDeleteContact = { () => deleteContact(item.id) } />
					}}
				/> :
				<View>
					<Text>No Contacts Found!</Text>
				</View>
			}

			<TouchableOpacity style = {styles.floadButton} onPress={ () => navigation.navigate('CreateContacts') }>
				<Text>
					<Feather name="plus" size={28} color="white" />
				</Text>
			</TouchableOpacity>	

		</View>
	)

}

const styles = StyleSheet.create({

	floadButton:{
		backgroundColor: 'orange',
		padding: 15,
		borderRadius:'50%',
		position: 'absolute',
		bottom: 20,
		right: 20
	}

});