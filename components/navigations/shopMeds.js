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

const ShopMeds = () => {
  const shopMedicine = [
    {
      key: "1",
      backgroundColor: "#fff",
      source: "../../../asset/images/meds1.svg",
      product: "panadol (50mg) 200ta",
      price: "5000",
    },
    {
      key: "2",
      backgroundColor: "#fff",
      source: "../../../asset/images/meds2.svg",
      product: "tooth ache sooth med",
      price: "15000",
    },
    {
      key: "3",
      backgroundColor: "#fff",
      source: "../../../asset/images/barSoap.svg",
      product: "panadol (50mg) 200ta",
      price: "5000",
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
          Shop For Medicines
        </Text>
        <View style={{ marginTop: 8, marginLeft: 70 }}>
          <Text style={{ color: "#6798E1", fontSize: 15, marginLeft: 50 }}>
            View All
          </Text>
        </View>
      </View>

      <FlatList
        horizontal
        data={shopMedicine}
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
            <Image
              source={item.source}
              style={{ width: 100, height: 130, marginTop: 20, marginLeft: 32 }}
            />
            <Text style={{ fontSize: 10, marginLeft: 30, marginTop: 10 }}>
              {item.product}
            </Text>
            <Text
              style={{
                fontSize: 15,
                marginLeft: 30,
                marginTop: 5,
                fontWeight: "bold",
              }}
            >
              {item.price}
            </Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.key}
        onMomentumScrollEnd={handleScrollEnd}
      />
    </View>
  );
};
export default ShopMeds;
