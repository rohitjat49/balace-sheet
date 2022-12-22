import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import axios from "axios";
import {
  isValidGmail,
  isValidForUserName,
  isValidForMobileNumber,
} from "./validation";

function Login(props) {
  useEffect(() => {
    document.title = "ragister";
  }, []);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");

  const [errname, setErrname] = useState(false);
  const [errEmail, setErrEmail] = useState("");
  const [errMobile, setErrMobile] = useState("");

  const SubmitData = () => {
    if (password.length > 5) {
      axios
        .post("http://127.0.0.1:5000/ragister", {
          name,
          email,
          mobile,
          password,
        })
        .then((res) => {
          console.log(res.data);
          toast.success(res.data.msg);

          setTimeout(() => {
            navigate("/sheet");
          }, 2000);
        })
        .catch((err) => {
          console.log("error from axios in fronted", err);
        });
    } else {
      toast.error("password to badaa rakh");
    }
  };

  return (
    <div className="container">
      <p className="display-3 text-center">Ragister</p>
      <div className="row mt-5 justify-content-center">
        <Toaster />
        <div className="col-md-6 text-center">
          <div className="form-floating mb-3">
            <input
              onChange={(e) => {
                if (isValidForUserName(e.target.value)) {
                  setName(e.target.value);
                  setErrname(false);
                } else {
                  setErrname(true);
                }
              }}
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">Name</label>
            {errname ? <span className="text-danger">invalid Name</span> : null}
          </div>
          <div className="form-floating mb-3">
            <input
              onChange={(e) => {
                if (isValidGmail(e.target.value)) {
                  setEmail(e.target.value);
                  setErrEmail(false);
                } else {
                  setErrEmail(true);
                }
              }}
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">Email address</label>
            {errEmail ? (
              <span className="text-danger">invalid email</span>
            ) : null}
          </div>

          <div className="form-floating mb-3">
            <input
              onChange={(e) => {
                if (isValidForMobileNumber(e.target.value)) {
                  setMobile(e.target.value);
                  setErrMobile(false);
                } else {
                  setErrMobile(true);
                }
              }}
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">Mobile Number</label>
            {errMobile ? (
              <span className="text-danger">invalid Mobile Number</span>
            ) : null}
          </div>
          <div className="form-floating">
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          {/* <Link to="/login">Login</Link> */}
          <div className="d-grid">
            <button
              onClick={() => SubmitData()}
              className="btn btn-primary mt-5 text-light"
            >
              Ragister
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
