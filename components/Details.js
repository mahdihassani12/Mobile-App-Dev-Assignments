import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import {MaterialICons} from '@expo/vector-icons';

export default function Details({ icon , title, subTitle }){
	return(
		<View>
			<View>
				<MaterialICons name={name} size={24} color="black" />
				<View>
					<Text>
						{title}
					</Text>
					<Text>
						{subTitle}
					</Text>
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
		
});