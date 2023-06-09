import OneSignal from 'react-native-onesignal';
import * as WebBrowser from 'expo-web-browser';
import Constants from "expo-constants";

//DO NOT REMOVE FROM HERE, NEED TO NOUTE ON PERTICULAR SCREEN
import NavigationService from "../services/NavigationService"

const _handlePressButtonAsync = async (url) => {
  await WebBrowser.openBrowserAsync(url);
};


export function handleOSPushNotification() {
  OneSignal.setAppId(Constants.manifest.extra.oneSignalAppId);

  // HANDLING PUSH NOTIFICATION ON FORGROUND, WHEN APP IS ALREADY OPEN
  OneSignal.setNotificationWillShowInForegroundHandler(notificationReceivedEvent => {
    console.log("OneSignal: notification will show in foreground:", notificationReceivedEvent);
    let notification = notificationReceivedEvent.getNotification();
    console.log("notification: ", notification);
    const data = notification.additionalData
    console.log("additionalData: ", data);
    //Silence notification by calling complete() with no argument
    notificationReceivedEvent.complete(notification);
  });

  // HANDLING WHEN NOTIFICAITON OPENED
  OneSignal.setNotificationOpenedHandler(async(openedEvent) => {
    const { action, notification } = openedEvent;
    const {url=""} = notification?.additionalData;
    console.log('url:',url)
    await _handlePressButtonAsync(url);
    // NavigationService.navigate('SCREEN_NAME')
  });
}

