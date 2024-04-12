import { Metadata } from "next";
import PeopleList from "./people-list";
import { PEOPLE } from "@/app/api/database";
export const metadata: Metadata = {
  title: "people",
};

export default async function People() {
  const people = await PEOPLE.get();

  return <PeopleList people={people} />;
}
