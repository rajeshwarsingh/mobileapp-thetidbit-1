import axios from "axios";
import config from '../config';
const {apiUrl} = config;

export const getNews = async () => {
  try {
    const source = axios.CancelToken.source();
    const url = `${apiUrl}/news`;
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

export const getBreakingNews = async () => {
  try {
    const source = axios.CancelToken.source();
    const url = `${apiUrl}/news-breaking`;
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

export const getHealth = async () => {
  try {
    const source = axios.CancelToken.source();
    const url = `${apiUrl}/news-health`;
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

export const getEntertainment = async () => {
  try {
    const source = axios.CancelToken.source();
    const url = `${apiUrl}/news-entertainment`;
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

export const getTechnology = async () => {
  try {
    const source = axios.CancelToken.source();
    const url = `${apiUrl}/news-technology`;
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

export const getBusiness = async () => {
  try {
    const source = axios.CancelToken.source();
    const url = `${apiUrl}/news-business`;
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

export const saveExpoPushToken = async (token) => {
  try {
    const source = axios.CancelToken.source();
    const url = `${apiUrl}/save-expo-push-token?token=${token}`;
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

export const saveUser = async (data) => {
  // return {}
  const source = axios.CancelToken.source();
    const url = `${apiUrl}/saveUser`;
    console.log("@@@@@@@@@@@@@@@@@",url)
    const response = await axios.post(url, data,{
      cancelToken: source.token,
    });
    
    return response.data;
};

export const getUser = async ({ mobile }) => {

  // return null
  return {
    "_id": "647e1f4ad8f6f42c13a15e14",
    "name": "Rajan",
    "mobile": "8983712448",
    "email": "rajan23024@gmail.com",
    "createdAt": "2023-06-05T17:45:46.089Z",
    "__v": 0,
    "prefLanguage": "English"
}
  // return {}
  const source = axios.CancelToken.source();
  const url = `${apiUrl}/saveUser?mobile=${mobile}`;
  
  const response = await axios.get(url, {
    cancelToken: source.token,
  });

  return response.data;
};


export const updateUserPrefLang = async (data) => {
  const source = axios.CancelToken.source();
    const url = `${apiUrl}/prefLanguage`;
    console.log("check saveuser api*************", url, data)
    const response = await axios.post(url, data,{
      cancelToken: source.token,
    });
    
    return response.data;
};