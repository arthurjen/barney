import { Metadata } from "next";
import PeopleList from "./people-list";

export const metadata: Metadata = {
  title: "people",
};

export default function People() {
  return <PeopleList />;
}
