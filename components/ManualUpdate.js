
import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Constants from "expo-constants";
import * as Linking from "expo-linking";
import { getAppLatestVersion } from '../api/index';
import { compareAppVersions } from '../utils/index';

const App = () => {
  const [isManualUpdateAvailable, setIsManualUpdateAvailable] = useState(false);

  // CODE FOR MANUALLY CHECKING UPDATE AND SENDING TO PLAYSTORE
  useEffect(() => {
    getAppLatestVersion().then(({ versionPS }) => {
      const versionCur = Constants.manifest.version;
      if (compareAppVersions(versionCur, versionPS) < 0) {
        setIsManualUpdateAvailable(true);
      }
    })
  }, [])


  if (!isManualUpdateAvailable) return null
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => Linking.openURL("http://play.google.com/store/apps/details?id=com.mobileappthetidbit")}>
        <Text style={styles.buttonText}>Update available</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'green',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default App;
