import { View, ScrollView, SafeAreaView } from "react-native";
import { useState } from "react";
import { Stack, useRouter } from "expo-router";
import SplashScreen from "../components/screens/splashsreen";


const Home = () => {
  const router = useRouter();
    return (
        <SafeAreaView>
            <SplashScreen/>
        </SafeAreaView>
    );
};

export default Home;
