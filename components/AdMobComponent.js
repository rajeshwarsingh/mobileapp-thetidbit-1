import { AdMobBanner } from 'expo-ads-admob';
import Constants from 'expo-constants';
import config from '../config';
import { View, Text } from 'react-native'

export default function AdMobComponent() {

    return (
      <View>
      <Text>Open up App.js to start working on your app!</Text>
      {/* <AdMobBanner
      bannerSize="smartBannerPortrait"
      adUnitID={'ca-app-pub-3940256099942544/6300978111'} // Replace with your Ad Unit ID
      servePersonalizedAds // Set to false for non-personalized ads
    /> */}
    </View>
    );
}



// // // import * as React from 'react';
// // // import { Text, Dimensions } from 'react-native'
// // // import { AdMobBanner, setTestDeviceIDAsync } from 'expo-ads-admob';
// // // import config from '../config';
// // // import { View } from 'react-native-web';

// // // export default function AdMobComponent() {

// // //     React.useEffect(async () => {
// // //         await setTestDeviceIDAsync('EMULATOR');
// // //     }, [])

// // //     return (
// // //             <AdMobBanner
// // //             style={{ width: Dimensions.get('window').width }}
// // //             bannerSize="fullBanner"
// // //             adUnitID={config.adUnitID}
// // //             servePersonalizedAds // true or false
// // //             onDidFailToReceiveAdWithError={this.bannerError} />
// // //     );
// // // }


// // import React from "react";
// // import { AdMobBanner, AdMobInterstitial, AdMobRewarded } from "expo";
// // import { Text, Dimensions,  StyleSheet, View } from 'react-native'
// // import config from '../config';

// // export default class App extends React.Component {
// // bannerError() {
// //     console.log("An error");
// //     return;
// //   }
  
// //   render() {
// //     return (
// //       <View style={styles.container}>
// //         <Text>Open up App.js to start working on your app!</Text>
// //         <AdMobBanner
// //          style={{ width: Dimensions.get('window').width }}
// //           bannerSize="fullBanner"
// //           adUnitID={config.adUnitID}
// //           // Test ID, Replace with your-admob-unit-id
// //           // testDeviceID="EMULATOR"
// //           didFailToReceiveAdWithError={this.bannerError}
// //         />
// //       </View>
// //     );
// //   }
// // }
// // const styles = StyleSheet.create({
// //   bottomBanner: {
// //     position: "absolute",
// //     bottom: 0
// //   },
// //   container: {
// //     flex: 1,
// //     backgroundColor: "#fff",
// //     alignItems: "center",
// //     justifyContent: "center"
// //   }
// // });











// import * as React from 'react';
// import { Text, Dimensions } from 'react-native'
// import { AdMobBanner, setTestDeviceIDAsync } from 'expo-ads-admob';
// import config from '../config'

// export default function AdMobComponent() {

//     React.useEffect(async () => {
//         await setTestDeviceIDAsync('EMULATOR');
//     }, [])

//     return (
//             <AdMobBanner
//             style={{ width: Dimensions.get('window').width }}
//             bannerSize="fullBanner"
//             adUnitID={config.adUnitID}
//             servePersonalizedAds // true or false
//             onDidFailToReceiveAdWithError={this.bannerError} />
//     );
// }