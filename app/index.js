import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import SplashScreen from "../components/screens/splashsreen";
import Splash from "../components/screens/splash";
import Onboarding from "../components/screens/onboarding/onboarding ";
import RegisterPage from "../components/screens/authentication/registrationPage";
import LoginPage from "../components/screens/authentication/loginPage";
import HomePage from "../components/screens/pages/homePage";

const Stack = createStackNavigator();

const App = () => {
  return (
   
      <Stack.Navigator initialRouteName="SplashScreen" options={{ headerShown: false }}>
        <Stack.Screen name="SplashScreen" options={{ headerShown: false }} component={SplashScreen} />
        <Stack.Screen name="Splash" options={{ headerShown: false }} component={Splash} />
        <Stack.Screen name="Onboarding" options={{ headerShown: false }} component={Onboarding} />
        <Stack.Screen name="RegisterPage" options={{ headerShown: false }} component={RegisterPage} />
        <Stack.Screen name="LoginPage" options={{ headerShown: false }} component={LoginPage} />
        <Stack.Screen name="HomePage" options={{ headerShown: false }} component={HomePage} />
      </Stack.Navigator>
  
  );
};

export default App;
