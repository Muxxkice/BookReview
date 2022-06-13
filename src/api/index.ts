import axios from "axios";
axios.defaults.baseURL = "https://api-for-missions-and-railways.herokuapp.com";
// axios.defaults.withCredentials = true;

export const setDefaultHeader = (header: any) => {
  Object.keys(header).forEach(
    (key) => (axios.defaults.headers.common[key] = header[key]),
  );
};
