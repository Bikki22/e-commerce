"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { loginUser } from "@/redux/auth/authActions";
import { useSelector } from "react-redux";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { user, loading, error } = useSelector((state) => state.auth);

  const router = useRouter();

  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    dispatch(loginUser(data));
  };

  useEffect(() => {
    if (user) return router.push("/");

    if (error) toast.error(error);
  }, [user, error]);

  return (
    <div>
      <h1 className="text-2xl text-center font-medium">login Your Account</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="pt-4 flex flex-col justify-center items-start">
          <label htmlFor="email" className="font-semibold">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            className="w-full py-2 px-3 my-3  border-1 outline-none rounded-sm "
            {...register("email", {
              required: "Email is required",
              pattern: {
                value:
                  /^[a-zA-Z0-9]+([._%+-]?[a-zA-Z0-9]+)*@(gmail|yahoo|outlook|hotmail|icloud|protonmail)\.(com|net|org)$/,
                message: "Invalid email address",
              },
            })}
          />
          <p className="text-red-500 text-sm">{errors.email?.message}</p>
        </div>
        <div className="flex flex-col justify-center items-start relative">
          <label htmlFor="password" className="font-semibold">
            Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            placeholder="Password"
            className="w-full py-2 px-3 my-3  border-1 outline-none rounded-sm"
            {...register("password", {
              required: "Password is required",
              min: {
                value: 6,
                message: "Password length must be greater than 6",
              },
            })}
          />
          <button
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-2 top-10 cursor-pointer px-5 py-2"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
          <p className="text-red-500">{errors.password?.message}</p>
        </div>

        <div className="flex justify-center ">
          <button
            type="submit"
            className="w-full text-white bg-gradient-to-r from-blue-600 to-blue-400 border-1 px-5 py-1.5 my-2 cursor-pointer rounded-md "
          >
            {loading ? "Loading..." : "Login"}
          </button>
        </div>
        <div>
          <p>
            Cannot have account ? please
            <Link href={"/register"} className="text-blue-500 font-medium">
              Sign up
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
