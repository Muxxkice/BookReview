import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

import { useAuth } from "./useAuth"
import {
	getReview, getBooklist
} from "../api/bookApi"

export const useReview = () => {
	const { id } = useParams();
	const [review, setReview] = useState([]);
	const [bookList, setBookList] = useState([]);

useEffect(()=>{
( async ()=> {
	const res = await getReview()
		console.log(res)
		setReview(Array(res.data))
})();
},[])

	useEffect(() => {
		(async () => {
			const res = await getBooklist()//認証なし
			setBookList(res.data)
		})();
	}, [])

	return ({ review, bookList, setBookList })
}
export default useReview;
