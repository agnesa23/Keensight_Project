"use client";
import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import Image from "next/image"
import { Disclosure } from "@headlessui/react";

export const Navbar = () => {
  const navigation = [
    "Home",
    "Services",
    "Process",
    "Technologies",
    "About Us",
    
  ];

  return (
    <div className="w-full">
      <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-1">
        {/* Logo  */}
        <Link
  href="/"
  className="w-auto p-5 hover:scale-110 hover:drop-shadow-[0_35px_35px_rgba(255,255,255,0.25)] dark:block rounded-lg transition-all duration-300"
>
  <span className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100">
    {/* Logo për modalitetin e dritës */}
    <Image
      src="/img/logo-light.svg"
      width="210"
      alt="L"
      height="50"
      className="w-60 h-auto block dark:hidden" 
    />
    
   
    <Image
      src="/img/logo-dark.svg"
      width="210"
      alt="N"
      height="50"
      className="w-60 h-auto hidden dark:block" 
    />
  </span>
</Link>

        {/* get started  */}
        <div className="gap-3 nav__item mr-2 lg:flex ml-auto lg:ml-0 lg:order-2">
            <ThemeChanger />
            <div className="hidden mr-3 lg:flex nav__item">
              <Link href="/" className="flex items-center justify-center w-full rounded-full bg-black px-4 py-4 text-white duration-500 ease-in-out hover:bg-transparent hover:text-black hover:border border-black dark:hover:border-white dark:bg-white dark:text-black dark:hover:bg-gray-800 dark:hover:text-white">
                Get Expert Advice
              </Link>
            </div>
        </div>
                
        <Disclosure>
          {({ open }) => (
            <>
                <Disclosure.Button
                  aria-label="Toggle Menu"
                  className="px-2 py-1 text-gray-500 rounded-md lg:hidden hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700">
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24">
                    {open && (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      />
                    )}
                    {!open && (
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      />
                    )}
                  </svg>
                </Disclosure.Button>

                <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
  <>
    {navigation.map((item, index) => (
      <Link
        key={index}
        href="/"
        className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none"
      >
        {item}
      </Link>
    ))}

    {/* Link me stilin e përditësuar */}
    <Link
      href="/"
      className="flex items-center justify-center w-full rounded-full bg-black px-4 py-4 text-white duration-500 ease-in-out hover:bg-transparent hover:text-black hover:border border-black dark:hover:border-white dark:bg-white dark:text-black dark:hover:bg-gray-800 dark:hover:text-white"
    >
      Get Expert Advice
    </Link>
  </>
</Disclosure.Panel>
            </>
          )}
        </Disclosure>
        
        {/* menu  */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((menu, index) => (
              <li className="mr-3 nav__item" key={index}>
                <Link href="/" className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800">
                    {menu}
                </Link>
              </li>
            ))}
          </ul>
        </div>

      </nav>
    </div>
  );
}
