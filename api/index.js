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