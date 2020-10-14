import React, { useEffect } from 'react'
import { View,Image} from 'react-native'
import AppIntroSlider from 'react-native-app-intro-slider';
import { scale } from 'react-native-size-matters';
import { Images,Colors, Metrics } from '../../theme';
import Text from '../common/Text';
import Button from './Button';
import AsyncStorage from '@react-native-community/async-storage';


const slides = [
    {
      key: 'one',
      title: 'Learn',
      subtitle: 'Make yourself better',
      image: Images.learn,
      descriptions:'Learn new stuffs and get professional'
    },
    {
        key: 'two',
        title: 'Earn',
        subtitle: 'Earn money with your knowledge',
        image: Images.earn,
        descriptions:'You can earn professionally with our bootcamps'
      },
    
      {
        key: 'third',
        title: 'Help',
        subtitle: 'Help others by educating',
        image: Images.help,
        descriptions:'Create your own bootcamps and help others'
      },
    
  ];

export default function AppIntro({onDone}) {
    useEffect(()=>{
        setFlag();

    },[]);

    const setFlag = async() =>{
       // await AsyncStorage.setItem("visited",'true');

    }
    const renderSlides=({item ,index})=>{
        return(
            <View>
                <Image style={{width:Metrics.screenWidth,height:scale(320)}}
                 resizeMode="contain" 
                 source={item.image}

                 />
                 <View style={{marginTop:Metrics.doubleBase}}>
                     <Text 
                      primary bold
                      mega
                      centered>{item.title}</Text>
                      <Text 
                      style={{marginTop:Metrics.halfBase}}
                      primary bold
                      centered>{item.subtitle}</Text>
                      <Text 
                      color="#666"
                      centered
                      style={{marginTop:Metrics.base}}>
                          {item.descriptions}
                      </Text>
                 </View>
                 {index === slides.length -1 && (
                     <Button
                         style={{alignSelf:"center",marginTop:Metrics.doubleBase,width:200}}
                         title="Explor now"
                         onPress={onDone}
                     />
                 )}
            </View>
        );
    }
    return (
        <AppIntroSlider
            data={slides}
            renderItem={renderSlides}
            activeDotStyle={{backgroundColor:Colors.primary}}
           
        />

    )
}
