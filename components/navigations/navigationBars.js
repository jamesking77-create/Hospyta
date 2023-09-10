import { View, Image, TouchableOpacity } from "react-native";

const NavigationBar = () => {
  return (
    <View>
      <View
        style={{
          width: "100%",
          height: "10%",
          flexDirection: "row",
          marginTop: 40,
        }}
      >
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
    </View>
  );
};

export default NavigationBar;
