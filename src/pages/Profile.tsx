import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuth } from "../compornents/useAuth";
import { changeUserName } from "../api/userApi";
import { UserType } from "../types/type";

export const Profile = () => {
  const { userName, setUserName } = useAuth();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data: UserType) => {
    const res = await changeUserName(data);
    if (res) {
      setUserName(res.data.name);
    }
  };

  return (
    <>
      <div className="review_container">
        <h1>ユーザー情報編集</h1>
        <p>現在の名前</p>
        <p>{userName}</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <p>新しい名前</p>
          <input
            placeholder={userName}
            {...register("name", { required: true })}
          />
          {errors.name && <span>必須項目です</span>}
          <br />
          <button>変更</button>
        </form>
        <Link to="/">ホームへ戻る</Link>
      </div>
    </>
  );
};
export default Profile;
