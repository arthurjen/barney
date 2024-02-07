"use client";
import { Fragment } from "react";
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
    <div className="z-21 absolute top-0 max-w-screen-xl w-full py-6 px-8 mx-auto">
      <nav className="w-full relative flex items-center justify-between mx-auto">
        <Logo />
        <div className="text-main text-2xl">
          {pathname !== "/signin" && pathname.slice(1)}
        </div>
        <MobileMenu path={pathname} />
      </nav>
    </div>
  );
}

const Logo = () => {
  return (
    <Link href="/">
      <Image src="logo.svg" alt="logo" width={44} height={44} />
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

function NextLink(props: { href: string, children: any }) {
  const { href, children, ...rest } = props;
  return (
    <Link href={href} {...rest}>
      {children}
    </Link>
  );
}

const MobileMenu = ({ path }: { path: string }) => {
  return (
    <Menu as="div" className="z-10 relative text-center text-main">
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
              <div className="py-3 px-8">
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
