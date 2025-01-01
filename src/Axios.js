import axios from "axios";

const instance = axios.create({
  baseURL: "https://accurate-software-integrators-backend.onrender.com",
});

export default instance;
