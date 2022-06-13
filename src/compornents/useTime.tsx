import { useState } from "react";

export const useTime = () => {
  const [time, setTime] = useState<boolean>(false);

  return { time, setTime };
};

export default useTime;
