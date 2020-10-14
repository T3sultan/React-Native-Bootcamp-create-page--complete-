import React from 'react'
import { View, Text as RNText,StyleSheet} from 'react-native'
import { moderateScale } from 'react-native-size-matters';
// import { Colors } from 'react-native/Libraries/NewAppScreen'
import { Fonts,Colors } from '../../theme'

const styles = StyleSheet.create({
    text:{
        fontSize:Fonts.size.body,
        fontFamily:Fonts.type.base,
        color:Colors.text,
    }
})


export default function Text(props) {
   const {
       children,
       mega,
       jumbo,
       display,
       headline,
       title,
       subheader,
       small,
       caption,
       bold,
       semibold,
       error,
       lightGrey,
       midGrey,
       darkGrey,
       color,
       primary,
       white,
       undrline,
       centered,
       alightRight,
       fwNormal,
       fw500,
       fw600,
       fwBold,
       lh,
       style,
      


   }=props;

    return (
        <RNText 
        style={[styles.text,
        bold && {fontFamily:Fonts.type.bold},
        semibold && {fontFamily:Fonts.type.boldRegular},
        small && {fontSize:moderateScale(Fonts.size.small)},
        caption && {fontSize:moderateScale(Fonts.size.caption)},
        mega && {fontSize:moderateScale(Fonts.size.mega)},
        jumbo && {fontSize:moderateScale(Fonts.size.jumbo)},
        display && {fontSize:moderateScale(Fonts.size.display)},
        headline && {fontSize:moderateScale(Fonts.size.headline)},
        title && {fontSize:moderateScale(Fonts.size.title)},
        subheader && {fontSize:moderateScale(Fonts.size.subheader)},
        error && {color:Colors.error},
        lightGrey && {color:Colors.lightGrey},
        midGrey && {color:Colors.midGrey},
        darkGrey && {color:Colors.darkGrey},
        white && {color:Colors.white},
        color && {color:color},
        primary && {color:Colors.primary},
        undrline && {textDecorationLine:"underline"},
        centered && {textAlign:"center"},
        alightRight && {textAlign :"right"},
        fwNormal && {fontWeight:"normal"},
        fw500 && {fontWeight:"500"},
        fw600 && {fontWeight:"600"},
        fwBold && {fontWeight:"bold"},
        lh && {lineHeight:lh},
        style,

        ]}
        >
        {children}
        </RNText>
    )
}
