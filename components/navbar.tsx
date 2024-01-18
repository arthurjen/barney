import { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import { Disclosure, Menu, Transition, Tab } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { usePathname } from "next/navigation";
import { auth } from "auth";
import NavbarClient from "./navbar-client";

export async function Navbar() {
  const session = await auth();

  return <NavbarClient session={session} />;
}
