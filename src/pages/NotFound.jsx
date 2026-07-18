import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center mt-[3%]">
        <h1 className="text-2xl font-bold">صفحه‌ای که دنبال آن بودید پیدا نشد!</h1>
        <br />
        <Link to="/" className="text-sky-500">صفحه اصلی</Link>
      </div>
    </div>
  );
}

export default NotFound;
