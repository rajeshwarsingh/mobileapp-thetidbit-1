import { SafeAreaView, Image } from "react-native";
import React from "react";
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
      {/* <Image source={require("../../assets/image/News.png")} /> */}
    </SafeAreaView>
  );
};

export default SplashScreen;
