
import React, { useEffect } from 'react';
import { View, Image, SafeAreaView } from 'react-native';
import splashStyles from '../../styles/splashStyles';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Splash'); 
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <SafeAreaView>
      <View style={splashStyles.container}>
        <View style={splashStyles.splashBackground}>
          <Image source={'../../asset/images/hospytaRealLogo.svg'} style={splashStyles.logo} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;
