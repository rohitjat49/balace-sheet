import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function Home() {
  return (
    <div>
        <Navbar />
      <Link to="/">
        <p className="display-6"> GO TO Balance </p>
      </Link>
      <h1>HELLO HOME </h1>
    </div>
  );
}

export default Home;
