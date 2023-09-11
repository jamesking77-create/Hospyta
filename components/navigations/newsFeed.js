import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { homePageStyle } from "../../styles/homePageStyle";

const NewsFeed = () => {
  const newsFeed = [
    {
      key: "1",
      backgroundColor: "#fff",
      source: "../../asset/images/lady.svg",
      channel: "Word/news",
      header: "Getting the upper\n hand on asthma\n allergy",
    },
    {
      key: "2",
      backgroundColor: "#fff",
      source: "../../asset/images/skincare.svg",
      channel: "World/news",
      header: "Skin cancer prevention\n 5 ways to protect\n yourself",
    },
  ];

  const handleScrollEnd = (event) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const pageIndex = Math.floor(contentOffsetX / screenWidth);
    setActivePage(pageIndex);
  };
  return (
    <View>
      <View style={homePageStyle.communtyFeedBox}>
        <Text style={{ marginLeft: 30, fontWeight: "bold" }}>
          News Feed
        </Text>
        <View style={{ marginTop: 8, marginLeft: 70 }}>
          <Text style={{ color: "#6798E1", fontSize: 15, marginLeft: 50 }}>
            View All
          </Text>
        </View>
      </View>

      <FlatList
        data={newsFeed}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              homePageStyle.news,
              {
                backgroundColor: item.backgroundColor,
                flex: 1,
              },
            ]}
          >
            <Image
              source={item.source}
              style={{
                width: 100,
                height: 100,
                marginTop: 20,
                marginLeft: 12,
                borderRadius: 12,
              }}
            />
            <View>
              <Text
                style={{
                  fontSize: 15,
                  marginLeft: 15,
                  marginTop: 30,
                  color: "gray",
                }}
              >
                {item.channel}
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  marginLeft: 15,
                  marginTop: 5,
                }}
              >
                {item.header}
              </Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.key}
        onMomentumScrollEnd={handleScrollEnd}
      />
    </View>
  );
};
export default NewsFeed;
