import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';

export default function Details({ icon , title, subTitle }){
	return(
		<View>
			<View style={styles.borderContainer}>
				<View style={styles.container}>
					<View style={styles.contentContainer}>
						<Text style={styles.title}>
							{title}
						</Text>
						<Text style={styles.subTitle}>
							{subTitle}
						</Text>
					</View>
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	borderContainer:{
		paddingLeft:24
	},
	container:{
		flexDirection:'row',
		paddingVertical: 16,
		borderBottomWidth: 0.5,
		borderBottomColor: 'gray'	
	},
	contentContainer:{
		paddingLeft:20
	},
	title:{
		fontSize: 20,
		fontWieght: 'bold'
	},
	subTitle:{
		fontSize: 16,
		color: 'lightBlue'
	}	
});