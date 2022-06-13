import axios, { AxiosError } from "axios";
import { UserType, TokenType } from "../types/type";

export const signup = (newUser: UserType) => {
  return axios
    .post(`/users`, newUser)
    .then((res: TokenType) => {
      return res.data.token;
    })
    .catch((e: AxiosError<{ error: string }>) => {
      console.log(e);
    });
};

export const signin = (user: UserType) => {
  return axios
    .post("/signin", user)
    .then((res: TokenType) => {
      return res.data.token;
    })
    .catch((e: AxiosError<{ error: string }>) => {
      console.log(e);
    });
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

export const ApiError = (error: AxiosError<{ error: string }>) => {
  console.log(error);
  alert("ログインできませんでした");
};
