// App.js (or wherever you have your App component)
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
    <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="RegisterPage" component={RegisterPage} />
      <Stack.Screen name="LoginPage" component={LoginPage} />
      <Stack.Screen name="HomePage" component={HomePage} />
    </Stack.Navigator>
  );
};

export default App;
