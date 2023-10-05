import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Post from './components/Post';
import AppBar from './components/AppBar';
import React, { StrictMode, useEffect } from 'react';
import MainContainer from './navigation/MainContainer';
import HomeScreen from './navigation/screens/HomeScreen';

export default function App() {
  return (
    <StrictMode>
      <MainContainer/>
    </StrictMode>
    
  );
}

