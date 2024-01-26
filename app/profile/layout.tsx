import { Navbar } from "@/components";

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full h-full">
      {children}
    </div>
  );
}
