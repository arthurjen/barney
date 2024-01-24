import { Header } from "@/components";

export default function PeopleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full h-full">
      <Header />
      {children}
    </div>
  );
}
