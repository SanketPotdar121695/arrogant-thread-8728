/** @format */

import axios from "axios";
import React, { useState } from "react";

const obj = {
  firstname: "",
  lastname:"",
  email: "",
  password: ""

  
};

export const Signup = () => {
  const [formData, setFormData] = useState(obj);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(name,value)
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    axios
      .post(`https://electro-emporium.cyclic.app/user/auth/register`, formData)
      .then((res) => console.log(res.data))
      .catch((err)=>console.log(err.response.data))

    

    console.log(formData);
    setFormData(obj);
  };

  return (
    <div>
      <h1>Signup page</h1>
      <form onSubmit={handleSubmit}>
      First name:{" "}
        <input
          name="firstname"
          onChange={handleChange}
          value={formData.firstname}
          type="text"
          placeholder="enter your firstName"
        />
        <br />
        <br />
        Last name:{" "}
        <input
          name="lastname"
          onChange={handleChange}
          value={formData.lastname}
          type="text"
          placeholder="enter your LastName"
        />
        <br /><br />
        Email:{" "}
        <input
          name="email"
          onChange={handleChange}
          value={formData.email}
          type="text"
          placeholder="enter your email"
        />
        <br />
        <br />
        Password:{" "}
        <input
          name="password"
          onChange={handleChange}
          value={formData.password}
          type="text"
          placeholder="enter your password"
        />
        <br />
        <br />
        
        <br />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};
