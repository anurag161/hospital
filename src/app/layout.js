import { Comfortaa } from "next/font/google";
import "./globals.css";

const comfortaa = Comfortaa({ subsets: ["latin"] });

export const metadata = {
  title: "Hospital Database",
  description: "A world where you can find your treatment",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={comfortaa.className}>{children}</body>
    </html>
  );
}
