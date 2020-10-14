import React, { useContext,useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import AppIntro from '../../../components/common/AppIntro';
import Button from '../../../components/common/Button'
import { AuthContext } from '../../../context/AuthContext'

import { Images } from '../../../theme';
import commonStyles from '../../../theme/common-styles';
import AsyncStorage from '@react-native-community/async-storage';




export default function Home() {
    const {authContext} = useContext(AuthContext);
    const { signOut }= authContext;
    const [showOnboarding,setShowOnboarding] = useState(false);


    useEffect(() => {
        checkOnBoarding();
    }, [])
    const checkOnBoarding=async()=>{
        const isVisited = await AsyncStorage.getItem("visited");
        if(!isVisited){
            setShowOnboarding(true)
        }
        await AsyncStorage.removeItem('visited');

    };
    if(showOnboarding){
        return(
            <View style={commonStyles.container}>
            <AppIntro onDone={()=>{
                setShowOnboarding(false);
            }}/>
            
            </View>
        )
    

    }
   
    return (
        <View>
            <Text>Home</Text>
            <Button onPress={()=>{
                signOut();
            }} title="LOG OUT"/>
        </View>
    )
}
