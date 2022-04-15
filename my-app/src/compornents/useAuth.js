import {
	Link
	, useNavigate
} from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react"
import { useCookies } from "react-cookie";

export const useAuth = () => {
	const baseUrl = "https://api-for-missions-and-railways.herokuapp.com"
	const navigate = useNavigate()
	const [cookies, setCookie, removeCookie] = useCookies();


	const onSubmitLogin = (data) => {
		const user = data;
		axios
			.post(`${baseUrl}/signin`, user)
			.then((res) => {
				console.log(res.data.token)
				setCookie("userToken", res.data.token)
				navigate("/")
			})
			.catch(() => alert('ログインできませんでした'))
	}

	const deleteToken = () => {
		console.log('delete')
		removeCookie("userToken")
		navigate("/login")
	}

	const [userName, setUserName] = useState()
	const config = {
		headers: {
			Authorization: `Bearer ${cookies.userToken}`
		}
	}
	axios
		.get(`${baseUrl}/users`, config)
		.then((data) => setUserName(data.data.name))

	return ({ onSubmitLogin, cookies, deleteToken, userName })

}

export default useAuth;
