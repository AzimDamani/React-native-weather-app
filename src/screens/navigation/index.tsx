import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from "../splash";
import HomeScreen from "../Home";
import DetailsScreen from "../Details";
import FavoutitesScreen from "../Favouties";

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="SplashScreen">
                <Stack.Screen 
                name="SplashScreen"
                component={SplashScreen}  
                options={{
                    headerShown: false
                }}              
                />
                <Stack.Screen 
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    title:"Home",
                    headerShown: false
                }}/>
                <Stack.Screen 
                name="DetailsScreen"
                component={DetailsScreen}
                options={{
                    title:"Details"
                }}/>
                <Stack.Screen 
                name="FavoutitesScreen"
                component={FavoutitesScreen}
                options={{title:"Favouties"}}/>
            </Stack.Navigator>
        </NavigationContainer>

    )
}

export default StackNavigation;