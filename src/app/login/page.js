"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { redirect } from "next/navigation";

export default function LoginPage() {
  const [hospitalName, sethospitalName] = useState("");
  const [emailId, setemailId] = useState("");
  const [password, setpassword] = useState("");
  const [socialAccessCode, setsocialAccessCode] = useState("");

  console.log(hospitalName);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      redirect("/imageCapture");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex h-screen">
      <div className="w-1/2 bg-gray-200 flex items-center justify-center">
        <Image src={"/mainimage.jpg"} alt={""} width={850} height={1200} />
      </div>
      <div className="w-1/2 bg-white flex items-center justify-center">
        <div className="w-3/4 shadow-lg">
          <h2 className="text-2xl mb-4">
            <Link href={"/login"} className="hover:text-green-600">
              Login
            </Link>
            {""}/{" "}
            <Link href={"/register"} className="hover:text-green-600">
              Signup
            </Link>
          </h2>
          <form>
            <div className="mb-4">
              <label htmlFor="hospitalName" className="block text-gray-700">
                Hospital Name:
              </label>
              <input
                type="text"
                id="hospitalName"
                name="hospitalName"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                onChange={(e) => sethospitalName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">
                Email ID:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                onChange={(e) => setemailId(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700">
                Password:
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                onChange={(e) => setpassword(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label htmlFor="socialAccessCode" className="block text-gray-700">
                Social Access Code:
              </label>
              <input
                type="text"
                id="socialAccessCode"
                name="socialAccessCode"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                onChange={(e) => setsocialAccessCode(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-500 text-white rounded-md py-2 px-4 hover:bg-green-600 focus:outline-none focus:bg-green-600"
              onClick={handleSubmit}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
