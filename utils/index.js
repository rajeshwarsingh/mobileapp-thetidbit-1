import AsyncStorage from '@react-native-async-storage/async-storage';

export const getUserProfile = async () => {
  try {
    let userData = await AsyncStorage.getItem('userDetails');
    userData = JSON.parse(userData)
    return userData
  } catch (e) {
    return {};
  }
} 