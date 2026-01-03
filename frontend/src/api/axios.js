import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5050/api",
  withCredentials: true,
});

// Optional: interceptor (we’ll fully use this next)
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
