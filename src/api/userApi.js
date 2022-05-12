import axios from "axios";

export const signin = (user) => {
	return axios
		.post('/signin', user)
}

export const getUser = () => {
	console.log(axios)
	return axios
		.get('/users')
}
