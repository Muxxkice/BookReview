import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import { useAuth } from "../compornents/useAuth";

export const Signup = () => {
  const { signupUser } = useAuth();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    signupUser(data);
  };

  return (
    <div className="flex">
      <section className="top_container">
        <div className="input_box">
          <h2>ユーザー登録</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <p>名前</p>
            <input {...register("name", { required: true })} />
            <span>必須</span>
            {errors.name && <span>必須項目です</span>}
            <p>メールアドレス</p>
            <input {...register("email", { required: true })} />
            <span>必須</span>
            {errors.email && <span>必須項目です</span>}
            <p>パスワード</p>
            <input {...register("password", { required: true })}></input>
            <span>必須</span>
            {errors.password && <span>必須項目です</span>}
            <br />
            <button className="primary_btn">登録</button>
          </form>
          <p>既に登録済みの場合</p>
          <button className="secondary_btn">
            <Link to="/login">ログイン</Link>
          </button>
        </div>
      </section>
    </div>
  );
};
export default Signup;
