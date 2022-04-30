import {
	Link
	, useNavigate
} from "react-router-dom";


import { useState, useEffect } from "react"
import { useCookies } from "react-cookie";
import axios from "axios";

const signin = (user) => {
	return axios
		.post('/signin', user)
}
const getUser = () => {
	return axios
		.get('/users')
}


export const useAuth = (props) => {
	const [cookies, setCookie, removeCookie] = useCookies();
	const [userName, setUserName] = useState() //ユーザー名
	const [IsAuth, setIsAuth] = useState(false) //ログイン判定

	const config = {
		headers: {
			Authorization: `Bearer ${cookies.userToken}`
		}
	}

	// cookiesが更新されたらログイン判定
	//ログイン状態で/loginにいると/に飛ぶ
	useEffect(() => {
		// setIsAuth(cookies.userToken);
		setIsAuth(!!cookies.userToken);
		axios.defaults.headers.common['Authorization'] = cookies.userToken;
		console.log('cookiesが更新された')
	}, [cookies])

	useEffect(() => {
		console.log('IsAuthが更新された' + IsAuth)
		axios
			.get('/users', config)
			.then((data) => setUserName(data.data.name))
	}, [IsAuth])

	// ログインボタンが押されたら発火 data
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
