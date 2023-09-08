
import React, { useEffect } from 'react';
import { View, Image, SafeAreaView } from 'react-native';
import splashStyles from '../../styles/splashStyles';
import { useNavigation } from '@react-navigation/native';



const Splash = () => {
    const navigation = useNavigation();
    useEffect(() => {
        const timer = setTimeout(() => {
          navigation.replace('Onboarding'); 
        }, 5000);
        return () => clearTimeout(timer);
      }, [navigation]);

  return (
    <SafeAreaView>
      <View style={splashStyles.splashContainer}>
        <View style={splashStyles.splashBackground}>
          <Image source={'../../asset/images/hospytaRealLogoSplash.svg'} style={splashStyles.logo} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Splash;
