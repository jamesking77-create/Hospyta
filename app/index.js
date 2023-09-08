import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import SplashScreen from "../components/screens/splashsreen";
import Splash from "../components/screens/splash";
import FirstOnBoard from "../components/screens/onboard1";
import SecondOnBoard from "../components/screens/onboard2";
import ThirdOnBoard from "../components/screens/onboard3";
import FourthOnBoard from "../components/screens/onboard4";


const Stack = createStackNavigator();

const App = () => {
  return (
   
      <Stack.Navigator initialRouteName="SplashScreen" options={{ headerShown: false }}>
        <Stack.Screen name="SplashScreen" options={{ headerShown: false }} component={SplashScreen} />
        <Stack.Screen name="Splash" options={{ headerShown: false }} component={Splash} />
        <Stack.Screen name="FirstOnBoard" options={{ headerShown: false }} component={FirstOnBoard} />
        <Stack.Screen name="SecondOnBoard" options={{ headerShown: false }} component={SecondOnBoard} />
        <Stack.Screen name="ThirdOnBoard" options={{ headerShown: false }} component={ThirdOnBoard} />
        <Stack.Screen name="FourthOnBoard" options={{ headerShown: false }} component={FourthOnBoard} />
      </Stack.Navigator>
  
  );
};

export default App;
