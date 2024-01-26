"use client";
import { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import { Disclosure, Menu, Transition, Tab } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { usePathname } from "next/navigation";

// const navigation = [
//   { title: "Cards", path: "/" },
//   { title: "People", path: "/people" },
//   { title: "Profile", path: "/profile" },
// ];

export default function NavbarClient({ ...props }) {
  const { session } = props;
  const pathname = usePathname();

  return (
    <div className="absolute bottom-0 w-full px-5 md:px-10 2xl:px-16 bg-secondary z-20 border-t-4 border-main">
      <nav className="relative flex flex-wrap items-center justify-between px-6 py-6 mx-auto lg:justify-between">
        <Link href="/borrow">
          <Image
            src={pathname === "/borrow" ? "cards-solid.svg" : "cards-outline.svg"}
            alt="cards"
            width={56}
            height={56}
          />
        </Link>
        <Link href="/profile">
          <Image
            className="rounded-full border-main border-2"
            src={session?.user?.image}
            alt="profile"
            width={56}
            height={56}
          />
        </Link>
        <Link href="/people">
          <Image
            src={
              pathname === "/people" ? "people-solid.svg" : "people-outline.svg"
            }
            alt="people"
            width={56}
            height={56}
          />
        </Link>
      </nav>
    </div>
  );
}
