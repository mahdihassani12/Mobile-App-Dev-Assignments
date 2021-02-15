import { StatusBar } from 'expo-status-bar';
import React , {useEffect} from 'react';
import { StyleSheet, Text, View , TouchableOpacity} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as SQLite from 'expo-sqlite';
const stack = createStackNavigator();
const db = SQLite.openDatabase('contacts.db');

import Search from './screens/Search';
import Contacts from './screens/Contacts';
import CreateContacts from './screens/CreateContacts';
import Profile from './screens/Profile';
 
export default function App() {

    useEffect( () => {
        db.transaction(tx => {
            tx.executeSql('create table contact (id integer primary key, name text, email text); ',[],() => console.log('table created'));
        })
    });

  return (
    <NavigationContainer>
    	<stack.Navigator>
    		<stack.Screen name="Contacts" component={ Contacts } 
    		  options = { ({navigation}) => ({
                headerRight: () => (
                    <TouchableOpacity onPress= { () => navigation.navigate('Search') }>
                        <Text>
                            <MaterialIcons name="search" size={24} color="black" />
                        </Text>
                    </TouchableOpacity>
                )
              }) }
            />
    		<stack.Screen name="Search" component={ Search }  />
    		<stack.Screen name="CreateContacts" component={ CreateContacts }  />
    		<stack.Screen name="Profile" component={ Profile }  />
    	</stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
});
