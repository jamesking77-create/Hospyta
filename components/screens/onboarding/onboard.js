import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  useWindowDimensions,
} from "react-native";

import splashStyles from "../../../styles/splashStyles";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from '@react-navigation/native';

const FirstOnBoard = ({ item }) => {
  const { width } = useWindowDimensions();
  const navigation = useNavigation();

  const goToRegisterPage = () => {
    navigation.navigate('RegisterPage');
  };

  const goToLoginPage = () => {
    navigation.navigate('LoginPage');
  };


  return (
   
      <ImageBackground source={item.image} style={splashStyles.backgroundImage}>
        <LinearGradient
          colors={["rgba(0,0,0,0.1)", "#000"]}
          style={[splashStyles.gradient, {width}]}
        >
          <View>
            <Image source={item.logo} style={splashStyles.textLogo} />
          </View>
          <Text style={splashStyles.paragraph}>{item.description}</Text>
          <Text style={splashStyles.caption}>{item.caption}</Text>
          <TouchableOpacity style={splashStyles.signInButton} onPress={goToRegisterPage}>
            <Text style={splashStyles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity style={splashStyles.signUpButton} onPress={goToLoginPage}>
            <Text style={splashStyles.buttonText}>Sign In</Text>
          </TouchableOpacity>
        </LinearGradient>
      </ImageBackground>
   
  );
};

export default FirstOnBoard;
