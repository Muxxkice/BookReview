import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

import { useAuth } from "./useAuth"

export const useReview = () => {
	const { id } = useParams();
	const { cookies } = useAuth();
	const [review, setReview] = useState([]);
	const [bookList, setBookList] = useState([]);

	useEffect(() => {

		axios
			.get(`/books/${id}`)
			.then((res) => {
				setReview(Array(res.data))
			})
			.catch((e) => console.log(e))
	}, [])

	useEffect(() => {
		axios
			.get(`/public/books`)
			.then((res) => {
				// console.log(res.data)
				setBookList(res.data)
			})
		//publicと差がある理由がわからない
	}, [])

	return ({ review, bookList,setBookList })
}
export default useReview;
