import axios from "axios";

export const signupUser = (newUser) => {
  return axios
    .post(`/users`, newUser)
    .then((res) => {
      console.log(res.statusText);
      return <string>res.statusText;
    })
    .catch(() => alert("ログインできませんでした"));
};

export const signin = (user) => {
  return axios.post("/signin", user);
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
      // .then((res) => {
      //   console.log(res)
      // })
      .catch(() => alert("変更できませんでした"))
  );
};
