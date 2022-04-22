import axios from "axios";
import { Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

import { useAuth } from "./useAuth"

export const useReview = () => {
	const baseUrl = "https://api-for-missions-and-railways.herokuapp.com"
	const { id } = useParams();
	const { cookies } = useAuth();
	const [review, setReview] = useState([]);

	useEffect(() => {
		const config = {
			headers: {
				Authorization: `Bearer ${cookies.userToken}`
			}
		}
		axios
			.get(`${baseUrl}/books/${id}`, config)
			.then((res) => {
				setReview(Array(res.data))
			})
			.catch((e) => console.log(e))
	}, [])

	return ({ review })
}
export default useReview;
