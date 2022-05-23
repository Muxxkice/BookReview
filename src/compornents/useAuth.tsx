import { useState, useEffect } from "react";
//import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

import { signin, getUser, signup } from "../api/userApi";
import { setDefaultHeader } from "../api";

export const useAuth = () => {
  const [cookies, setCookie, removeCookie] = useCookies();
  const [userName, setUserName] = useState(); //ユーザー名
  const [IsAuth, setIsAuth] = useState(false); //ログイン判定
  const [test, setTest] = useState(false);

  // cookiesが更新されたらログイン判定
  //ログイン状態で/loginにいると/に飛ぶ
  useEffect(() => {
    setDefaultHeader({ Authorization: `Bearer ${cookies.userToken}` });
    setIsAuth(!!cookies.userToken);
    setTest(true);
    console.log("cookiesが更新された");
  }, [cookies]);

  useEffect(() => {
    (async () => {
      if (IsAuth) {
        const res = await getUser();
        setUserName(res.data.name);
        return;
      }
      setUserName(null);
    })();
  }, [IsAuth]);

  const onSubmitLogin = async (user) => {
    const res = await signin(user);
    return setCookie("userToken", res.data.token);
  };

  const signupUser = async (newUser) => {
    const res = await signup(newUser);
    console.log(res.data.token);
    return setCookie("userToken", res.data.token);

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
    test,
  };
};

export default useAuth;
