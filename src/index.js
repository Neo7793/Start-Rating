import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import StarRating from "./StarRating";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StarRating className="star" />
    <StarRating className="star" color="red" size={24} maxRating={10} />
    <StarRating
      className="star"
      message={["Awful", "Bad", "OKay", "Good", "Great"]}
      maxRating={5}
      size={36}
    />
  </React.StrictMode>
);
