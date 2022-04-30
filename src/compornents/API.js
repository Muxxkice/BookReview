import axios from "axios";

import useAuth from "./useAuth";
import Loading from "./Loading";

export const Api = () => {
	axios.defaults.baseURL = 'https://api-for-missions-and-railways.herokuapp.com';
	// axios.defaults.headers.common['Authorization'] = { userName };
	// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';


	const signin = (user) => {
		return axios
			.post('/signin', user)
	}
	const getUser = () => {
		axios
			.get('/users')
	}


		return (
			<useAuth signin={signin} getUser={getUser} />
		)


}
export default Api();
