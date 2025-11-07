import React, { useState } from "react";
import type { LoginForm } from "../Types/types";

const Form = () => {
  const [formData, setFormData] = useState<LoginForm>({
    email: "",
    password: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setFormData({...formData,[e.target.name]: e.target.value}); 
  };
   
  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    console.log("Login Submitted:", formData);
     setFormData({
        email:"",
        password:""
     })
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <label>Email:</label>
      <input
        type="email"
        name="email"
        required
        value={formData.email}
        onChange={handleChange}
      />

      <label>Password:</label>
      <input
        type="password"
        name="password"
        required
        value={formData.password}
        onChange={handleChange}
      />

      <button type="submit">Login</button>
    </form>
  );
};

export default Form;
