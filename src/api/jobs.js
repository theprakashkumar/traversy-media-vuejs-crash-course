import axios from "axios";

export const getJobs = () => {
  return axios.get("http://localhost:5001/jobs");
};
