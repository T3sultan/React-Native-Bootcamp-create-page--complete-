import React from 'react'
import { View ,ScrollView,TouchableOpacity} from 'react-native'
import Text from '../../../components/common/Text'
import Input from '../../../components/common/Input'
import { Metrics ,Colors} from '../../../theme'
import commonStyles from '../../../theme/common-styles'
import {Formik} from 'formik';
import * as yup from 'yup';
import TagInput from '../../../components/common/TagInput.'
import Button from '../../../components/common/Button'
import {Switch,Icon, Item} from 'native-base';

const colors=[
    {
        name:"orange",
        code:"#F2994a"
    },
    {
        name:"green",
        code:"#27AE60"
    },
    {
        name:"purple",
        code:"#9B51E0",

    },
    {
        name:"blue",
        code:"#2D9CDB"
    },
]

export default function Create() {
    return (
        <ScrollView style={commonStyles.container}>
           <View style={{margin:Metrics.base}}>
             <Text title  bold>Create Bootcamp</Text>

             <Formik 
             initialValues={{
                 title:'',
                 description:'',
                 careers:[],
                 address:'',
                 email:'',
                 website:'',
                 contact:'',
                 isScholarship:false,
                 jobGuarantee:false,
                 coverColor:{
                     name:'orange',
                     code: Colors.orange
                 }
             }}
             onSubmit={(values, action)=>{
                 console.log("values",values);

             }}
             >
             {
                 (formikProps)=>(
                     <View style={{marginTop:Metrics.doubleBase}}>
                       <Input
                           formikKey="title"
                           formikProps={formikProps}
                           placeholder="Title"
                           autoCapitalize="words"
                       />
                       <Input
                           formikKey="description"
                           formikProps={formikProps}
                           placeholder="Description"
                       />
                       <View style={{marginBottom:Metrics.doubleBase}}>
                           <Text style={{marginBottom:5}} lightGrey>
                           careers (press space after adding a career)

                           </Text>
                           <TagInput 
                                     formikKey="careers"
                                    formikProps={formikProps}
                                   
                                   
                                     
                           />
                       </View>
                       <Input
                           formikKey="address"
                           formikProps={formikProps}
                           placeholder="Bootcamp Address"
                       />
                       <Input
                           formikKey="email"
                           formikProps={formikProps}
                           placeholder="Contact Email"

                       />
                       <Input
                           formikKey="contact"
                           formikProps={formikProps}
                           placeholder="Contact Number"
                       />
                       <Input
                           formikKey="website"
                           formikProps={formikProps}
                           placeholder="Bootcamp Website"
                       />
                       <View style={{
                            flexDirection:"row",
                            justifyContent:"space-between",
                            alignItems:"center",
                            marginVertical:Metrics.base,
                        }}>
                        <View style={{flex:1,marginRight:10}}>
                        <Text style={{marginBottom:5}} bold>Scholarship available</Text>
                        <Text caption>Do you provide scholarship to the students?</Text>

                        </View>
                        <Switch onValueChange={(value)=>{
                            formikProps.setFieldValue('isScholarship',value)

                        }} value={formikProps.values['isScholarship']}/>

                       </View>
                       <View style={{
                           flexDirection:"row",
                           justifyContent:"space-between",
                           alignItems:"center",
                           marginVertical:Metrics.base
                           }}>
                           <View style={{flex:1,marginRight:10}}>
                           <Text style={{marginBottom:5}} bold>Job Ready </Text>
                           <Text caption>Will students become job ready after completing?</Text>

                           </View>
                           <Switch onValueChange={(value)=>{
                               formikProps.setFieldValue('jobGuarantee',value)
                           }} value={formikProps.values['jobGuarantee']}/>

                       </View>

                       <View style={{marginTop:Metrics.doubleBase}}> 
                        <Text bold>Select your cover color</Text>
                        <View style={{
                            flexDirection:"row",
                            paddingTop:20,
                            }}>
                            {colors.map((item)=>{
                                return(
                                    <TouchableOpacity key={item.name} onPress={()=>{
                                        formikProps.setFieldValue("coverColor",item)
                                    }}
                                    style={{
                                        height:Metrics.doubleBase,
                                        width:Metrics.doubleBase,
                                        backgroundColor:item.code,
                                        marginRight:Metrics.base,
                                        borderRadius:Metrics.base,
                                        alignItems:"center",
                                        justifyContent:"center",
                                    }}
                                    >
                                    {item.name === formikProps.values['coverColor'].name && (
                                        <Icon 
                                        name="ios-checkmark" 
                                        style={{color:Colors.white,fontSize:30}}
                                         

                                        />
                                    )}

                                    </TouchableOpacity>

                                )
                            })}

                        </View>

                       </View>

                       <Button onPress={formikProps.handleSubmit} style={{marginTop:Metrics.base}} title="Create"/>


                     </View>
                 )
             }

             </Formik>

           </View>
            
        </ScrollView>
    )
}
