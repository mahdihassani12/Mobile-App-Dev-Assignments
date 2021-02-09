import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import {MaterialICons} from '@expo/vector-icons';
import ContactThumbnail from '../components/ContactThumbnail';
import Details from '../components/Details';

export default function Profile(props){
const {route} = props
const {item} = route.params
const {name, phone , email} = item
	return (

		<View style={styles.container}>
			<View style={styles.thumbnailSection} >
				<ContactThumbnail name={name} phone={phone}  />
			</View>
			<View style={styles.detailSection} >
				<Details icon="email" title="Email" subTitle={email} />
				<Details icon="phone" title="Work" subTitle={phone} />
			</View>
		</View>

	)
}

const styles = StyleSheet.create({
	container:{
		flex:1
	},
	thumbnailSection:{
		flex:1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#eee',
		borderBottomColor:'#000',
		borderBottomWidth: 1,
	},
	detailSection:{
		paddingTop: 10
	}	
});