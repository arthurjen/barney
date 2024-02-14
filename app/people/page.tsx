import { Metadata } from "next";
import PeopleList from "./people-list";
import { getPeople } from "@/app/api/database";
export const metadata: Metadata = {
  title: "people",
};

export default async function People() {
  const people = await getPeople();

  return <PeopleList people={people} />;
}
