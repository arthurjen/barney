import { Navbar } from "@/components";

export default function ProfileLayout({
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
