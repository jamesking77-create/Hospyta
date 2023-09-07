import React, { useEffect } from 'react';
import { View, Image, SafeAreaView, ScrollView, } from 'react-native';
import splashStyles from '../../styles/splashStyles'; 

const SplashScreen = ({ navigation }) => {

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       navigation.replace('MainScreen');
//     }, 3000); 
//     return () => clearTimeout(timer);
//   }, [navigation]);

  return (
    <SafeAreaView>
        <View style={splashStyles.container}>
            <Image source={'../../asset/images/hospytaRealLogo.svg'} style={splashStyles.logo} />
        </View>
    </SafeAreaView>
  );
};

export default SplashScreen;
