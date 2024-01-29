import axios from "axios";

const rectUrl = import.meta.env.VITE_URL;
const apiClient = axios.create({
  baseURL: rectUrl + "api/teachers",
  headers: {
    common: {
      "Content-Type": "multipart/form-data",
    },
  },
});
function setToken(newToken) {
  apiClient.defaults.headers.common["Authorization"] = `Bearer ${newToken}`;
}

export default {
  setToken,
};
