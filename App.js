import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Post from './components/Post';
import AppBar from './components/AppBar';
import React, { useEffect } from 'react';

export default function App() {
  return (
    <View style={styles.container}>
      <AppBar/>
      <Post/>
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F8F6F4"
  },
});
