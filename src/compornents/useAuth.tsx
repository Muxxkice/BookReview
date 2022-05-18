
import { useState, useEffect } from "react"
import { useCookies } from "react-cookie";
import { signin, getUser } from "../api/userApi";
import { setDefaultHeader } from "../api";

export const useAuth = (props) => {
	const [cookies, setCookie, removeCookie] = useCookies();
	const [userName, setUserName] = useState() //ユーザー名
	const [IsAuth, setIsAuth] = useState(false) //ログイン判定

	// cookiesが更新されたらログイン判定
	//ログイン状態で/loginにいると/に飛ぶ
	useEffect(() => {
		setDefaultHeader({ Authorization: `Bearer ${cookies.userToken}` })
		setIsAuth(!!cookies.userToken);
		console.log('cookiesが更新された')
	}, [cookies])

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


	const onSubmitLogin = async (data) => {
		const user = data;
		const res = await signin(user)
		return setCookie("userToken", res.data.token);
	}

	const deleteToken = () => {
		console.log('delete')
		removeCookie("userToken")
	}

	return (
		{ onSubmitLogin, cookies, deleteToken, userName, IsAuth })

}

export default useAuth;
