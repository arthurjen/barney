"use client";
import Image from "next/image";
import { useState } from "react";

const sortOptions = [
  {
    display: "name",
    value: "name",
  },
  {
    display: "karma",
    value: "karma",
  },
  // {
  //   display: "date est.",
  //   value: "date",
  // },
];

export default function PeopleList({ people }: { people: People }) {
  const [sortBy, setSortBy] = useState("karma");
  const [asc, setAsc] = useState(false);

  function sort(list: Person[], sortBy: string, asc: boolean) {
    if (sortBy === "name") {
      if (asc) {
        return list.sort((a, b) => {
          if (a.name < b.name) {
            return 1;
          }
          if (a.name > b.name) {
            return -1;
          }
          return 0;
        });
      } else {
        return list.sort((a, b) => {
          if (a.name < b.name) {
            return -1;
          }
          if (a.name > b.name) {
            return 1;
          }
          return 0;
        });
      }
    } else if (sortBy === "karma") {
      if (asc) {
        return list.sort((a, b) => a[sortBy] - b[sortBy]);
      } else {
        return list.sort((a, b) => b[sortBy] - a[sortBy]);
      }
    } else return list;
  }

  return (
    <div className="w-full h-full">
      <div className="flex flex-col justify-center w-full border-b-4 border-main">
        <div className="pb-4 text-3xl text-center text-main">members</div>
        <div className="flex justify-between w-full mb-4 border-2 text-main border-main">
          {sortOptions.map(({ display, value }, index) => (
            <div
              key={value}
              className={`border-main text-center py-3 border-x w-full bg-${
                sortBy === value ? "main" : "secondary"
              } text-xl text-${sortBy === value ? "secondary" : "main"}`}
              onClick={() => {
                if (sortBy === value) setAsc(!asc);
                else {
                  setSortBy(value);
                  setAsc(false);
                }
              }}
            >
              {display}
            </div>
          ))}
        </div>
      </div>
      <div className="w-full h-full overflow-auto">
        {sort(Object.values(people), sortBy, asc).map(
          ({ name, karma, date }, index) => (
            <div
              key={index}
              className="flex items-center justify-between w-full p-4 my-4 text-xl border-2 border-main text-main"
            >
              <div className="flex items-center">
                <Image
                  src="placeholder.svg"
                  alt="profile pic"
                  width={36}
                  height={36}
                />
                <div className="ml-2">{name.toLowerCase()}</div>
              </div>
              <div className="border-2 border-main w-[36px] h-[36px] box-border rounded-full">
                <div className="text-center align-top pt-[1px]">{karma}</div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
