import React, { useState, useRef } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Switch,
  FlatList,
} from "react-native";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";
import { homePageStyle } from "../../../styles/homePageStyle";
import Appointment from "../../navigations/appointments";
import CommunityFeed from "../../navigations/communityFeed";
import MedStuff from "../../navigations/medStuff";
import ShopMeds from "../../navigations/shopMeds";
import NavigationBar from "../../navigations/navigationBars";
import PopularDrugs from "../../navigations/popularDrugs";
import NewsFeed from "../../navigations/newsFeed";
import * as Animatable from "react-native-animatable";
import Sidebar from "../../navigations/sidebar";

const HomePage = () => {
  const [activePage, setActivePage] = useState(0);
  const drawerRef = useRef(null);
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const horizontalData = [
    { key: "1", backgroundColor: "#643FDB" },
    { key: "2", backgroundColor: "#FCC500" },
    { key: "3", backgroundColor: "lightgreen" },
  ];

  const handleScrollEnd = (event) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const pageIndex = Math.floor(contentOffsetX / screenWidth);
    setActivePage(pageIndex);
  };

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <ScrollView style={homePageStyle.container}>
      <View style={homePageStyle.topSection}>
        <Image
          source={"../../../asset/images/Miles Morales icons.jpeg"}
          style={homePageStyle.profileImage}
        />
        <View style={homePageStyle.textContainer}>
          <Text style={homePageStyle.welcomeText}>Welcome Dr,</Text>
          <Text style={homePageStyle.subText}>
            What do you want to {"\n"} do today
          </Text>
        </View>
        <TouchableOpacity style={homePageStyle.iconContainer}>
          <MaterialIcons name="notifications" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={toggleSidebar} 
          style={homePageStyle.iconContainer}
        >
          <Image
            source={require("../../../asset/icons/menu.png")} 
            style={{ width: 30, height: 30 }}
          />
        </TouchableOpacity>

      
        <Animatable.View
          ref={drawerRef}
          animation={sidebarVisible ? "slideInRight" : "slideOutRight"} 
          duration={300}
          style={{ zIndex: -1 }} 
        >
          <Sidebar onClose={toggleSidebar} isVisible={sidebarVisible} />
        </Animatable.View>
      </View>
      <FlatList
        horizontal
        data={horizontalData}
        renderItem={({ item }) => (
          <View
            style={[
              homePageStyle.box,
              { backgroundColor: item.backgroundColor },
            ]}
          >
            <Appointment />
          </View>
        )}
        keyExtractor={(item) => item.key}
        onMomentumScrollEnd={handleScrollEnd}
      />

      <View style={homePageStyle.paginationDots}>
        {horizontalData.map((_, index) => (
          <View
            key={index}
            style={[
              homePageStyle.dot,
              index === activePage
                ? { backgroundColor: "blue" }
                : { backgroundColor: "gray" },
            ]}
          />
        ))}
      </View>

      <View style={homePageStyle.bottomBoxesContainer}>
        <View
          style={[homePageStyle.bottomBox, { backgroundColor: "#7AEC530F" }]}
        >
          <Text style={homePageStyle.availabilityText}>I am available</Text>
          <View style={homePageStyle.switchContainer}>
            <Switch
              value={true}
              trackColor={{ false: "red", true: "#159900" }}
              thumbColor="white"
            />
          </View>
        </View>

        <View style={[homePageStyle.bottomBox, { backgroundColor: "#F5F5F5" }]}>
          <FontAwesome
            name="calendar"
            size={24}
            color="black"
            style={homePageStyle.calendarIcon}
          />
          <View style={homePageStyle.calendarBox}>
            <Text style={homePageStyle.calendarText}>
              Schedule appointment calendar
            </Text>
          </View>
          <FontAwesome
            name="arrow-right"
            size={24}
            color="black"
            style={homePageStyle.arrowIcon}
          />
        </View>
      </View>

      <CommunityFeed />

      <NavigationBar />

      <MedStuff />

      <ShopMeds />

      <PopularDrugs />

      <NewsFeed />
    </ScrollView>
  );
};

export default HomePage;
