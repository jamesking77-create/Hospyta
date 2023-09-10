import React from "react"
import { View, Text, FlatList, Image, TouchableOpacity,ImageBackground } from "react-native"
import { homePageStyle } from "../../styles/homePageStyle";


const CommunityFeed =()=>{

    const communityFeed = [
        {
          key: "1",
          backgroundColor: "#fff",
          source: "../../../asset/images/hands.svg",
          product: 'Temperature checker',
          price: '5000'
        },
        {
          key: "2",
          backgroundColor: "#fff",
          source: "../../../asset/images/barSoap.svg",
          product: 'statoscope',
          price: '15000'
        },
        { key: "3", backgroundColor: "#fff" },
      ];

      const handleScrollEnd = (event) => {
        const contentOffsetX = event.nativeEvent.contentOffset.x;
        const pageIndex = Math.floor(contentOffsetX / screenWidth);
        setActivePage(pageIndex);
      };
      
    return(
        <View>

        <View style={homePageStyle.communtyFeedBox}>
          <Text style={homePageStyle.communityText}>Community Feed</Text>
          <View style={{ marginTop: 8, marginLeft: 70 }}>
            <Text style={{ color: "#6798E1", fontSize: 15 }}>View All</Text>
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

        </View>
    )
}
export default CommunityFeed;