import React ,{useState} from 'react';
import { View, StyleSheet,TouchableOpacity} from 'react-native';
import Tags from 'react-native-tags';
import {Colors,Fonts} from "../../theme/"
import Text from './Text'

const styles = StyleSheet.create({
    lebel:{
        color:Colors.midGrey,
        fontSize:Fonts.size.body,
        fontFamily:Fonts.type.base,


    },
});

export default function TagInput({formikProps}) {
    const [borderColor,setBorderColor] = useState(Colors.lightGrey);

    return (
        <Tags
            initialTags={formikProps.values["careers"]}
            onchangeTags={(careers)=>{
                console.log("Careers",careers);
                formikProps.setFieldValue("Careers",careers);


            }}
            onTagPress={(index,tagLabel,event,deleted)=>
              console.log(index,tagLabel,event,deleted ? "deleted" : "not deleted")
            }
            inputStyle = {{

                borderBottomColor:borderColor,
                borderBottomWidth:1,
                borderRadius:0,
                backgroundColor:"white",
                color:Colors.darkGrey,
                fontSize:Fonts.size.body,
                fontFamily:Fonts.type.base,
                lineHeight:17,
                paddingLeft:0,


            }}
            tagTextStyle={styles.lebel}
            renderTag={({ tag, index , onPress, deleteTagOnPress, readonly})=>(
                <TouchableOpacity
                style={{
                        borderWidth:1,
                        borderColor:"#18B18D",
                        borderRadius:20,
                        marginRight:4,
                        marginVertical:3,

                    }}
                    key={`${tag} - ${index}`}
                    onPress={onPress}
                >
                <View style={{padding:10}}>
                  <Text fwBold caption primary>
                      {tag}
                  </Text>

                </View>
                    
                </TouchableOpacity>

            )}
        />
    );
}
