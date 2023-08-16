import { faDisplay, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useState } from "react"
import { View, StyleSheet, Text, TextInput } from "react-native"

export default Header = () => {
    const [text, setText] = useState("");
    return(
        <View style={styles.appBar}>
            <View style= {styles.textArea}>
                <FontAwesomeIcon icon={faMagnifyingGlass} color="#fff" style={{display:"inline"}}/>
                <TextInput style={styles.textInput} placeholder="Search" placeholderTextColor= "#fff" onChangeText={newText=> setText(newText)} defaultValue={text} >
                
                </TextInput>
            </View>
            
        </View>
    )
}

const styles=StyleSheet.create({
    appBar:{
        backgroundColor: "#96B6C5",
        height: 150,
    },
    textArea:{
        height: 40,
        marginTop: 70,
        marginLeft: 50,
        marginRight: 100,
        borderWidth: 1,
        padding: 10,
        backgroundColor: "#ADC4CE",
        borderColor: "#ADC4CE",
        borderRadius: 20,
    },
    textInput:{
        width: "100%",
        height: "100%",
        color:"#fff",
        borderRadius: 20,
    },

})