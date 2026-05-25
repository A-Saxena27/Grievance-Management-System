import axios from "axios";

const API = axios.create({
  baseURL: "https://grievance-management-system-np4q.onrender.com/api",
});

export default API;
