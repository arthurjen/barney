"use client";

import { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import { Disclosure, Menu, Transition, Tab } from "@headlessui/react";
import {
  ChevronDownIcon,
  UserCircleIcon,
  FaceSmileIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { usePathname } from "next/navigation";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const navigation = [
  { title: "Cards", path: "/" },
  { title: "People", path: "/people" },
  { title: "Profile", path: "/profile" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="absolute bottom-0 w-full px-5 md:px-10 2xl:px-16 bg-secondary z-20 border-top">
      <nav className="relative flex flex-wrap items-center justify-between px-6 py-6 mx-auto lg:justify-between">
        <Link href="/">
          <Image src={pathname === '/' ? 'cards-solid.svg' : 'cards-outline.svg'} alt="cards" width={56} height={56} />
        </Link>
        <Link href="/profile">
          <Image src="placeholder.svg" alt="profile" width={56} height={56} />
        </Link>
        <Link href="/people">
          <Image src={pathname === '/people' ? 'people-solid.svg' : 'people-outline.svg'} alt="people" width={56} height={56} />
        </Link>
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
