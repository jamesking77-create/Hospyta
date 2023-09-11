import { View, Image, FlatList, ImageBackground } from "react-native";
import { homePageStyle } from "../../styles/homePageStyle";

const PopularDrugs = () => {
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

  return (
    <View>
      <FlatList
        horizontal
        data={horizontalData}
        renderItem={({ item }) => (
          <ImageBackground
            source={"../../asset/images/popularDrug.svg"}
            style={{
              marginLeft: 40,
              width: 280,
              height: 250,
              borderRadius: 20,
              resizeMode: "cover",
            }}
          ></ImageBackground>
        )}
        keyExtractor={(item) => item.key}
        onMomentumScrollEnd={handleScrollEnd}
      />
      {/* 
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
      </View> */}
    </View>
  );
};

export default PopularDrugs;
