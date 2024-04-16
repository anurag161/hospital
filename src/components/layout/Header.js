"use client";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Image from "next/image";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="fixed w-full h-24 shadow-xl bg-white">
      <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
        <Link className="text-red-500 font-bold text-3xl" href={"/"}>
          Hospitaldb +
        </Link>
        <div className="hidden sm:flex">
          <ul className="hidden sm:flex">
            <Link href={"/login"}>
              <li className="ml-10 uppercase hover:border-b text-xl font-bold bg-red-800 text-white rounded-full p-2">
                Login
              </li>
            </Link>
            <Link href={"/register"}>
              <li className="ml-10 uppercase hover:border-b text-xl font-bold bg-black text-white rounded-full p-2">
                Register
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
