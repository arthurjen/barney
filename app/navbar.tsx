"use client";

import { Fragment } from "react";
// import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
// import { ArchiveBoxIcon, UsersIcon, UserIcon } from "@heroicons/react/24/solid";
import { Disclosure, Menu, Transition, Tab } from "@headlessui/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/solid";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const navigation = [
  { title: "Cards", path: "/" },
  { title: "People", path: "/people" },
  { title: "Profile", path: "/profile" },
];
export default function Navbar() {
  // const pathname = usePathname();
  return (
    <div className="top-0 w-full px-5 md:px-10 2xl:px-16 bg-main border-b dark:bg-gray-900 dark:border-gray-700 z-20">
      <nav className="relative flex flex-wrap items-center justify-between px-6 py-6 mx-auto lg:justify-between">
        {/* Logo  */}
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                <Link
                  className="flex items-center space-x-2 text-l font-medium text-indigo-900 dark:text-gray-100"
                  href="#"
                >
                  Cherry City Gaming
                </Link>

                <Disclosure.Button
                  aria-label="Toggle Menu"
                  className="px-2 py-1 ml-auto text-gray-700 rounded-md lg:hidden hover:text-indigo-900 focus:text-indigo-900 focus:bg-indigo-50 focus:outline-none "
                >
                  {!open && <Bars3Icon className="w-6 h-6" />}
                  {open && <XMarkIcon className="w-6 h-6" />}
                </Disclosure.Button>

                <Disclosure.Panel className="flex flex-col w-full absolute top-16 left-0 bg-white p-4 dark:bg-gray-900 border-blue-300 rounded dark:border-gray-700 my-5 z-999 lg:hidden">
                  <NavMenu navigation={navigation} mobile={true} />
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>

        {/* menu  */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 lg:pt-0 list-reset lg:flex">
            <NavMenu navigation={navigation} />
          </ul>
        </div>
      </nav>
    </div>
  );
}

const NavMenu = (props) => {
  return (
    <>
      {props.navigation.map((item, index) => {
        return (
          <div key={index}>
            {item.children && item.children.length > 0 ? (
              <DropdownMenu
                menu={item}
                items={item.children}
                mobile={props.mobile}
              />
            ) : (
              <MenuItem item={item} mobile={props.mobile} />
            )}
          </div>
        );
      })}
    </>
  );
};

const MenuItem = ({ item, mobile }) => {
  return (
    <Link
      className={`
    text-gray-700 dark:text-gray-300 rounded-md
outline-none hover:text-indigo-500 focus:text-indigo-500  transition-all
 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none ${
   mobile ? "w-full block px-4 py-2 -ml-4" : "inline-block px-6 py-2"
 }`}
      href={item?.path ? item.path : "#"}
    >
      {item.title}
    </Link>
  );
};

const DropdownMenu = ({ menu, items, mobile }) => {
  return (
    <Menu as="div" className="relative text-left">
      {({ open }) => (
        <>
          <Menu.Button
            className={`flex items-center gap-x-1 transition-all rounded-md outline-none focus:outline-none ${
              open
                ? "text-indigo-500   hover:text-indigo-500 focus:bg-indigo-100 focus:text-indigo-500 dark:focus:bg-gray-800 "
                : "text-gray-700 dark:text-gray-300 hover:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800  focus:text-indigo-500"
            }  ${mobile ? "w-full px-4 py-2 -ml-4" : "inline-block px-4 py-2"}`}
          >
            <span>{menu.title}</span>
            <ChevronDownIcon className="w-4 h-4" />
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="lg:transition lg:ease-out lg:duration-100"
            enterFrom="lg:transform lg:opacity-0 lg:scale-95"
            enterTo="lg:transform lg:opacity-100 lg:scale-100"
            leave="lg:transition lg:ease-in lg:duration-75"
            leaveFrom="lg:transform lg:opacity-100 lg:scale-100"
            leaveTo="lg:transform lg:opacity-0 lg:scale-95"
          >
            <Menu.Items
              className={`z-20 lg:w-56 origin-top-left  rounded-md  lg:absolute lg:right-0  focus:outline-none ${
                mobile ? "" : "  bg-white shadow-lg  dark:bg-gray-800"
              }`}
            >
              <div className={`${!mobile ? "py-3" : ""}`}>
                {items.map((item, index) => (
                  <Menu.Item as="div" key={index}>
                    {({ active }) => (
                      <Link href={item?.path ? item.path : "#"}>
                        <a
                          className={`flex space-x-2 lg:space-x-4 items-center px-5 py-2
                          ${
                            active
                              ? "  text-indigo-500"
                              : "text-gray-700 dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500"
                          }
                          `}
                        >
                          <span> {item.title}</span>
                        </a>
                      </Link>
                    )}
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
};
