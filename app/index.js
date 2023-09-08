import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import SplashScreen from "../components/screens/splashsreen";
import Splash from "../components/screens/splash";
import Onboarding from "../components/screens/onboarding/onboarding ";


const Stack = createStackNavigator();

const App = () => {
  return (
   
      <Stack.Navigator initialRouteName="SplashScreen" options={{ headerShown: false }}>
        <Stack.Screen name="SplashScreen" options={{ headerShown: false }} component={SplashScreen} />
        <Stack.Screen name="Splash" options={{ headerShown: false }} component={Splash} />
        <Stack.Screen name="Onboarding" options={{ headerShown: false }} component={Onboarding} />
      </Stack.Navigator>
  
  );
};

export default App;
