import React, {useEffect, useState} from "react";
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  Image,
  FlatList,
  StyleSheet,
} from "react-native";
import * as WebBrowser from 'expo-web-browser';
import Ionicons from "react-native-vector-icons/Ionicons";
import { useTranslation } from "react-i18next";
import Carousel from 'react-native-snap-carousel';


import { Colors, Fonts, Default } from "../constants/style";

import { getBreakingNews } from '../api/index';

import {getScreenWidth, getScreenHeight} from '../helpers/DimensionsHelper';
const SCREEN_WIDTH = getScreenWidth();

import NewsCard from '../components/NewsCard';

const VideoScreen = (props) => {
  const [breakingNews, setBreakingNews] = useState([])
  const { t, i18n } = useTranslation();

  const isRtl = i18n.dir() == "rtl";

  function tr(key) {
    return t(`videoScreen:${key}`);
  }

  useEffect(() => {
    getBreakingNews().then((response) => {
      let formatedBreakingNews = response?.data.map((news)=>{
        return {
          source_name: news.author,
          title: news.title,
          image_url: news.logo,
          content: news.content,
          description: news.description,
          bottom_headline: news.description,
          bottom_text: "",
          sourceLink:news.sourceLink,
        }
      })
      setBreakingNews(formatedBreakingNews);
    });
  }, []);
  
  const _handlePressButtonAsync = async (e,item) => {
    let result = await WebBrowser.openBrowserAsync(item.sourceLink);
  };

  const renderItemBreakingNews = ({ item, index }) => {
    const isFirst = index === 0;
    // alert(item)
    return (
      <TouchableOpacity
        onPress={(e)=>_handlePressButtonAsync(e,item)}
        style={{
          ...Default.shadow,
          backgroundColor: Colors.white,
          borderRadius: 10,
          marginHorizontal: Default.fixPadding * 1.5,
          marginTop: isFirst ? Default.fixPadding * 1.5 : 0,
          marginBottom: Default.fixPadding * 1.5,
          borderColor: Colors.primary,
          flexDirection: isRtl ? "row-reverse" : "row",
          overflow: "hidden",
        }}
      >
        <Image source={{ uri: item.image ? item.image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1HOpbOjRaShN8_MK1iFAc1ehpL9IaBcm-Hw&usqp=CAU' }} style={{ width: 131, height: 148 }} />
         <View
          style={{
            height: 30,
            width: 30,
            borderRadius: 15,
            backgroundColor: Colors.white,
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            alignSelf: "center",
            marginHorizontal: Default.fixPadding * 5,
          }}
        >
          <Ionicons name="caret-forward" size={20} color={Colors.black} />
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: isRtl ? "flex-end" : "flex-start",
            marginHorizontal: Default.fixPadding,
          }}
        >
          <Text
            style={{
              ...Fonts.Medium16Black,
              maxWidth: "80%",
              textAlign: isRtl ? "right" : "left",
            }}
          >
            {item.description}
          </Text>
          <Text
            style={{
              ...Fonts.Medium14Grey,
              marginVertical: Default.fixPadding * 0.5,
            }}
          >
            {item.time}
          </Text>
          <View style={{ flexDirection: isRtl ? "row-reverse" : "row" }}>
            <Ionicons
              name="bookmark-outline"
              size={18}
              color={Colors.primary}
            />
            <Ionicons
              name="share-social-outline"
              size={18}
              color={Colors.primary}
              style={{ marginHorizontal: Default.fixPadding }}
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const data = [
    {
      source_name: 'bbc',
      title: 'Donna Ongsiako, left for dead, survived a violent home invasion',
      image_url: 'https://assets3.cbsnewsstatic.com/hub/i/r/2023/05/21/ca30b52a-486f-4547-9919-e617103969a2/thumbnail/1200x630/3942baa04b35a4446ff1539b9236f7f3/ongsiako-donna.jpg',
      content: 'Tiny Colts Neck, New Jersey, sits just 50 miles from New York City. But it might as well be a world away. In July 2013, this quiet community was rocked by news of a violent home invasion whe',
      bottom_headline: "headline bottom",
      bottom_text: "bottom test asdasdfasf"
    },
    {
      source_name: 'bbc',
      title: 'Nikola Jokic joins Zubin Mehenti on Sports',
      image_url: 'https://i.ytimg.com/vi/JnRLLZ6ofEA/maxresdefault.jpg',
      content: 'Nikola Jokic joins Zubin Mehenti on Sports',
      bottom_headline: "headline bottom",
      bottom_text: "bottom test asdasdfasf"
    },
  ]

  // const {
  //   source_name,
  //   title,
  //   image_url,
  //   content,
  //   bottom_headline,
  //   bottom_text,
  // } = this.props.data.news_obj;
  

  const renderItem = ({item, index}) => {
    return (
      <NewsCard key={String(index)} data={item} />
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
      <StatusBar backgroundColor={Colors.white} barStyle="dark-content" />
      <View
        style={{
          paddingVertical: Default.fixPadding,
          backgroundColor: Colors.white,
        }}
      >
        <Text
          style={{
            ...Fonts.Bold18Black,
            marginHorizontal: Default.fixPadding * 1.5,
          }}
        >
          {tr("video")}
        </Text>
      </View>

      {/* <FlatList
        style={{ backgroundColor: Colors.white }}
        data={breakingNews}
        renderItem={renderItemBreakingNews}
        keyExtractor={(item) => item.key}
        showsVerticalScrollIndicator={false}
      /> */}

      <View style={styles.container}>
      <Carousel
        data={breakingNews}
        renderItem={renderItem}
          sliderWidth={SCREEN_WIDTH}
          sliderHeight={getScreenHeight()}
          itemWidth={SCREEN_WIDTH}
          itemHeight={getScreenHeight()}
          inactiveSlideOpacity={1}
          inactiveSlideScale={1}
          vertical={true}
          lockScrollWhileSnapping={true}
          swipeThreshold={70}
          nestedScrollEnabled
          windowSize={5}
      />
    </View>

    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: 'lightgray',
    borderRadius: 10,
    padding: 20,
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default VideoScreen;

