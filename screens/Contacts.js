import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity, FlatList} from 'react-native';
import ContactListItems from '../components/ContactListItems';
import { Feather } from '@expo/vector-icons';

const contacts = [
		{id: '1', name: 'Mahdi', email: 'mahdi@mail.com'},
		{id: '2', name: 'Ali', email:'ali@mail.com'},
		{id: '3', name: 'Ahmad', email:'Ahmad@mail.com'},
		{id: '4', name: 'zahra', email:'Zahra@mail.com'},
		{id: '5', name: 'Zainab', email:'Zainab@mail.com'},
		{id: '6', name: 'Musa', email:'Musa@mail.com'},
		{id: '7', name: 'Ewaz', email:'Ewaz@mail.com'},
		{id: '8', name: 'Pablo', email:'Pablo@mail.com'},
		{id: '9', name: 'David', email:'David@mail.com'},
];
export default function Contacts(){
	return (
		<View>
			<FlatList 
				keyExtractor = { (item) => item.id }
				data={contacts}	
				renderItem = { ({item}) => {
					return <ContactListItems name={item.name} phone={item.phone} />
				}}
			/>

			<View style = {styles.floadButton}>
				<Text>
					<Feather name="plus" size={28} color="white" />
				</Text>
			</View>	

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