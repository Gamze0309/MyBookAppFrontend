import { faDisplay, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useState } from "react"
import { View, StyleSheet, Text, TextInput, Button, TouchableOpacity, Pressable } from "react-native"

export default Header = () => {
    const [text, setText] = useState("");
    return(
        <View style={styles.appBar}>
            <View style= {styles.textArea}>
                <FontAwesomeIcon icon={faMagnifyingGlass} color="#fff" style={{display:"inline"}}/>
                <TextInput style={styles.textInput} placeholder="Search" placeholderTextColor= "#fff" onChangeText={newText=> setText(newText)} defaultValue={text} />
            </View>
            <Pressable style={styles.button}>
                <FontAwesomeIcon icon={faEnvelope} style={{color: "#ffffff"}} size={25} />
            </Pressable>
        </View>
    )
}

const styles=StyleSheet.create({
    appBar:{
        backgroundColor: "#96B6C5",
        height: 150,
        flexDirection: "row"
    },
    textArea:{
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
    textInput:{
        width: "100%",
        height: "100%",
        color:"#fff",
        borderRadius: 20,
        marginLeft: 10
    },
    button:{
        backgroundColor: "#ADC4CE",
        borderRadius: 30,
        width: 60,
        height: 60,
        marginTop: 70,
        marginRight: 30,
        marginLeft: 20,
        alignItems: "center",
        justifyContent: "center",
    },

})