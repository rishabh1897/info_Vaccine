import countapi from "countapi-js";
import { useEffect, useState } from "react";

export default function Api() {
  const [views, setViews] = useState(0);
  useEffect(() => {
    countapi.visits().then((result) => {
      console.log(result.value);
      setViews(result.value);
    });
  }, []);
  return (
    <h4 style={{ color: "white", fontSize: "small", textAlign: "left" }}>
      {views}{" "}
    </h4>
  );
}
