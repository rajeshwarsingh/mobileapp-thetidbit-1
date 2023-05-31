import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  FlatList,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Colors, Fonts, Default } from "../../constants/style";
import Loader from "../../components/loader";

const { height } = Dimensions.get("window");

const LanguageScreen = (props) => {
  const { t, i18n } = useTranslation();

  const isRtl = i18n.dir() == "rtl";

  function tr(key) {
    return t(`languageScreen:${key}`);
  }
  const [visible, setVisible] = useState(false);

  const handleLanguage = () => {
    setVisible(true);
    setTimeout(() => {
      setVisible(false);
      props.navigation.navigate("bottomTab");
    }, 1500);
  };

  const language = [
    {
      id: "1",
      text: tr("english"),
    },
    {
      id: "2",
      text: tr("hindi"),
    },
    {
      id: "3",
      text: tr("gujarati"),
    },
    {
      id: "4",
      text: tr("marathi"),
    },
    {
      id: "5",
      text: tr("tamil"),
    },
    {
      id: "6",
      text: tr("arabic"),
    },
    {
      id: "7",
      text: tr("spanish"),
    },
  ];
  const [selectedLanguage, setSelectedLanguage] = useState(tr("english"));

  const renderItemLanguage = ({ item }) => {
    return (
      <TouchableOpacity
        style={{
          backgroundColor: Colors.white,
          ...Default.shadow,
          borderRadius: 8,
          alignItems: "center",
          padding: Default.fixPadding * 1.5,
          marginBottom: Default.fixPadding * 1.5,
          flexDirection: isRtl ? "row-reverse" : "row",
          justifyContent: "space-between",
          marginHorizontal: Default.fixPadding * 1.5,
        }}
        onPress={() => {
          setSelectedLanguage(item.text);
          handleLanguage();
        }}
      >
        <Text style={{ ...Fonts.SemiBold16Black }}>{item.text}</Text>
        <MaterialCommunityIcons
          name={
            selectedLanguage === item.text ? "circle-slice-8" : "circle-outline"
          }
          size={24}
          color={selectedLanguage === item.text ? Colors.primary : Colors.grey}
        />
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
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

      <Text
        style={{
          ...Fonts.Bold25Primary,
          textAlign: "center",
          marginVertical: Default.fixPadding * 2,
        }}
      >
        {tr("selectLanguage")}
      </Text>
      <Loader visible={visible} />
      <FlatList
        data={language}
        renderItem={renderItemLanguage}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default LanguageScreen;
