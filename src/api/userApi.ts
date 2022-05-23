import axios from "axios";

export const signup = (newUser) => {
  return axios
    .post(`/users`, newUser)
    .catch(() => alert("登録できませんでした"));
};

export const signin = (user) => {
  return axios
  .post("/signin", user)
  .catch(() => alert("ログインできませんでした"));
};

export const getUser = () => {
  return axios.get("/users");
};

type UserType ={
  name:string;
}
export const changeUserName = (data:UserType) => {
  const article = { name: data.name };
  return (
    axios
      .put(`/users`, article)
      .catch(() => alert("変更できませんでした"))
  );
};
