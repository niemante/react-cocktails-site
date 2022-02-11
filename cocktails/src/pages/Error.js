import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="error-page section">
      <div className="error-container">
        <h1>Oops! It's a dead ends. Smeagol will show you way back</h1>
        <Link to="/" className="btn btn-primary">
          Prrreciousss homssy linksss
        </Link>
      </div>
    </section>
  );
};

export default Error;
