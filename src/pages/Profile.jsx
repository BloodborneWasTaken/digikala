import React from "react";
import Navbar from "../components/Navbar";
import { NavLink, Outlet } from "react-router-dom";

function Profile() {
  return (
    <div>
      <Navbar />
      <div className="flex pt-[3%] gap-8">
        <div className="flex flex-col rounded-[10px] w-[23vw] h-[85vh] mr-[10%] border-2 border-gray-200">
          <div className="flex gap-[35%] w-full h-15 pr-4 pt-2  ">
            <p className="font-bold">
              زهرا مقصودی فر
              <br />
              <p className="text-gray-200">۰۹۳۰۴۱۴۵۷۰۴</p>
            </p>
            <p className="font-bold text-sky-500 cursor-pointer">{"->"}</p>
          </div>
          <br />
          <div className="flex gap-[35%] w-full h-15 pr-4 pt-2  ">
            <p className="font-bold">
              طلا و نقره دیجیتال <br />
              <p className="text-sky-500 cursor-pointer">خرید و فروش</p>
            </p>
            <p className="font-bold">- ریال</p>
          </div>
          <br />
          <div className="flex gap-[35%] w-full h-15 pr-4 pt-2  ">
            <p className="font-bold">
              کیف پول <br />
              <p className="text-sky-500 cursor-pointer">افزایش موجودی</p>
            </p>
            <p className="font-light">۶,۵۰۹ تومان</p>
          </div>
          <br />
          <div className="flex gap-[35%] w-full h-15 pr-4 pt-2  ">
            <p className="font-bold">
              دیجی‌کوین <br />
              <p className="text-sky-500 cursor-pointer">مشاهده ماموریت‌ها</p>
            </p>
            <p className="font-light">۰ تومان</p>
          </div>
          <hr className="text-gray-200" />
          <NavLink
            to="Activity"
            className="left pr-4 pt-2 hover:bg-gray-100 w-full h-10 transition-all duration-100 rounded-[3px] "
          >
            خلاصه فعالیت ‌ها
          </NavLink>
          <hr className="text-gray-200" />
          <NavLink
            to="Plus"
            className="left pr-4 pt-2 hover:bg-gray-100 w-full h-10 transition-all duration-100 rounded-[3px] "
          >
            پلاس
          </NavLink>
          <hr className="text-gray-200" />
          <NavLink
            to="orders"
            className="left pr-4 pt-2 hover:bg-gray-100 w-full h-10 transition-all duration-100 rounded-[3px] "
          >
            سفارش‌ها
          </NavLink>
          <hr className="text-gray-200" />
          <NavLink
            to="Lists"
            className="left pr-4 pt-2 hover:bg-gray-100 w-full h-10 transition-all duration-100 rounded-[3px] "
          >
            لیست‌های من
          </NavLink>
          <hr className="text-gray-200" />
          <NavLink
            to="Comments"
            className="left pr-4 pt-2 hover:bg-gray-100 w-full h-10 transition-all duration-100 rounded-[3px] "
          >
            دیدگاه‌ها و پرسش‌ها
          </NavLink>
          <hr className="text-gray-200" />
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Profile;
