import * as React from "react";
import { useTime } from "../compornents/useTime";

export const Alert = (props) => {
  const { time, setTime } = useTime();
	const a = props;

  console.log(props);

  if (time) {
    return (
      <div className="alert_box">
        <p>{a}</p>
				<p>a</p>
      </div>
    );
  }
};

export default Alert;
