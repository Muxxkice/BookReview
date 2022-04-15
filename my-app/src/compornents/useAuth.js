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
	// const { register, handleSubmit } = useForm();
	// const [userToken, setUserToken] = useState();
	const [cookies, setCookie, removeCookie] = useCookies();

	const onSubmitLogin = (data) => {
		const user = data;
		axios
			.post(`${baseUrl}/signin`, user)
			.then((res) => {
				console.log(res.data.token)
				// setUserToken(res.data.token)
				setCookie("userToken", res.data.token)
				// alert('ログインに成功しました')
				navigate("/")
			})
			.catch(() => alert('ログインできませんでした'))
	}

	const deleteToken = () => {
		console.log('delete')
		removeCookie("userToken")
	}
	return ({ onSubmitLogin, cookies,deleteToken})

}

export default useAuth;
