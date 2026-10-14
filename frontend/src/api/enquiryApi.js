import axios from "axios";

const API_URL = `${import.meta.env.VITE_API_BASE_URL}/api/enquiries`;

console.log("api url", API_URL);

const apiClient = axios.create({
  baseURL: API_URL,
  headers: { "Content-Type": "application/json" },
});

export const fetchEnquiries = async () => {
  const response = await apiClient.get("/");
  return response.data;
};

export const fetchEnquiryById = async (id) => {
  const response = await apiClient.get(`/${id}`);
  return response.data;
};

export const createEnquiry = async (enquiryData) => {
  const response = await apiClient.post("/", enquiryData);
  return response.data;
};

export const updateEnquiry = async (id, enquiryData) => {
  const response = await apiClient.put(`/${id}`, enquiryData);
  return response.data;
};

export const deleteEnquiry = async (id) => {
  const response = await apiClient.delete(`/${id}`);
  return response.data;
};
