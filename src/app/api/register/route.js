import { NextResponse } from "next/server";
import { connectMongoDB } from "@/lib/mogodb";
import Hospital from "@/models/hospitalData";
import bcrypt from "bcrypt";

export async function POST(request) {
  try {
    const {
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
    } = await request.json();

    await connectMongoDB();
    const hashedPassword = await bcrypt.hash(password, 10);
    await Hospital.create({
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
      password: hashedPassword,
      confirmPassword,
    });

    console.log("from api" + hospitalName);

    return NextResponse.json({ result: true });
  } catch (error) {
    return NextResponse.json({ message: "error occured" + error });
  }
}
