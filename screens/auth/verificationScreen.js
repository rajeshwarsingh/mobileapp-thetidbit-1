import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
  StatusBar,
} from "react-native";
import React, { useState } from "react";
import OTPTextView from "react-native-otp-textinput";
import { useTranslation } from "react-i18next";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Colors, Fonts, Default } from "../../constants/style";
import Loader from "../../components/loader";

const { height, width } = Dimensions.get("window");

const VerificationScreen = (props) => {
  const { t, i18n } = useTranslation();

  const isRtl = i18n.dir() == "rtl";

  function tr(key) {
    return t(`verificationScreen:${key}`);
  }
  const [visible, setVisible] = useState(false);

  const handleRegister = () => {
    setVisible(true);
    setTimeout(() => {
      setVisible(false);
      props.navigation.navigate("languageScreen");
    }, 1500);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor={Colors.primary} barStyle="light-content" />
      <View
        style={{
          backgroundColor: Colors.primary,
          height: height / 7,
        }}
      >
        <TouchableOpacity
          style={{
            marginHorizontal: Default.fixPadding * 1.5,
            alignItems: isRtl ? "flex-end" : "flex-start",
          }}
          onPress={() => props.navigation.goBack()}
        >
          <Ionicons
            name={isRtl ? "arrow-forward" : "arrow-back"}
            size={27}
            color={Colors.white}
          />
        </TouchableOpacity>
        <Image
          source={require("../../assets/image/newsTop.png")}
          style={{ alignSelf: "center" }}
        />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1, alignItems: "center" }}
      >
        <Text
          style={{
            ...Fonts.Bold25Primary,
            marginVertical: Default.fixPadding,
          }}
        >
          {tr("verification")}
        </Text>
        <Text
          style={{
            ...Fonts.Medium14Grey,
            textAlign: "center",
          }}
        >
          {tr("confirmation")}
        </Text>
        <Text
          style={{
            ...Fonts.Medium14Grey,
            textAlign: "center",
          }}
        >
          {tr("mobileNo")} +91(1234567890)
        </Text>
        <OTPTextView
          containerStyle={{
            marginVertical: Default.fixPadding * 2,
            marginHorizontal: Default.fixPadding * 4,
          }}
          textInputStyle={{
            backgroundColor: Colors.white,
            borderRadius: 10,
            marginHorizontal: Default.fixPadding * 1.5,
            ...Fonts.Medium22White,
            ...Default.shadow,
            marginVertical: Default.fixPadding * 2,
            selectionColor: Colors.primary,
          }}
          tintColor={Colors.transparent}
          offTintColor={Colors.transparent}
          inputCount={4}
          keyboardType="numeric"
        />
        <Loader visible={visible} />

        <TouchableOpacity
          onPress={handleRegister}
          style={{
            ...Default.shadow,
            width: width / 1.1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: Colors.primary,
            marginTop: Default.fixPadding * 3,
            paddingVertical: Default.fixPadding * 1.5,
            borderRadius: 10,
          }}
        >
          <Text style={{ ...Fonts.ExtraBold18White }}>{tr("verifyNow")}</Text>
        </TouchableOpacity>
        <Text
          style={{ ...Fonts.SemiBold16Primary, marginTop: Default.fixPadding }}
        >
          {tr("resend")}
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default VerificationScreen;
