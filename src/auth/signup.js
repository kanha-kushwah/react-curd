import React, { useState } from "react";
import { Link, useNavigate, } from "react-router-dom";
import { toast } from "react-toastify";
import { useApiLoader } from "../ApiLoaderContext";
import Loader from "../Loader";
import "./auth.css";
import Banner from "../images/banner.jpg";
import axios from "axios";

function Signup() {
  const { loading, startLoading, stopLoading } = useApiLoader();

  const Navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
    mobile: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      startLoading();
  
      const response = await axios.post("http://localhost:4000/api/auth/signup", formData, {
      
        headers: {
          "Content-Type": "application/json",
        },
      
      });
  
      if (response.status === 201) {
        const responseData = response.data;
      
      if(responseData.message === "User created successfully"){
        Navigate("/login");
        toast('Signup successful!.', { type: 'success' });

      }
      } else {
        toast.error("Signup failed. Please check your credentials.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
    } finally {
      stopLoading();
    }
  };

  const myStyles = {
  background:' linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)',
    fontSize: "16px",
    border: "1px solid black",
    padding: "20px",
    color: "#fff",
  };

  return (
    <div className="containerfluid" style={myStyles}>
      <div className="container py-4">
        {loading && <Loader />}
    
        <div className="row rows1">
          <div className="col-md-6 col-12 bg-white">
            <img src={Banner} alt="banner" width={"100%"} />
          </div>
          <div className="col-md-6 col-12 px-4">
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-3">
                <label htmlFor="email">username</label>
                <input
                  type="username"
                  className="form-control"
                  id="username"
                  name="username"
                  aria-describedby="emailHelp"
                  placeholder="Enter username"
                  value={formData.username}
                  onChange={handleChange}
                />
             
              </div>

              <div className="form-group mb-3">
                <label htmlFor="email">email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  value={formData.email}
                  onChange={handleChange}
                />
               
              </div>

              <div className="form-group mb-3">
                <label htmlFor="email">number</label>
                <input
                  type="number"
                  className="form-control"
                  id="mobile"
                  name="mobile"
                  aria-describedby="emailHelp"
                  placeholder="Enter mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                />
                
              </div>

              <div className="form-group mb-3">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>

              <div className="mt-3">
                <button type="submit" className="btn btn-primary">
                  submit
                </button>
              </div>
            </form>

            <Link  to={"/login"}>
              <button className="mt-3 btn btn-danger">login </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
