import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

import splashStyles from "../../styles/splashStyles";
import { LinearGradient } from "expo-linear-gradient";



const FourthOnBoard = () => {

  return (
    <ImageBackground
      source={"../../asset/images/image4.svg"}
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
          Inspire Your Medical {"\n"}Practice Through The {"\n"}Power Of Collaboration {"\n"}And Knowledge {"\n"}Sharing
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

export default FourthOnBoard;
