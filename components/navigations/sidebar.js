import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import * as Animatable from 'react-native-animatable'; 
import { homePageStyle } from '../../styles/homePageStyle';

const Sidebar = ({ onClose, isVisible }) => { 
  return (
    <Animatable.View 
      style={[
        styles.container,
        { transform: [{ translateX: isVisible ? 0 : -850 }] }, 
      ]}
      duration={300} 
      easing="ease-out" 
    >
      <TouchableOpacity onPress={onClose} style={styles.closeButton}>
      </TouchableOpacity>
      <View style={{width: '100%', height: 100, backgroundColor: 'blue', top: 0, padding: 12, flexDirection: 'row'}}>
      <Image
          source={"../../../asset/images/Miles Morales icons.jpeg"}
          style={homePageStyle.profileImage}
        />
        <View style={homePageStyle.textContainer}>
          <Text style={[homePageStyle.welcomeText, {color: 'white', marginTop: 10}]}>Welcome Dr,</Text>
        </View>
      </View>
    </Animatable.View>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'white',
    width: 250,
    position: 'absolute', 
    top: 30,
    left: -230, 
    height: 800,
    zIndex: 1, 
   
  },

  closeButton: {
    
  },

}

);

export default Sidebar;
