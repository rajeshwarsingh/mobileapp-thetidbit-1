import { StyleSheet, Text, View } from 'react-native';
import 'expo-dev-client';
import { BannerAd, TestIds, BannerAdSize } from 'react-native-google-mobile-ads';

export default function AdmobBannerAds() {

  return (
    <View style={styles.container}>
      <BannerAd 
      size={BannerAdSize.BANNER} 
      unitId={TestIds.BANNER}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});