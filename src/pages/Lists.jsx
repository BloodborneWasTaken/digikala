import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function Lists() {
  return (
    <div className="flex flex-col rounded-[10px] w-[60vw] h-[60vh] border-2 border-gray-200">
      <br />
      <h1 className="font-bold px-5 ">لیست‌ها</h1>
      <br />
      <br />
      <ul className="flex gap-10 border-b px-5 border-gray-200 h-10 text-gray-500 w-full">
        <NavLink to="1" className="in cursor-pointer transition-all duration-100 rounded-[3px]">
          لیست علاقه‌مندی
        </NavLink>
        <NavLink to="2" className="in cursor-pointer transition-all duration-100 rounded-[3px]">
          لیست‌های دیگر
        </NavLink>
        <NavLink to="3" className="in cursor-pointer transition-all duration-100 rounded-[3px]">
          اطلاع‌رسانی‌ها
        </NavLink>
      </ul>
      <Outlet />
    </div>
  );
}

export default Lists;
