import React from "react";
import { Link } from "react-router-dom";
import NoResult from "../images/no-results.jpg";

const Notfound = () => {
  return (
    <div className="not-found">
      <img src={NoResult} alt=""></img>
      <button className="back-home">
        <Link to="/">Back to Home</Link>
      </button>
    </div>
  );
};

export default Notfound;
