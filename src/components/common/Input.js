import React, { useState } from 'react'
import { View, Text,StyleSheet } from 'react-native'
import {Input,Label,Icon,Item} from 'native-base';
import {Colors,Metrics,Fonts} from '../../theme/'
import colors from '../../theme/colors';

export default function FormInput({
    placeholder,
    formikProps,
    formikKey,
    autoCapitalize,
    secureTextEntry,
    style,
    maxChar,
    hint,
    textStyle,
    multiline,
    autoCompleteType

}) {
  const [boderColor,setBorderColor]=useState(Colors.lightGrey);
  const onFocus=()=>{
    setBorderColor(Colors.darkGrey)
  }
    return (
        <View style={styles.wrapper}>
           <Item style={[{boderColor}]} floatingLabel>
             <Label style={styles.label}>{placeholder}</Label>
             <Input
                 onChangeText={formikProps.handleChange(formikKey)}
                 autoCapitalize={autoCapitalize}
                 autoCompleteType={autoCompleteType}
                 secureTextEntry={secureTextEntry}
                 autoCorrect={false}
                 value={formikProps.values[formikKey]}
                
                 multiline={multiline}
                 style={[styles.Label,{color:colors.darkGrey},textStyle]}
                 onFocus={onFocus}
                 onBlur={()=>{
                   formikProps.setFieldTouched(formikKey,true);
                   setBorderColor(Colors.lightGrey)
                 }}
             />

           </Item>
           {formikProps.touched[formikKey] 
           && formikProps.errors[formikKey] 
           && 
           <Text style={[styles.label,styles.errors]}
           >
           {formikProps.errors[formikKey]}
           </Text>}
        </View>
    )
}
const styles = StyleSheet.create({
  wrapper:{
    marginBottom:Metrics.doubleBase,

  },
  label:{
    color:colors.lightGrey,
    fontSize:Fonts.size.body,
    fontFamily:Fonts.type.base

  },
  errors:{
    color:Colors.error,
    fontSize:Fonts.size.caption
  }
})
