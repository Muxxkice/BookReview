import axios from "axios";
import { useNavigate } from "react-router-dom";

//ログインページに飛ぶ様にする
export const signupUser =(newUser) => {
  // const navigate = useNavigate();
  axios
    .post(`/users`, newUser)
    .then((res) => {
      console.log(res.statusText);
      return <string>res.statusText;
      // navigate("/login");
    })
    .catch(() => alert("ログインできませんでした"));
};

export const signin = (user) => {
  return axios.post("/signin", user);
};

export const getUser = () => {
  return axios.get("/users");
};

export const changeUserName = (data) => {
  const article = { name: data.name };
  axios.put(`/users`, article).then((res) => {
    console.log(res);
  });
};
