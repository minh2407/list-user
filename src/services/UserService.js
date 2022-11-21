import axios from "./customize-axios";

const fetchAllUser = (page) => {
  return axios.get(`/api/users?page=${page}`);
};

const postCreateUser = (name, job) => {
  //return base URL
  return axios.post("/api/users", { name: name, job: job });
};

export { fetchAllUser, postCreateUser };
