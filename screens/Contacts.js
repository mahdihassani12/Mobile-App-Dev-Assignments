import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity, FlatList} from 'react-native';
import ContactListItems from '../components/ContactListItems';

const contacts = [
		{id: '1', name: 'Mahdi', email: 'mahdi@mail.com'},
		{id: '2', name: 'Ali', email:'ali@mail.com'}
];
export default function Contacts(){
	return (
		<FlatList 
			keyExtractor = { (item) => item.id }
			data={contacts}	
			renderItem = { ({item}) => {
				return <ContactListItems name={item.name} phone={item.phone} />
			}}
		/>
	)

}

const styles = StyleSheet.create({


});