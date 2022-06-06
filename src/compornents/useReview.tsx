import { useEffect, useState } from "react";

import { useAuth } from "./useAuth";
import { getReview, getBooklist } from "../api/bookApi";

export const useReview = () => {
  const [review, setReview] = useState([]);
  const [bookList, setBookList] = useState([]);
  const { IsAuth } = useAuth();

  useEffect(() => {
    (async () => {
      const res = await getBooklist(IsAuth);
      setBookList(res);
    })();
  }, []);

  return { review, bookList, setBookList, setReview };
};
export default useReview;
