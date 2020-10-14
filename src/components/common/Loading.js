import React from 'react'
import { View, Text ,ActivityIndicator} from 'react-native'
//import { Colors } from 'react-native/Libraries/NewAppScreen'
import {Colors} from '../../theme'

export default function Loading({size='large'}) {
    return (
        <View>
           <ActivityIndicator color={Colors.primary} size={size}/>
        </View>
    )
}
