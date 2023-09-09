import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, Switch } from 'react-native';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';
import { homePageStyle } from '../../../styles/homePageStyle'; 

const HomePage = () => {
  return (
    <ScrollView style={homePageStyle.container} >

      <View style={homePageStyle.topSection}>
        <Image
          source={'../../../asset/images/Miles Morales icons.jpeg'}
          style={homePageStyle.profileImage}
        />
        <View style={homePageStyle.textContainer}>
          <Text style={homePageStyle.welcomeText}>Welcome Dr,</Text>
          <Text style={homePageStyle.subText}>What do you want to {'\n'} do today</Text>
        </View>
        <TouchableOpacity style={homePageStyle.iconContainer}>
          <MaterialIcons name="notifications" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={homePageStyle.iconContainer}>
            <Image source={'../../../asset/icons/menu.png'} style={{width: 30,height: 30}}/>
        </TouchableOpacity>
      </View>

      <ScrollView horizontal style={homePageStyle.listContainer}>
        <View style={homePageStyle.boxContainer}>
         
          <View style={[homePageStyle.box, { backgroundColor: '#643FDB' }]}>
            <View style={{backgroundColor:'#FFFFFF24', borderRadius:12, marginLeft: 30, width: 50, height:80, marginTop:30}}>

            </View>
          </View>
          {/* Box 2 */}
          <View style={[homePageStyle.box, { backgroundColor: '#FCC500' }]}>
            {/* Content for Box 2 */}
          </View>
          {/* Box 3 */}
          <View style={[homePageStyle.box, { backgroundColor: 'lightgreen' }]}>
            {/* Content for Box 3 */}
          </View>
        </View>
      </ScrollView>

      {/* Pagination Dots */}
      <View style={homePageStyle.paginationDots}>
        <View style={homePageStyle.dot}></View>
        <View style={homePageStyle.dot}></View>
        <View style={homePageStyle.dot}></View>
      </View>

      {/* Two Boxes at the Bottom */}
      <View style={homePageStyle.bottomBoxesContainer}>
        {/* Box 1 */}
        <View style={[homePageStyle.bottomBox, { backgroundColor: 'lightblue' }]}>
          <View style={homePageStyle.switchContainer}>
            <Text style={homePageStyle.availabilityText}>I am available</Text>
            <Switch
              value={true} // Set the initial value as needed
              trackColor={{ false: 'red', true: 'green' }}
              thumbColor="white"
            />
          </View>
        </View>

        {/* Box 2 */}
        <View style={[homePageStyle.bottomBox, { backgroundColor: 'lightcoral' }]}>
          <View style={homePageStyle.calendarBox}>
            <FontAwesome name="calendar" size={24} color="black" style={homePageStyle.calendarIcon} />
            <Text style={homePageStyle.calendarText}>Schedule appointment calendar</Text>
            <FontAwesome name="arrow-right" size={24} color="black" style={homePageStyle.arrowIcon} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default HomePage;
