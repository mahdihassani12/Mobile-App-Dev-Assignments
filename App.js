import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Profile from './screens/Profile';

export default function App() {
  return (
    <View style={styles.container}>
      <Profile name="Mahdi" phone="0780088163" email="mahdi@mail.com" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
