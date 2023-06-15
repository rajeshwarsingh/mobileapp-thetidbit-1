import axios from "axios";
import config from '../config';
const { apiUrl } = config;
import { getUserProfile } from '../utils/index';

// USER API
export const saveUser = async (data) => {
  const url = `${apiUrl}/users`;
  const response = await axios.post(url, data);
  return response.data;
};

export const updateUser = async (data) => {
  try {
    const url = `${apiUrl}/users`;
    const response = await axios.put(url, data);
    return response.data;
  } catch (e) {
    console.log("Error in api update user:", e)
  }
};

export const getUser = async ({ mobile }) => {
  const source = axios.CancelToken.source();
  const url = `${apiUrl}/users?mobile=${mobile}`;
  let profile = await getUserProfile();
  const headers = { "mobile": profile?.mobile }
  const response = await axios.get(url, {
    cancelToken: source.token,
    headers
  });
  return response.data;
};
// USER API END

// NEWS API START
export const getNewsApi = async (home, prefNews) => {
  try {
    const source = axios.CancelToken.source();
    let profile = await getUserProfile();
    let url;
    url = `${apiUrl}/news-api?prefNews=${profile.prefNews}&prefLanguage=${profile.prefLanguage}`;
    if (home) {
      url = `${apiUrl}/news-api?prefNews=${profile.prefNews}&prefLanguage=${profile.prefLanguage}&home=true`;
    } else if (prefNews) {
      url = `${apiUrl}/news-api?prefNews=${prefNews}&prefLanguage=${profile.prefLanguage}`;
    } else {

    }

    console.log("***********************************", url)
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log('Error in getNewsApi', error)
  }
};
// NEWS API END

// GET VERSION FOR APP UPDATE
export const getAppLatestVersion = async () => {
  try {
    const source = axios.CancelToken.source();
    const url = `${apiUrl}/version`;
    const response = await axios.get(url, { cancelToken: source.token });
    return response.data;
  } catch (error) {
    if (axios.isCancel(error)) {
      console.log('Data fetching cancelled');
    } else {
      // Handle error
    }
  }
};
// END VERSION FOR APPUPDATE
