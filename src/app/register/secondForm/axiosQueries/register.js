import axios from "axios";

export async function registerQuery(user) {
  return axios.post('http://localhost:2000/api/auth/register', user)
    .then((res) => res)
    .catch((err) => err)
}