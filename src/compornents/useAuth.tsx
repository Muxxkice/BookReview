import { useState, useEffect } from "react";
//import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

import { signin, getUser, signup } from "../api/userApi";
import { setDefaultHeader } from "../api";
import { UserType, TokenType } from "../types/type";

export const useAuth = () => {
  const [cookies, setCookie, removeCookie] = useCookies();
  const [userName, setUserName] = useState<string>("gest"); //ユーザー名
  const [IsAuth, setIsAuth] = useState<boolean>(false); //ログイン判定
  const [isToken, setIsToken] = useState<boolean>(false); //トークン

  //ネットワークエラーでユーザートークンが取れてない場合にもtrueになってる

  useEffect(() => {
    setDefaultHeader({ Authorization: `Bearer ${cookies.userToken}` });
    setIsAuth(!!cookies.userToken);
    setIsToken(true);
    console.log("cookiesが更新された");
  }, [cookies]);

  useEffect(() => {
    (async () => {
      if (IsAuth) {
        const res = await getUser();
        setUserName(res.data.name);
        return;
      }
      // setUserName("");
    })();
  }, [IsAuth]);

  const signupUser = async (newUser: UserType) => {
    const res = await signup(newUser);
    if (res != null) {
      return setCookie("userToken", res);
    }
  };

  const onSubmitLogin = async (user: UserType) => {
    console.log("onSubmitLogin");
    const res = await signin(user);
    if (res != null) {
      return setCookie("userToken", res);
    }
  };

  const deleteToken = () => {
    console.log("delete");
    removeCookie("userToken");
  };

  return {
    onSubmitLogin,
    signupUser,
    cookies,
    deleteToken,
    userName,
    IsAuth,
    setUserName,
    isToken,
  };
};

export default useAuth;
