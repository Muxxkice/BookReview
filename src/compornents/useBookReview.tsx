import { useState } from "react";
import { setDefaultHeader } from "../api";
import { getReviewMore } from "../api/bookApi";

export const useBookReview = () => {
  const [isEnd, setIsEnd] = useState<boolean>(false);
  const [offset, setOffset] = useState<number>(0);
  const [data, setData] = useState([]);

  const fetchMore = async () => {
    const bookReview = await getReviewMore(offset);
		//console.log(bookReview)
    setData([...data, ...bookReview.data]);
    setOffset( offset + bookReview.data.length);
    if (bookReview.data.length < 10) {
      setIsEnd(true);
    }
  };

  return { isEnd, offset, fetchMore, data };
};
export default useBookReview;
