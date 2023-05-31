🚨 The following packages were not updated. You should check the READMEs for those repositories to determine what version is compatible with your new set of packages:
@react-navigation/bottom-tabs, @react-navigation/material-top-tabs, @react-navigation/native, @react-navigation/stack, i18next, react-i18next, react-native-app-intro-slider, react-native-btr, react-native-intl-phone-input, react-native-locale-detector, react-native-otp-textinput, react-native-root-toast, react-native-stars, react-native-swipe-list-view, react-native-tab-view, react-native-vector-icons, toggle-switch-react-native

Please refer to the release notes for information on any further required steps to update and information about breaking changes:
https://blog.expo.dev/expo-sdk-48-ccb8302e231

You should also look at the breaking changes from a release that you skipped:
- https://blog.expo.dev/expo-sdk-47-a0f6f5c038af



## RUN EJECTED REACT-NATIVE PROJECT
>adb uninstall com.mobileappthetidbit
>npx react-native run-android --variant=release


## I am using managed workflow for this project Means not /android or /Ios Folder in it

UI Library Used : https://callstack.github.io/react-native-paper/radio-button.html

Used Expo : 

Change the package version from package.json file
change the version and versionCode from app.json file

https://docs.expo.dev/build/setup/
https://docs.expo.dev/build-reference/apk/
npm install -g eas-cli

eas login
eas whoami
eas build:configure

eas build --platform android


## create apk command

expo build:android -t apk


---------------------------------------------------

expo start


https://docs.expo.dev/push-notifications/sending-notifications-custom/

https://medium.com/successivetech/firebase-push-notification-in-react-native-57973ee7c11d





------------------------------------------------------
## Linking

https://docs.expo.dev/guides/linking/#handling-links-into-your-app

How to implement deep linking in React Native with React Navigation v5 in 2021

https://www.youtube.com/watch?v=s8YaclRknYw


-------------------------------------------------------
## Open Mobile Application From The Browser
https://vhudyma-blog.eu/open-mobile-application-from-the-browser/

https://docs.expo.dev/guides/linking/#deep-links-on-android


------------------------------------------------------------
## FCM push notificatoin
https://github.com/expo/expo/issues/11596
https://docs.expo.dev/push-notifications/sending-notifications-custom/#android
https://docs.expo.dev/push-notifications/receiving-notifications/
https://firebase.google.com/docs/cloud-messaging/concept-options#notifications_and_data_messages
https://firebase.google.com/docs/reference/fcm/rest/v1/projects.messages#AndroidNotification
https://medium.com/geekculture/first-class-push-notifications-for-expo-apps-4bd7bbb9a01a

https://expo.dev/notifications?utm_source=google&utm_medium=cpc&utm_content=performancemax&gclid=CjwKCAjwgqejBhBAEiwAuWHioDTOJJc_lLAFU13PCY9RhE9QUIkwseKRE5ESitdcuhFqRU7TlXI1CRoCB3wQAvD_BwE

------------------------------------------------------------
## IN app update
https://stackoverflow.com/questions/59833787/how-to-implement-android-playstore-in-app-update-with-react-native
https://github.com/SudoPlz/sp-react-native-in-app-updates/blob/v1/Example/App.tsx#L38


----------------------------------------
https://github.com/Gopalakrishnan-V/inshorts-clone/blob/master/src/components/NewsCard.js