"use client";
import Image from "next/image";

import React from "react";
import Link from "next/link";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { FaTwitterSquare } from "react-icons/fa";
import { AiFillGooglePlusSquare } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      {/*    <!-- Component: Five Columns Footer with Logo --> */}
      <footer className="w-full text-slate-500">
        {/*      <!-- Main footer --> */}
        <div className="border-t border-slate-200 bg-slate-100 pt-16 pb-12 text-sm">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-6 gap-14 md:grid-cols-9 lg:grid-cols-10">
              <div
                className="col-span-6 md:col-span-9 lg:col-span-4"
                aria-labelledby="footer-header"
              >
                <Link
                  id="WindUI-5-logo"
                  aria-label="WindUI logo"
                  aria-current="page"
                  className="mb-6 w-full h-full flex items-center gap-2 whitespace-nowrap text-base font-medium leading-6 text-slate-700 focus:outline-none"
                  href="/"
                >
                  <Image
                    src={"/assets/logos/DPTS-logo-web-version.png"}
                    width={500}
                    height={500}
                    alt="Float UI logo"
                    className={`object-contain mx-auto`}
                  />
                </Link>
              </div>

              <nav
                className="col-span-2 md:col-span-3 lg:col-span-2 text-center lg:text-left "
                aria-labelledby="footer-docs-5-logo"
              >
                <h3
                  className="mb-6 text-base font-medium text-slate-700"
                  id="footer-docs-5-logo"
                >
                  Services
                </h3>
                <ul>
                  <li className="mb-2 leading-6">
                    <Link
                      href="/services/1"
                      className="transition-colors duration-300 hover:text-primary-colour focus:text-primary-colour"
                    >
                      Transformation Strategy
                    </Link>
                  </li>
                  <li className="mb-2 leading-6">
                    <Link
                      href="/services/2"
                      className="transition-colors duration-300 hover:text-primary-colour focus:text-primary-colour"
                    >
                      Consultancy & Roadmaps
                    </Link>
                  </li>
                  <li className="mb-2 leading-6">
                    <Link
                      href="/services/3"
                      className="transition-colors duration-300 hover:text-primary-colour focus:text-primary-colour"
                    >
                      Enterprise Architecture
                    </Link>
                  </li>
                  <li className="mb-2 leading-6">
                    <Link
                      href="/services/4"
                      className="transition-colors duration-300 hover:text-primary-colour focus:text-primary-colour"
                    >
                      Asset Health Analysis
                    </Link>
                  </li>
                  <li className="mb-2 leading-6">
                    <Link
                      href="/services/5"
                      className="transition-colors duration-300 hover:text-primary-colour focus:text-primary-colour"
                    >
                      Digitising your Store
                    </Link>
                  </li>
                </ul>
              </nav>
              <nav
                className="col-span-2 md:col-span-3 lg:col-span-2 text-center lg:text-left"
                aria-labelledby="footer-about-5-logo"
              >
                <h3
                  className="mb-6 text-base font-medium text-slate-700"
                  id="footer-about-5-logo"
                >
                  Get In Touch
                </h3>
                <ul>
                  <li className="mb-2 leading-6">
                    <Link
                      href="/about"
                      className="transition-colors duration-300 hover:text-primary-colour focus:text-primary-colour"
                    >
                      About us
                    </Link>
                  </li>
                  <li className="mb-2 leading-6">
                    <Link
                      href="/contact"
                      className="transition-colors duration-300 hover:text-primary-colour focus:text-primary-colour"
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </nav>
              <nav
                className="col-span-2 md:col-span-3 lg:col-span-2 text-center lg:text-left"
                aria-labelledby="footer-get-in-touch-5-logo"
              >
                <h3
                  className="mb-6 text-base font-medium text-slate-700"
                  id="footer-get-in-touch-5-logo"
                >
                  Social
                </h3>
                <ul>
                  <li className="mb-2 leading-6">
                    <Link
                      href="#"
                      className="text-2xl transition-colors duration-300 hover:text-primary-colour focus:text-primary-colour"
                    >
                      <BsLinkedin />
                    </Link>
                  </li>
                  <li className="mb-2 leading-6">
                    <Link
                      href="#"
                      className="text-2xl transition-colors duration-300 hover:text-primary-colour focus:text-primary-colour"
                    >
                      <BsFacebook />
                    </Link>
                  </li>
                  <li className="mb-2 leading-6">
                    <Link
                      href="#"
                      className="text-2xl transition-colors duration-300 hover:text-primary-colour focus:text-primary-colour"
                    >
                      <FaTwitterSquare />
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            <div className={`w-full md:flex`}>
              <p className={`mt-6 text-center md:text-left`}>
                In Honour Of A Legend
              </p>
              <p className={`mt-6 grow text-center md:text-right`}>
                Developed by{" "}
                <Link href={"https://www.ezdev.solutions"} target={`_blank`}>
                  EZdev Solutions (PTY) ltd
                </Link>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
