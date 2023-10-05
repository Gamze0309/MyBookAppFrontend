import { StyleSheet, Text, TextInput, View } from 'react-native';
import AppBar from '../../components/AppBar';
import Post from '../../components/Post';
import { StatusBar } from 'expo-status-bar';

export default HomeScreen = () => {
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