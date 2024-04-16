"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Register() {
  const [hospitalName, sethospitalName] = useState("");
  const [address, setaddress] = useState("");
  const [city, setcity] = useState("");
  const [state, setstate] = useState("");
  const [pincode, setpincode] = useState("");
  const [registrationDate, setregistrationDate] = useState("");
  const [ambulanceNumber, setambulanceNumber] = useState(0);
  const [email, setemail] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [registrationNumber, setregistrationNumber] = useState("");
  const [emergencyWard, setemergencyWard] = useState("");
  const [registrationPortal, setregistrationPortal] = useState("");
  const [password, setpassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");

  //console.log(registrationPortal);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !hospitalName ||
      !address ||
      !city ||
      !state ||
      !pincode ||
      !registrationDate ||
      !ambulanceNumber ||
      !email ||
      !phoneNumber ||
      !registrationNumber ||
      !emergencyWard ||
      !registrationPortal ||
      !password ||
      !confirmPassword
    ) {
      console.log("all fields are required");
    }

    try {
      const res = await fetch("api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          hospitalName,
          address,
          city,
          state,
          pincode,
          registrationDate,
          ambulanceNumber,
          email,
          phoneNumber,
          registrationNumber,
          emergencyWard,
          registrationPortal,
          password,
          confirmPassword,
        }),
      });

      if (res.ok) {
        console.log("registartion successfull");
      } else {
        console.log("Registartion failed");
      }
    } catch (error) {
      console.log("Error during registartion: ", error);
    }
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/2 bg-gray-200 flex items-center justify-center">
        <Image src={"/mainimage.jpg"} alt={""} width={850} height={1200} />
      </div>
      <div className="w-1/2 bg-white flex items-center justify-center">
        <div className="w-3/4 p-8 shadow-lg">
          <h2 className="text-2xl mb-4">
            <Link href={"/login"} className="hover:text-green-600">
              Login
            </Link>
            {""}/{" "}
            <Link href={"/register"} className="hover:text-green-600">
              Signup
            </Link>
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
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
                <label htmlFor="address" className="block text-gray-700">
                  Address:
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                  onChange={(e) => setaddress(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="city" className="block text-gray-700">
                  City:
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                  onChange={(e) => setcity(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="state" className="block text-gray-700">
                  State:
                </label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                  onChange={(e) => setstate(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="pincode" className="block text-gray-700">
                  Pincode:
                </label>
                <input
                  type="text"
                  id="pincode"
                  name="pincode"
                  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                  onChange={(e) => setpincode(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="registrationDate"
                  className="block text-gray-700"
                >
                  Hospital Registration Date:
                </label>
                <input
                  type="text"
                  id="registrationDate"
                  name="registrationDate"
                  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                  onChange={(e) => setregistrationDate(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="ambulanceNumber"
                  className="block text-gray-700"
                >
                  Number of Ambulance Available:
                </label>
                <input
                  type="text"
                  id="ambulanceNumber"
                  name="ambulanceNumber"
                  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                  onChange={(e) => setambulanceNumber(e.target.value)}
                />
              </div>
            </div>
            <div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700">
                  Email ID:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                  onChange={(e) => setemail(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="phoneNumber" className="block text-gray-700">
                  Phone Number:
                </label>
                <input
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                  onChange={(e) => setphoneNumber(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="registrationNumber"
                  className="block text-gray-700"
                >
                  Hospital Registration Number:
                </label>
                <input
                  type="text"
                  id="registrationNumber"
                  name="registrationNumber"
                  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                  onChange={(e) => setregistrationNumber(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="emergencyWard" className="block text-gray-700">
                  Emergency-Ward Number:
                </label>
                <input
                  type="text"
                  id="emergencyWard"
                  name="emergencyWard"
                  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                  onChange={(e) => setemergencyWard(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="registrationPortal"
                  className="block text-gray-700"
                >
                  Registration Certification Portal:
                </label>
                <div className="mt-2">
                  <input
                    type="file"
                    id="file"
                    name="file"
                    onChange={(e) => setregistrationPortal(e.target.value)}
                  />
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-gray-700">
                  Create Password:
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                  onChange={(e) => setpassword(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="confirmPassword"
                  className="block text-gray-700"
                >
                  Confirm Password:
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                  onChange={(e) => setconfirmPassword(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="mb-6">
            <button
              onClick={handleSubmit}
              type="submit"
              className="w-full bg-green-500 text-white rounded-md py-2 px-4 hover:bg-green-600 focus:outline-none focus:bg-green-600"
            >
              Signup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
