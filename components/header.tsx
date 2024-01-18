
import Link from "next/link";
import Image from "next/image";

export function Header() {
  return (
    <div className="w-full py-8 md:px-10 2xl:px-16 bg-secondary z-20 flex justify-center">
      <Link
        className="flex items-center space-x-2 text-l"
        href="/"
      >
        <Image
          src="logo.svg"
          alt="Cherry City Games Logo"
          width={70}
          height={70}
        />
      </Link>
    </div>
  );
}

