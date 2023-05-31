import axios from "axios";

export const getNews = async () => {
  try {
    const source = axios.CancelToken.source();
    const url = `https://ttb-api-nextjs.vercel.app/api/news`;
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
    const url = `https://ttb-api-nextjs.vercel.app/api/news-breaking`;
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
    const url = `https://ttb-api-nextjs.vercel.app/api/news-health`;
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
    const url = `https://ttb-api-nextjs.vercel.app/api/news-entertainment`;
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
    const url = `https://ttb-api-nextjs.vercel.app/api/news-technology`;
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
    const url = `https://ttb-api-nextjs.vercel.app/api/news-business`;
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
    const url = `https://ttb-api-nextjs.vercel.app/api/save-expo-push-token?token=${token}`;
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