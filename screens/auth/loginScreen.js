import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  StatusBar,
  Dimensions,
} from "react-native";
import { Colors, Fonts, Default } from "../../constants/style";
import { useTranslation } from "react-i18next";
import React, { useState } from "react";
import IntlPhoneInput from "react-native-intl-phone-input";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Loader from "../../components/loader";

const { height } = Dimensions.get("window");

const LoginScreen = (props) => {
  const { t, i18n } = useTranslation();

  const isRtl = i18n.dir() == "rtl";

  function tr(key) {
    return t(`loginScreen:${key}`);
  }

  const [visible, setVisible] = useState(false);

  const handleLogin = () => {
    setVisible(true);
    setTimeout(() => {
      setVisible(false);
      props.navigation.navigate("registerScreen");
    }, 1500);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor={Colors.primary} barStyle="light-content" />
      <View
        style={{
          backgroundColor: Colors.primary,
          justifyContent: "center",
          alignItems: "center",
          height: height / 7,
        }}
      >
        <Image source={require("../../assets/image/newsTop.png")} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            margin: Default.fixPadding * 1.5,
          }}
        >
          <Text style={{ ...Fonts.Bold25Primary }}>{tr("login")}</Text>
          <Text
            style={{
              ...Fonts.Medium14ExtraLightGrey,
              marginVertical: Default.fixPadding,
              textAlign: isRtl ? "right" : "left",
              maxWidth: isRtl ? null : "70%",
            }}
          >
            {tr("pleaseConfirm")}
          </Text>

          <IntlPhoneInput
            placeholder={tr("mobileNo")}
            defaultCountry="IN"
            containerStyle={{
              ...Default.shadow,
              ...Fonts.SemiBold16Grey,
              borderRadius: 10,
              backgroundColor: Colors.white,
              marginVertical: Default.fixPadding * 1.5,
              alignItems: "center",
            }}
            phoneInputStyle={{
              borderLeftWidth: 2,
              borderLeftColor: Colors.lightGrey,
              paddingHorizontal: Default.fixPadding,
              textAlign: isRtl ? "right" : "left",
            }}
          />

          <Text style={{ ...Fonts.Medium12DarkRed }}>{tr("verification")}</Text>
          <Loader visible={visible} />
          <TouchableOpacity
            onPress={handleLogin}
            style={{
              ...Default.shadow,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: Colors.primary,
              marginVertical: Default.fixPadding * 3,
              paddingVertical: Default.fixPadding * 1.5,
              borderRadius: 10,
            }}
          >
            <Text style={{ ...Fonts.ExtraBold18White }}>{tr("login")}</Text>
          </TouchableOpacity>

          <View
            style={{
              flexDirection: "row",
              marginBottom: Default.fixPadding * 2,
            }}
          >
            <View
              style={{
                flex: 1,
                height: 1,
                backgroundColor: Colors.grey,
                alignSelf: "center",
              }}
            />

            <Text
              style={{
                ...Fonts.Medium14Black,
                textAlign: "center",
                marginHorizontal: Default.fixPadding * 0.5,
              }}
            >
              {tr("or")}
            </Text>

            <View
              style={{
                flex: 1,
                height: 1,
                backgroundColor: Colors.grey,
                alignSelf: "center",
              }}
            />
          </View>

          <TouchableOpacity
            style={{
              flexDirection: "row",
            }}
          >
            <View
              style={{
                flex: 1.5,
                backgroundColor: Colors.blue,
                paddingVertical: Default.fixPadding * 1.5,
                justifyContent: "center",
                alignItems: "center",
                borderTopLeftRadius: 10,
                borderBottomLeftRadius: 10,
              }}
            >
              <FontAwesome name="facebook" size={18} color={Colors.white} />
            </View>
            <View
              style={{
                flex: 8.5,
                flexDirection: "row",
                backgroundColor: Colors.lightBlue,
                paddingVertical: Default.fixPadding * 1.5,
                borderBottomRightRadius: 10,
                borderTopRightRadius: 10,
              }}
            >
              <View
                style={{
                  flex: 7,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ ...Fonts.Bold18White }}>Facebook</Text>
              </View>
              <View
                style={{
                  flex: 1.5,
                }}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              flexDirection: "row",
              marginTop: Default.fixPadding * 2,
            }}
          >
            <View
              style={{
                flex: 1.5,
                backgroundColor: Colors.red,
                paddingVertical: Default.fixPadding * 1.5,
                justifyContent: "center",
                alignItems: "center",
                borderTopLeftRadius: 10,
                borderBottomLeftRadius: 10,
              }}
            >
              <FontAwesome name="google" size={18} color={Colors.white} />
            </View>
            <View
              style={{
                flex: 8.5,
                flexDirection: "row",
                backgroundColor: Colors.lightRed,
                paddingVertical: Default.fixPadding * 1.5,
                borderBottomRightRadius: 10,
                borderTopRightRadius: 10,
              }}
            >
              <View
                style={{
                  flex: 7,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ ...Fonts.Bold18White }}>Google</Text>
              </View>
              <View
                style={{
                  flex: 1.5,
                }}
              />
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;
