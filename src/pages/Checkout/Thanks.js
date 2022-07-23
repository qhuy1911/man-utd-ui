import React from "react";
import { Link } from "react-router-dom";

function Thanks() {
  return (
    <div>
      Thank you for ordering <Link to={"/shop"}>Continue Shipping</Link>
    </div>
  );
}

export default Thanks;
