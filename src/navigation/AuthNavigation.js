
import { View, Text } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react'
import Login from '../screens/auth/Login';
import Signup from '../screens/auth/Signup';

const Stack=createStackNavigator();


export default function AuthNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
            name="Login" 
            component={Login} 
            options={{headerShown:false}}/>
            <Stack.Screen 
            name="Signup" 
            component={Signup} 
            options={{headerStyle:{
                shadowOffset:{
                    height:0,

                },
            },
            headerTitleAlign:"left",
            headerBackTitleVisible:false,
           
            
            }
        }/>
            
        </Stack.Navigator>
    )
}
