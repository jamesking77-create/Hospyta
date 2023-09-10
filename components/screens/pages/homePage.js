import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Switch,
  FlatList,
  ImageBackground,
} from "react-native";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";
import { homePageStyle } from "../../../styles/homePageStyle";
import Icon from "react-native-vector-icons/FontAwesome";
import Appointment from "../../navigations/appointments";

const HomePage = () => {
  const [activePage, setActivePage] = useState(0);

  const horizontalData = [
    { key: "1", backgroundColor: "#643FDB" },
    { key: "2", backgroundColor: "#FCC500" },
    { key: "3", backgroundColor: "lightgreen" },
  ];

  const communityFeed = [
    {
      key: "1",
      backgroundColor: "#fff", 
      source: "../../../asset/images/hands.svg",
    },
    {
      key: "2",
      backgroundColor: "#fff",
      source: "../../../asset/images/barSoap.svg",
    },
    { key: "3", backgroundColor: "#fff"  },
  ];

  const handleScrollEnd = (event) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const pageIndex = Math.floor(contentOffsetX / screenWidth);
    setActivePage(pageIndex);
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
        <TouchableOpacity style={homePageStyle.iconContainer}>
          <Image
            source={"../../../asset/icons/menu.png"}
            style={{ width: 30, height: 30 }}
          />
        </TouchableOpacity>
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

        <View style={homePageStyle.communtyFeedBox}>
          <Text style={homePageStyle.communityText}>Community Feed</Text>
          <View style={{ marginTop: 8, marginLeft: 70 }}>
            <Text style={{ color: "#6798E1", fontSize: 15 }}>View All</Text>
          </View>
        </View>
      </View>

      <FlatList
        horizontal
        data={communityFeed}
        renderItem={({ item }) => (
          <ImageBackground
            source={item.source}
            style={[
              homePageStyle.feed,
              {
                backgroundColor: item.backgroundColor,
                flex: 1,
                resizeMode: "cover",
              },
            ]}
          ></ImageBackground>
        )}
        keyExtractor={(item) => item.key}
        onMomentumScrollEnd={handleScrollEnd}
      />

      {/* <TouchableOpacity onPress={()=> navigation.navigate('Home') }> */}
      <View style={{ width: "100%", height: "10%", flexDirection: "row" }}>
        <Image
          source={"../../../asset/icons/home.svg"}
          style={{ height: 30, width: 30, marginLeft: 50 }}
        />
        <Image
          source={"../../../asset/icons/calendar.svg"}
          style={{ height: 30, width: 30, marginLeft: 40 }}
        />
        <Image
          source={"../../../asset/icons/users.svg"}
          style={{
            height: 30,
            width: 30,
            height: 30,
            width: 30,
            marginLeft: 40,
          }}
        />
        <Image
          source={"../../../asset/icons/shop.svg"}
          style={{
            height: 30,
            width: 30,
            height: 30,
            width: 30,
            marginLeft: 40,
          }}
        />
        <Image
          source={"../../../asset/icons/profile.svg"}
          style={{
            height: 30,
            width: 30,
            height: 30,
            width: 30,
            marginLeft: 40,
          }}
        />
      </View>

        <View style={homePageStyle.communtyFeedBox}>
          <Text style={{marginLeft: 30, fontWeight: 'bold'}}>Shop for medical stuff</Text>
          <View style={{ marginTop: 8, marginLeft: 70 }}>
            <Text style={{ color: "#6798E1", fontSize: 15, marginLeft: 50}}>View All</Text>
          </View>
        </View>
    

      <FlatList
        horizontal
        data={communityFeed}
        renderItem={({ item }) => (
          <TouchableOpacity
      
            style={[
              homePageStyle.med,
              {
                backgroundColor: item.backgroundColor,
                flex: 1,
               

              },
            ]}
          >
            <Image source={'../../../asset/images/tempChecker.svg'} style={{width: 100, height: 130, marginTop: 20, marginLeft: 32}}/>
            <Text style={{fontSize: 10, marginLeft: 30, marginTop: 10}}>Temperature Checker</Text>
            <Text style={{fontSize: 15, marginLeft: 30, marginTop: 5, fontWeight: 'bold'}}>15,000</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.key}
        onMomentumScrollEnd={handleScrollEnd}
      />

      
    </ScrollView>
  );
};

export default HomePage;
