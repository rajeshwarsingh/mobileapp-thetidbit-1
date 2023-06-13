import axios from "axios";
import config from '../config';
const { apiUrl } = config;
import { getUserProfile } from '../utils/index';

export const getNews = async () => {
  try {
    const source = axios.CancelToken.source();
    const url = `${apiUrl}/news`;
    let profile = await getUserProfile();
    const headers = { "mobile": profile?.mobile }

    const response = await axios.get(url, { cancelToken: source.token, headers });
    return response.data;
  } catch (error) {
    if (axios.isCancel(error)) {
      console.log('Data fetching cancelled');
    } else {
      // Handle error
    }
  }
};

export const getBreakingNews = async () => {
  try {
    const source = axios.CancelToken.source();
    const url = `${apiUrl}/news-breaking`;
    let profile = await getUserProfile();
    const headers = { "mobile": profile?.mobile }

    const response = await axios.get(url, { cancelToken: source.token, headers });
    return response.data;
  } catch (error) {
    if (axios.isCancel(error)) {
      console.log('Data fetching cancelled');
    } else {
      // Handle error
    }
  }
};

export const getNewsApi = async (home,prefNews) => {
  try {
    const source = axios.CancelToken.source();

    let profile = await getUserProfile();
    let url;
    url = `${apiUrl}/news-api?prefNews=${profile.prefNews}&prefLanguage=${profile.prefLanguage}`;
    if(home){
      url = `${apiUrl}/news-api?prefNews=${profile.prefNews}&prefLanguage=${profile.prefLanguage}&home=true`;
    }else if(prefNews){
      url = `${apiUrl}/news-api?prefNews=${prefNews}&prefLanguage=${profile.prefLanguage}`;
    }else{
      
    }
    
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log('Error in getNewsApi',error)
  }
};

export const getHealth = async () => {
  try {
    const source = axios.CancelToken.source();
    const url = `${apiUrl}/news-health`;
    let profile = await getUserProfile();
    const headers = { "mobile": profile?.mobile }

    const response = await axios.get(url, { cancelToken: source.token, headers });
    return response.data;
  } catch (error) {
    if (axios.isCancel(error)) {
      console.log('Data fetching cancelled');
    } else {
      // Handle error
    }
  }
};

export const getEntertainment = async () => {
  try {
    const source = axios.CancelToken.source();
    const url = `${apiUrl}/news-entertainment`;
    let profile = await getUserProfile();
    const headers = { "mobile": profile?.mobile }

    const response = await axios.get(url, { cancelToken: source.token, headers });
    return response.data;
  } catch (error) {
    if (axios.isCancel(error)) {
      console.log('Data fetching cancelled');
    } else {
      // Handle error
    }
  }
};

export const getTechnology = async () => {
  try {
    const source = axios.CancelToken.source();
    const url = `${apiUrl}/news-technology`;
    let profile = await getUserProfile();
    const headers = { "mobile": profile?.mobile }

    const response = await axios.get(url, { cancelToken: source.token, headers });
    return response.data;
  } catch (error) {
    if (axios.isCancel(error)) {
      console.log('Data fetching cancelled');
    } else {
      // Handle error
    }
  }
};

export const getBusiness = async () => {
  try {
    const source = axios.CancelToken.source();
    const url = `${apiUrl}/news-business`;
    let profile = await getUserProfile();
    const headers = { "mobile": profile?.mobile }

    const response = await axios.get(url, { cancelToken: source.token, headers });
    return response.data;
  } catch (error) {
    if (axios.isCancel(error)) {
      console.log('Data fetching cancelled');
    } else {
      // Handle error
    }
  }
};

export const saveExpoPushToken = async (token) => {
  try {
    const source = axios.CancelToken.source();
    const url = `${apiUrl}/save-expo-push-token?token=${token}`;
    let profile = await getUserProfile();
    const headers = { "mobile": profile?.mobile }

    const response = await axios.get(url, { cancelToken: source.token, headers });
    return response.data;
  } catch (error) {
    if (axios.isCancel(error)) {
      console.log('Data fetching cancelled');
    } else {
      // Handle error
    }
  }
};

export const saveUser = async (data) => {
  const url = `${apiUrl}/users`;
  const response = await axios.post(url, data);
  return response.data;
};
export const updateUser = async (data) => {
  try{
    const url = `${apiUrl}/users`;
  const response = await axios.put(url, data);
  return response.data;
  }catch(e){
    console.log("@@@@@@@@@@@@@@@@update user:",e,`${apiUrl}/users`,data)
  }
  
};

export const getUser = async ({ mobile }) => {
  const source = axios.CancelToken.source();
  const url = `${apiUrl}/saveUser?mobile=${mobile}`;
  let profile = await getUserProfile();
  const headers = { "mobile": profile?.mobile }
  const response = await axios.get(url, {
    cancelToken: source.token,
    headers
  });

  return response.data;
};


export const updateUserPrefLang = async (data) => {
  const source = axios.CancelToken.source();
  const url = `${apiUrl}/users`;
  const response = await axios.put(url, data, {
    cancelToken: source.token,
  });

  return response.data;
};

export const updateUserFavNews = async (data) => {
  const source = axios.CancelToken.source();
  const url = `${apiUrl}/users`;
  const response = await axios.put(url, data, {
    cancelToken: source.token
  });

  return response.data;
};

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