import axios from "axios";

const URL = "http://localhost:5001/jobs";

export const getJobs = () => {
  return axios.get(URL);
};
export const postJob = (formData) => {
  return axios.post(URL);
};
