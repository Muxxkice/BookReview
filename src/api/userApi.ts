import axios from "axios";

type UserType = {
  name: string;
  email: string;
  password: string;
}

export const signup = (newUser: UserType) => {
  return axios
    .post(`/users`, newUser)
    .catch(() => alert("登録できませんでした"));
};

export const signin = (user: UserType) => {
  return axios
    .post("/signin", user)
    .catch(() => alert("ログインできませんでした"));
};

export const getUser = () => {
  return axios.get("/users");
};


export const changeUserName = (data: UserType) => {
  const article = { name: data.name };
  return axios
    .put(`/users`, article)
    .catch(() => alert("変更できませんでした"));
};
