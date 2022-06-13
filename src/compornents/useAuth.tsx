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
  // const [isHeader, setIsHeader] = useState<boolean>(false);

  //ネットワークエラーでユーザートークンが取れてない場合にもtrueになってる

  useEffect(() => {
    setDefaultHeader({ Authorization: `Bearer ${cookies.userToken}` });
    setIsAuth(!!cookies.userToken);
    // setIsHeader(true);
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
    console.log(res);
    return setCookie("userToken", res);
  };

  const onSubmitLogin = async (user: UserType) => {
    const res = await signin(user);
    console.log(res);
    return setCookie("userToken", res);
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
    // isHeader,
  };
};

export default useAuth;
