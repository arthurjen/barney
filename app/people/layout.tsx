import { Header, Navbar } from "@/components";

export default function PeopleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full h-full mt-24 px-[1rem]">
      {children}
    </div>
  );
}
