"use client";
import React, { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import { clsx } from "clsx";
import { Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { usePathname } from "next/navigation";

const navigation = [
  { title: "borrow", path: "/borrow" },
  { title: "people", path: "/people" },
  { title: "profile", path: "/profile" },
  { title: "log out", path: "/logout" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <div className="fixed top-0 z-50 w-full max-w-screen-xl px-8 py-6 mx-auto bg-secondary">
      <nav className="relative flex items-center justify-between w-full mx-auto">
        <Logo />
        <div className="text-2xl text-main">
          {pathname !== "/signin" && pathname.slice(1)}
        </div>
        <MobileMenu path={pathname} />
      </nav>
    </div>
  );
}

const Logo = () => {
  return (
    <Link href="/" className="relative w-12 h-12">
      <Image src="logo.svg" alt="logo" fill priority />
    </Link>
  );
};

const Hamburger = ({ open }: { open: boolean }) => {
  return (
    <Menu.Button
      aria-label="Toggle Menu"
      className="py-1 ml-auto rounded-md text-main"
    >
      {open ? (
        <XMarkIcon width={36} height={36} />
      ) : (
        <Bars3Icon width={36} height={36} />
      )}
    </Menu.Button>
  );
};

function NextLink({
  href,
  children,
  ...rest
}: {
  href: string;
  children: React.ReactNode;
  [rest: string]: any;
}) {
  return (
    <Link href={href} {...rest}>
      {children}
    </Link>
  );
}

const MobileMenu = ({ path }: { path: string }) => {
  return (
    <Menu as="div" className="relative z-10 text-center text-main">
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
              className={clsx(
                "z-10 w-full h-full fixed top-24 left-0 focus:outline-none bg-secondary shadow-lg"
              )}
            >
              <div className="px-8 py-3">
                {navigation.map((item, index) => (
                  <Menu.Item
                    as={NextLink}
                    key={index}
                    className={clsx(
                      "h-20 my-8 flex justify-center items-center text-3xl",
                      path === item.path
                        ? "bg-main text-secondary"
                        : "border-2 border-main text-main"
                    )}
                    href={item.path}
                  >
                    {item.title}
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
