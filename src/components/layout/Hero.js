"use client";
import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="pt-14 opacity-3">
      <Image src={"/hospital.jpg"} alt={""} width={1800} height={400} />
    </div>
  );
}
