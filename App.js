import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,View } from 'react-native';
import {useFonts} from "@use-expo/font";
import {AppLoading} from "expo";
import RootNavigation from './src/navigation/RootNavigation';

export default function App() {
  const [fontLoaded]=useFonts({
    EncodeSansRegular:require("./assets/fonts/EncodeSans-Regular.ttf"),
    EncodeSansBold: require("./assets/fonts/EncodeSans-Bold.ttf"),
    MontserratRegular: require("./assets/fonts/Montserrat-Regular.ttf"),
    MontserratBold: require("./assets/fonts/Montserrat-Bold.ttf"),
  });

  if(!fontLoaded){
    return(
      <AppLoading/>
    )
  }

  return (
    <RootNavigation/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
