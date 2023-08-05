"use client";
import Image from "next/image";

import React from "react";
import Link from "next/link";

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
                className="col-span-2 md:col-span-3 lg:col-span-2 text-center lg:text-left"
                aria-labelledby="footer-docs-5-logo"
              >
                <h3
                  className="mb-6 text-base font-medium text-slate-700"
                  id="footer-docs-5-logo"
                >
                  Docs & Help
                </h3>
                <ul>
                  <li className="mb-2 leading-6">
                    <Link
                      href="#"
                      className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      Documentation
                    </Link>
                  </li>
                  <li className="mb-2 leading-6">
                    <Link
                      href="#"
                      className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      Training
                    </Link>
                  </li>
                  <li className="mb-2 leading-6">
                    <Link
                      href="#"
                      className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      System status
                    </Link>
                  </li>
                  <li className="mb-2 leading-6">
                    <Link
                      href="#"
                      className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      FAQs
                    </Link>
                  </li>
                  <li className="mb-2 leading-6">
                    <Link
                      href="#"
                      className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      Help Center
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
                  About us
                </h3>
                <ul>
                  <li className="mb-2 leading-6">
                    <Link
                      href="#"
                      className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      About us
                    </Link>
                  </li>
                  <li className="mb-2 leading-6">
                    <Link
                      href="#"
                      className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      Careers
                    </Link>
                  </li>
                  <li className="mb-2 leading-6">
                    <Link
                      href="#"
                      className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      Leadership
                    </Link>
                  </li>
                  <li className="mb-2 leading-6">
                    <Link
                      href="#"
                      className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      Blog
                    </Link>
                  </li>
                  <li className="mb-2 leading-6">
                    <Link
                      href="#"
                      className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      Events
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
                  Get in touch
                </h3>
                <ul>
                  <li className="mb-2 leading-6">
                    <Link
                      href="#"
                      className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      Contact
                    </Link>
                  </li>
                  <li className="mb-2 leading-6">
                    <Link
                      href="#"
                      className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      Support
                    </Link>
                  </li>
                  <li className="mb-2 leading-6">
                    <Link
                      href="#"
                      className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      Partners
                    </Link>
                  </li>
                  <li className="mb-2 leading-6">
                    <Link
                      href="#"
                      className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                    >
                      Join research
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
