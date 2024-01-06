import { Metadata } from "next";
import PeopleList from "./people-list";

export const metadata: Metadata = {
  title: "People",
};

export default function People() {
  return (
    <div className="flex min-h-screen max-h-screen flex-col items-center bg-secondary px-8 justify-between font-nuform mt-36">
      <PeopleList />
    </div>
  );
}
