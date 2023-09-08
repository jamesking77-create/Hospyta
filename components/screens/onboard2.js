import React, { useEffect } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

import splashStyles from "../../styles/splashStyles";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from '@react-navigation/native';


const SecondOnBoard = () => {

    const navigation = useNavigation();
    useEffect(() => {
      const timer = setTimeout(() => {
        navigation.replace('ThirdOnBoard'); 
      }, 5000);
      return () => clearTimeout(timer);
    }, [navigation]);
  
 
  return (
    <ImageBackground
      source={"../../asset/images/image2.svg"}
      style={splashStyles.backgroundImage}
    >
      <LinearGradient
        colors={["rgba(0,0,0,0.1)", "#000"]}
        style={splashStyles.gradient}
      >
        <View>
          <Image
            source={"../../asset/images/textLogo.svg"}
            style={splashStyles.textLogo}
          />
        </View>
        <Text style={splashStyles.paragraph}>
          Prescription Plus.... {"\n"}Your one-stop shop {"\n"}For medicine, {"\n"}Equipment and more
        </Text>
        <Text style={splashStyles.caption}>With Hospyta</Text>
        <TouchableOpacity style={splashStyles.signInButton}>
          <Text style={splashStyles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={splashStyles.signUpButton}>
          <Text style={splashStyles.buttonText}>Sign In</Text>
        </TouchableOpacity>
      </LinearGradient>
    </ImageBackground>
  );
};

export default SecondOnBoard;
