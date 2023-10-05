import * as React from 'react'
import HomeScreen from "./screens/HomeScreen";
import {NavigationContainer} from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { faHouse, faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import DenemeScreen from './screens/DenemeScreen';

const homeName = "Home"

const Tab = createBottomTabNavigator();

const MainContainer = () => {
    return(<NavigationContainer>
        <Tab.Navigator initialRouteName={homeName} screenOptions={({route})=>({
            tabBarIcon: ({focused, color, size}) =>{
                let rn = route.name;
                let iconName;

                if (rn === homeName){
                    iconName = faHouse
                }
                else if(rn === "Deneme"){
                    iconName = faSquarePlus;
                }

                return <FontAwesomeIcon icon={iconName} style={{color}} size={20}/>
            },
            
            // tabBarActiveBackgroundColor:"#96b6c5",
            tabBarActiveTintColor: "#96b6c5",
            tabBarLabelStyle: {paddingBottom: 10, fontSize:10},
            headerShown: false,
            tabBarShowLabel: false

        })}
        >

            <Tab.Screen name={homeName} component={HomeScreen}/>
            <Tab.Screen name="Deneme" component={DenemeScreen}/>
        </Tab.Navigator>
    </NavigationContainer>)
}

export default MainContainer