import axios from "axios";
import { useParams } from "react-router-dom";

export const deleteReview = (id) => {
	axios
		.delete(`books/${id}`)
		.then((data) => {
			console.log(data)
		})
		.catch(e => console.log(e))
}

export const newbook =(data) => {
	axios
	.post(`/books`, data)
	.then((res) => {
		console.log(res)
	//	navigate(`/detail/${id}`)
	})
}

//書籍一覧取得
export const getBooklist = () => {
	return axios
		.get(`/public/books`)
		.catch((e) => console.log(e))
}

export const getPublicBooklist = () => {
	return axios
		.get(`/books`)
		.catch((e) => console.log(e))
}

export const getReview =(id) =>{
	console.log(id)
	axios
	.get(`/books/${id}`)
	.catch((e) => console.log(e))
	}
