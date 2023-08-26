import { faDisplay, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useState } from "react"
import { View, StyleSheet, Text, TextInput, Button, TouchableOpacity, Pressable } from "react-native"
import CustomText from "./CustomText";
import { useEffect } from "react";
import * as Font from 'expo-font';

export default AppBar = () => {
    const [text, setText] = useState("");
    const [fontLoaded, setFontLoaded] = useState(false);
    useEffect(() => {
        async function loadFont() {
          await Font.loadAsync({
            'custom-font': require('../assets/fonts/OpenSans-Regular.ttf'),
          });
    
          setFontLoaded(true);
        }
    
        loadFont();
      }, []);

      if (!fontLoaded) {
        return <TextInput>Loading...</TextInput>;
      }

    return(
        <View style={styles.appBar}>
            <View style= {styles.txtSearchView}>
                <FontAwesomeIcon icon={faMagnifyingGlass} color="#fff" style={{display:"inline"}}/>
                <TextInput style={styles.txtSearch} placeholder="Search" placeholderTextColor= "#fff" onChangeText={newText=> setText(newText)} defaultValue={text}/>
            </View>
            <Pressable style={styles.btnMessage}>
                <FontAwesomeIcon icon={faEnvelope} style={{color: "#ffffff"}} size={25} />
            </Pressable>
            <View style={styles.viewMessageNumber}>
                <CustomText style={styles.txtMessageNumber}>{"11"}</CustomText>
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    appBar:{
        backgroundColor: "#96B6C5",
        height: 150,
        flexDirection: "row",
        marginBottom: 10,
    },
    txtSearchView:{
        height: 60,
        width: 272,
        marginTop: 70,
        marginLeft: 30,
        borderWidth: 1,
        padding: 10,
        backgroundColor: "#ADC4CE",
        borderColor: "#ADC4CE",
        borderRadius: 20,
        flexDirection: "row",
        alignItems: "center"
    },
    txtSearch:{
        width: "100%",
        height: "100%",
        color:"#fff",
        borderRadius: 20,
        marginLeft: 10,
        fontFamily: 'custom-font'
    },
    btnMessage:{
        backgroundColor: "#ADC4CE",
        borderRadius: 50,
        width: 60,
        height: 60,
        marginTop: 70,
        marginRight: 30,
        marginLeft: 20,
        alignItems: "center",
        justifyContent: "center",
        position: 'relative',
    },
    viewMessageNumber:{
        backgroundColor: "#fff",
        borderRadius: 50,
        position: "absolute",
        top:66,
        right:27,
        width: 22,
        height: 22,
        justifyContent: "center",
        alignItems: "center"
    },
    txtMessageNumber:{
        color:"#96B6C5",
    }

})