import { TextInput, View, StyleSheet, Image, Text } from "react-native"

export default Post = () => {
    return(
        <View>
            <View style={styles.viewPost}>
                <Image source={require('../images/flower.jpg')} style={styles.imgProfilePhoto}/>
                <View>
                    <Text style={styles.txtUser}>{"Margaritha Boris shared a file"}</Text>
                    <Text>{"1hr."}</Text>
                </View>
                
            </View>
            <View style={styles.viewPost}>
                <Image source={require('../images/flower.jpg')} style={styles.imgProfilePhoto}/>
            </View>
        </View>
        
        
    )
}

const styles = StyleSheet.create({
    viewPost:{
        backgroundColor: "#fff",
        marginTop: 10,
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 30,
        flexDirection: "row",
    },
    imgProfilePhoto:{
        width:50,
        height: 50,
        borderRadius: 10,
        marginRight: 15
    },
    txtUser:{
        marginBottom:7
    }
})