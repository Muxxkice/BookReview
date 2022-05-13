import axios from "axios";

export const signin = (user) => {
  return axios.post("/signin", user);
};

export const getUser = () => {
  return axios.get("/users");
};

//ログインページに飛ぶ様にする
export const signupUser = (newUser) => {
  axios
    .post(`/users`, newUser)
    .then((res) => {
      console.log(res);
      //	navigate("/login")
    })
    .catch(() => alert("ログインできませんでした"));
};

export const changeUserName = (data) =>{
	const article = { "name": data.name }
	axios.put(`/users`, article)
		.then((res) => {
			console.log(res)
		})
}
