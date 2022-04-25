import axios from "axios";

import useAuth from "./useAuth";

// 親：コンポーネントを利用する側
export const API = () => {
	axios.defaults.baseURL = 'https://api-for-missions-and-railways.herokuapp.com';
	// axios.defaults.headers.common['Authorization'] = { userName };
	// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

	// const config = {
	// 	headers: {
	// 		Authorization: `Bearer ${cookies.userToken}`
	// 	}
	// }

	const signin = (user) => {
		return axios
			.post('/signin', user)
	}

	const getUser = () => {
		axios
			.get('/users'
				// , config
			)
	}

	return (
		<useAuth signin={signin} getUser={getUser} />
	)
}
export default API();
