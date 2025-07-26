"use client";
import { register } from "@/api/auth";
import React from "react";
import { useForm } from "react-hook-form";

const RegisterPage = () => {
  const { handleSubmit } = useForm();

  const onSubmit = async () => {
    await register();
  };

  return (
    <div>
      <h1>This is register RegisterPage</h1>

      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="">Fullname</label>
          <input type="text" placeholder="Enter your full name" />
        </div>
        <div>
          <label htmlFor="">username</label>
          <input type="text" placeholder="Enter your username" />
        </div>
        <div>
          <label htmlFor="">email</label>
          <input type="text" placeholder="Enter your email" />
        </div>
        <div>
          <label htmlFor="">password</label>
          <input type="text" placeholder="Enter your password" />
        </div>
        <div>
          <label htmlFor="">confirm password</label>
          <input type="text" placeholder="Enter confirm password" />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default RegisterPage;
