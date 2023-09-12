"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { BsFillCartDashFill } from "react-icons/bs";
import {
  TbBrandGoogleAnalytics,
  TbMapSearch,
  TbTransformFilled,
} from "react-icons/tb";
import { IoBusinessSharp } from "react-icons/io5";
import LoginModal from "@/components/shared/forms/login/LoginModal";
import RegisterModal from "@/components/shared/forms/signup/RegisterModal";
import LogoutModal from "@/components/shared/forms/logout/LogoutModal";
import { hasCookie } from "cookies-next";
import { useDispatch, useSelector } from "react-redux";
import CartModal from "@/components/shared/forms/cart/CartModal";

const dropdownNavs = [
  {
    label: "Enterprise",
    navs: [
      {
        title: "Enterprise Architecture",
        desc: "Duis aute irure dolor in reprehenderit",
        path: "/services/3",
        icon: <IoBusinessSharp className="w-6 h-6" />,
      },
      {
        title: "Consultancy & Roadmaps",
        desc: "Duis aute irure dolor in reprehenderit",
        path: "/services/2",
        icon: <TbMapSearch className="w-6 h-6" />,
      },
    ],
  },
  {
    label: "Business",
    navs: [
      {
        title: "Transformation Strategy",
        desc: "Duis aute irure dolor in reprehenderit",
        path: "/services/1",
        icon: <TbTransformFilled className="w-6 h-6" />,
      },
      {
        title: "Asset Health Analysis",
        desc: "Duis aute irure dolor in reprehenderit",
        path: "/services/4",
        icon: <TbBrandGoogleAnalytics className="w-6 h-6" />,
      },
    ],
  },
  {
    label: "E-Commerce",
    navs: [
      {
        title: "Digitising Your Store",
        desc: "Duis aute irure dolor in reprehenderit",
        path: "/services/5",
        icon: <BsFillCartDashFill className="w-6 h-6" />,
      },
    ],
  },
];
const NavBar = () => {
  // const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);
  const [state, setState] = useState(false);
  const [dropdownState, setDropdownState] = useState({
    isActive: false,
    idx: null,
  });

  // Replace # paths with your paths
  const navigation = [
    { title: "Services", path: "#", isDropdown: true, navs: dropdownNavs },
    { title: "About", path: "/about", isDropdown: false },
    { title: "Contact", path: "/contact", isDropdown: false },
  ];

  useEffect(() => {
    document.onclick = (e) => {
      const target = e.target;
      if (!target.closest(".nav-menu"))
        setDropdownState({ isActive: false, idx: null });
    };
  }, []);

  return (
    <>
      <nav
        className={`sticky top-0 z-20 w-full md:text-sm lg:text-md md:border-none bg-background-colour ${
          state ? "shadow-lg" + " rounded-b-xl" + " md:shadow-none" : ""
        }`}
      >
        <div className="items-center gap-x-14 px-4 max-w-screen-xl mx-auto md:flex md:px-8">
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <a href="/">
              <Image
                src="/assets/logos/DPTS-logo-web-version.png"
                width={120}
                height={50}
                alt="DPTS logo"
              />
            </a>
            <div className="md:hidden">
              <button
                className="text-gray-500 hover:text-gray-800"
                onClick={() => setState(!state)}
              >
                {state ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm8.25 5.25a.75.75 0 01.75-.75h8.25a.75.75 0 010 1.5H12a.75.75 0 01-.75-.75z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
          <div
            className={`nav-menu flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              state ? "block" : "hidden"
            }`}
          >
            <ul className="items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
              {navigation.map((item, idx) => {
                return (
                  <li key={idx}>
                    {item.isDropdown ? (
                      <button
                        className="w-full flex items-center justify-between gap-1 text-gray-700 hover:text-indigo-600  xl:text-lg"
                        onClick={() =>
                          setDropdownState({
                            idx,
                            isActive: !dropdownState.isActive,
                          })
                        }
                      >
                        {item.title}
                        {dropdownState.idx === idx && dropdownState.isActive ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              fillRule="evenodd"
                              d="M14.77 12.79a.75.75 0 01-1.06-.02L10 8.832 6.29 12.77a.75.75 0 11-1.08-1.04l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 01-.02 1.06z"
                              clipRule="evenodd"
                            />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                              clipRule="evenodd"
                            />
                          </svg>
                        )}
                      </button>
                    ) : (
                      <a
                        href={item.path}
                        className="block text-gray-700 hover:text-indigo-600  xl:text-lg"
                      >
                        {item.title}
                      </a>
                    )}
                    {item.isDropdown &&
                    dropdownState.idx === idx &&
                    dropdownState.isActive ? (
                      <div className="mt-6 bg-background-colour inset-x-0 top-20 w-full md:absolute md:border-y md:shadow-md md:mt-0">
                        <ul className="max-w-screen-xl mx-auto grid gap-6 md:p-8 md:grid-cols-2 lg:grid-cols-3">
                          {/*<ul className="max-w-screen-xl mx-auto grid items-center gap-6 md:p-8 md:grid-cols-2 lg:grid-cols-3">*/}
                          {item?.navs.map((dropdownItem, idx) => (
                            <li key={idx}>
                              <p className="text-indigo-600 text-sm lg:text-md">
                                {dropdownItem.label}
                              </p>
                              <ul className="mt-5 space-y-6">
                                {dropdownItem.navs.map((navItem, idx) => (
                                  <li key={idx} className="group">
                                    <a
                                      href={navItem.path}
                                      className="flex gap-3 items-center"
                                    >
                                      <div className="w-12 h-12 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center duration-150 group-hover:bg-indigo-600 group-hover:text-white md:w-14 md:h-14">
                                        {navItem.icon}
                                      </div>
                                      <div>
                                        <span className="text-gray-800 duration-200 group-hover:text-indigo-600 text-sm lg:text-md font-medium md:text-base">
                                          {navItem.title}
                                        </span>
                                        {/*<p className="text-sm lg:text-md text-gray-600 group-hover:text-gray-800 mt-1">*/}
                                        {/*  {navItem.desc}*/}
                                        {/*</p>*/}
                                      </div>
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      ""
                    )}
                  </li>
                );
              })}
              <div className="flex-1 items-center justify-end gap-x-6 space-y-3 md:flex md:space-y-0">
                <li>
                  {userState.isLoggedIn ? <CartModal /> : <RegisterModal />}
                </li>
                <li>
                  {userState.isLoggedIn ? <LogoutModal /> : <LoginModal />}
                </li>
              </div>
            </ul>
          </div>
        </div>
      </nav>
      {state ? (
        <div
          className="z-10 fixed top-0 w-screen h-screen bg-black/20 backdrop-blur-sm md:hidden"
          onClick={() => setState(false)}
        ></div>
      ) : (
        ""
      )}
    </>
  );
};

export default NavBar;
