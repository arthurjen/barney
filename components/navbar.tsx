"use client";
import { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import cx from "clsx";
import { Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const navigation = [
  { title: "borrow", path: "/borrow" },
  { title: "people", path: "/people" },
  { title: "profile", path: "/profile" },
];

const options = [{ title: "sign out", path: "/signout" }];

export function Navbar() {
  return (
    <div className="max-w-screen-xl w-full py-3 px-4 mx-auto shadow-lg">
      <nav className="w-full relative flex items-center justify-between mx-auto">
        <Logo />
        <div className="w-full pl-10 pr-8 flex justify-between items-center text-main text-xl">
          {navigation.map((route) => (
            <Link href={route.path} key={route.path}>
              {route.title}
            </Link>
          ))}
        </div>
        <MobileMenu />
      </nav>
    </div>
  );
}

const Logo = () => {
  return (
    <Link href="/">
      <Image src="logo.svg" alt="logo" width={36} height={36} />
    </Link>
  );
};

const Hamburger = ({ open }: { open: boolean }) => {
  return (
    <Menu.Button
      aria-label="Toggle Menu"
      className="py-1 ml-auto text-main rounded-md"
    >
      {open ? (
        <XMarkIcon width={36} height={36} />
      ) : (
        <Bars3Icon width={36} height={36} />
      )}
    </Menu.Button>
  );
};

const MobileMenu = () => {
  return (
    <Menu as="div" className="relative text-right text-main">
      {({ open }) => (
        <>
          <Hamburger open={open} />
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items
              className={cx(
                "z-20 w-36 px-8 origin-top-right rounded-md absolute right-0 focus:outline-none bg-secondary shadow-lg"
              )}
            >
              <div className="py-3 text-xl">
                {options.map((item, index) => (
                  <Menu.Item as="div" key={index}>
                    <Link href={item?.path ? item.path : "#"}>
                      <span>{item.title}</span>
                    </Link>
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </Transition>

          {/* <NavItems navigation={navigation} mobile={true} />
          <ActionButtons mobile={true} /> */}
        </>
      )}
    </Menu>
  );
};
