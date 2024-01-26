import { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";

const navigation = [
  { title: "borrow", path: "/borrow" },
  { title: "people", path: "/people" },
  { title: "profile", path: "/profile" },
];

export function Navbar() {
  return (
    <div className="w-full px-4 pt-16 flex justify-between items-center">
      <Image src="logo.svg" alt="logo" width={24} height={24} />
      <div className="w-full pl-16 pr-8 flex justify-between items-center text-main text-xl">
        {navigation.map((route) => (
          <Link href={route.path} key={route.path}>
            {route.title}
          </Link>
        ))}
      </div>
      <Bars3Icon className="text-main" width={36} height={36} />
    </div>
  );
}
