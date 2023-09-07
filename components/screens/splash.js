
import React from 'react';
import { View, Image, SafeAreaView } from 'react-native';
import splashStyles from '../../styles/splashStyles';

const Splash = () => {
  return (
    <SafeAreaView>
      <View style={splashStyles.splashContainer}>
        <View style={splashStyles.splashBackground}>
          <Image source={'../../asset/images/hospytaRealLogoplash.svg'} style={splashStyles.logo} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Splash;
