import { TextInput, View, StyleSheet, Image, Text } from "react-native"
import CustomText from "./customs/CustomText"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons"


export default Post = () => {
    return(
        <View>
            <View style={styles.viewPost}>
                <Image source={require('../images/flower.jpg')} style={styles.imgProfilePhoto}/>
                <View>
                    <CustomText style={styles.txtName}>{"Margarita Boris"}</CustomText>
                    <CustomText style={styles.txtDetail}>{"18.000 takipçi"}</CustomText>
                    <CustomText style={styles.txtDetail}>{"1hr."}</CustomText>
                </View>
                <FontAwesomeIcon icon={faEllipsis} style={styles.iconDetail}/>
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
        marginBottom: 5,
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 10,
        flexDirection: "row",
    },
    imgProfilePhoto:{
        width:55,
        height: 55,
        borderRadius: 10,
        marginRight: 15
    },
    txtName:{
        fontWeight: "bold",
        fontSize: 15,
        includeFontPadding: false
    },
    txtDetail: {
        fontSize: 12,
        color: "#93908F"
    },
    iconDetail:{
        color: "#93908f",
        marginLeft: 185
    }
})