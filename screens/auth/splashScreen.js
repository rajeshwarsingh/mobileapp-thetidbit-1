import { SafeAreaView, Image,Dimensions } from "react-native";
import React from "react";

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

import { Colors } from "../../constants/style";

const SplashScreen = (props) => {
  setTimeout(() => {
    props.navigation.push("bottomTab");
  }, 2000);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: Colors.primary,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image style={{ width: screenWidth, height: screenHeight }}  source={require("../../assets/splash.png")} />
    </SafeAreaView>
  );
};

export default SplashScreen;
