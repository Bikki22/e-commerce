"use client";
import Link from "next/link";
import Navbar from "./Navbar";
import navLinks from "@/constants/navMenu";
import Image from "next/image";
import profileImage from "@/assets/images/profile.jpg";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logoutUser } from "@/redux/auth/authSlice";
import { MdLogout, MdOutlineDarkMode } from "react-icons/md";
import { toggleTheme } from "@/redux/userPrefrence/userPrefrenceSlice";
import { TbBulbFilled } from "react-icons/tb";
import { LIGHT_THEME } from "@/constants/theme";

export default function Header() {
  const { user } = useSelector((state) => state.auth);

  const { theme } = useSelector((state) => state.userPrefrence);

  const dispatch = useDispatch();

  return (
    <header>
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800 dark:text-white shadow">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link href="/" className="flex items-center">
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Logo
            </span>
          </Link>
          <div className="flex items-center lg:order-2">
            <button
              className="px-2 py-1 rounded-md mr-2 cursor-pointer "
              onClick={() => dispatch(toggleTheme())}
            >
              {theme == LIGHT_THEME ? <MdOutlineDarkMode /> : <TbBulbFilled />}
            </button>
            {user ? (
              <div className="flex justify-around items-center gap-2">
                <button className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600">
                  <Image
                    src={profileImage}
                    width={32}
                    height={32}
                    className="w-8 h-8 rounded-full bg-cover"
                    alt="profile image"
                  />
                </button>
                <button
                  onClick={() => dispatch(logoutUser())}
                  className="bg-slate-700 text-white px-2 py-1 cursor-pointer"
                >
                  <MdLogout />
                </button>
              </div>
            ) : (
              <Link
                href="/login"
                className="text-gray-800 dark:text-white hover:bg-cyan-500 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800 bg-cyan-400"
              >
                Log in
              </Link>
            )}
          </div>
          <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1">
            {navLinks.map((menu, index) =>
              user || !menu.isAuth ? <Navbar key={index} menu={menu} /> : null
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
