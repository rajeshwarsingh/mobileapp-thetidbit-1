import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  Image,
  Dimensions,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Colors, Fonts, Default } from "../../constants/style";
import { useTranslation } from "react-i18next";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Loader from "../../components/loader";

const { height } = Dimensions.get("window");

const RegisterScreen = (props) => {
  const { t, i18n } = useTranslation();

  const isRtl = i18n.dir() == "rtl";

  function tr(key) {
    return t(`registerScreen:${key}`);
  }

  const [textNo, onChangeTextNo] = useState();
  const [textName, onChangeTextName] = useState();
  const [textEmail, onChangeTextEmail] = useState();

  const [visible, setVisible] = useState(false);

  const handleRegister = () => {
    setVisible(true);
    setTimeout(() => {
      setVisible(false);
      props.navigation.navigate("verificationScreen");
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
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ margin: Default.fixPadding * 1.5 }}>
          <Text style={{ ...Fonts.Bold25Primary }}>{tr("register")}</Text>
          <Text
            style={{
              ...Fonts.Medium14ExtraLightGrey,
              marginVertical: Default.fixPadding,
              textAlign: isRtl ? "right" : "left",
              maxWidth: isRtl ? null : "70%",
            }}
          >
            {tr("pleaseCreate")}
          </Text>

          <View
            style={{
              ...Default.shadow,
              borderRadius: 10,
              backgroundColor: Colors.white,
              padding: Default.fixPadding * 1.5,
              marginTop: Default.fixPadding * 2,
              flexDirection: isRtl ? "row-reverse" : "row",
              alignItems: "center",
            }}
          >
            <TextInput
              placeholder={tr("name")}
              placeholderTextColor={Colors.grey}
              onChangeText={onChangeTextName}
              selectionColor={Colors.primary}
              value={textName}
              style={{
                ...Fonts.SemiBold16Black,
                flex: 9.3,
                textAlign: isRtl ? "right" : "left",
                marginHorizontal: Default.fixPadding * 0.5,
              }}
            />
            <Ionicons
              name="person-outline"
              color={Colors.grey}
              size={20}
              style={{
                flex: 0.7,
              }}
            />
          </View>

          <View
            style={{
              ...Default.shadow,
              borderRadius: 10,
              backgroundColor: Colors.white,
              padding: Default.fixPadding * 1.5,
              marginTop: Default.fixPadding * 2,
              flexDirection: isRtl ? "row-reverse" : "row",
              alignItems: "center",
            }}
          >
            <TextInput
              placeholder={tr("email")}
              placeholderTextColor={Colors.grey}
              onChangeText={onChangeTextEmail}
              selectionColor={Colors.primary}
              keyboardType="email-address"
              value={textEmail}
              style={{
                ...Fonts.SemiBold16Black,
                flex: 9.3,
                textAlign: isRtl ? "right" : "left",
                marginHorizontal: Default.fixPadding * 0.5,
              }}
            />
            <Ionicons
              name="mail-outline"
              color={Colors.grey}
              size={20}
              style={{
                flex: 0.7,
              }}
            />
          </View>

          <View
            style={{
              ...Default.shadow,
              borderRadius: 10,
              backgroundColor: Colors.white,
              padding: Default.fixPadding * 1.5,
              marginTop: Default.fixPadding * 2,
              flexDirection: isRtl ? "row-reverse" : "row",
              alignItems: "center",
            }}
          >
            <TextInput
              placeholder={tr("mobile")}
              placeholderTextColor={Colors.grey}
              onChangeText={onChangeTextNo}
              selectionColor={Colors.primary}
              keyboardType="number-pad"
              value={textNo}
              maxLength={10}
              style={{
                ...Fonts.SemiBold16Black,
                flex: 9.3,
                textAlign: isRtl ? "right" : "left",
                marginHorizontal: Default.fixPadding * 0.5,
              }}
            />
            <Ionicons
              name="call-outline"
              color={Colors.grey}
              size={20}
              style={{
                flex: 0.7,
              }}
            />
          </View>
          <Loader visible={visible} />

          <TouchableOpacity
            onPress={handleRegister}
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
            <Text style={{ ...Fonts.ExtraBold18White }}>{tr("register")}</Text>
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

export default RegisterScreen;
