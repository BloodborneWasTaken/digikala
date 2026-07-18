import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function Comments() {
  return (
    <div className="flex flex-col rounded-[10px] w-[60vw] h-[60vh] border-2 border-gray-200">
      <br />
      <h1 className="font-bold px-5 ">دیدگاه‌ها و پرسش‌ها</h1>
      <br />
      <br />
      <ul className="flex gap-10 border-b px-5 border-gray-200 h-10 text-gray-500 w-full">
        <NavLink
          to="1"
          className="in transition-all duration-100 rounded-[3px] cursor-pointer"
        >
          در انتظار دیدگاه
        </NavLink>
        <NavLink
          to="2"
          className="in transition-all duration-100 rounded-[3px] cursor-pointer"
        >
          دیدگاه‌های من
        </NavLink>
        <NavLink
          to="3"
          className="in transition-all duration-100 rounded-[3px] cursor-pointer"
        >
          پرسش‌های من
        </NavLink>
      </ul>
      <Outlet />
    </div>
  );
}

export default Comments;
