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

const people: Person[] = [
  {
    name: "Tom Huteson",
    karma: 44,
    date: 1704579809561,
  },
  {
    name: "Arthur Jen",
    karma: 23,
    date: 1704519809561,
  },
  {
    name: "Ryan Ward",
    karma: 59,
    date: 1704579800561,
  },
  {
    name: "Sean Collins",
    karma: 0,
    date: 1704579800562,
  },
  {
    name: "Tom Huteson",
    karma: 44,
    date: 1704579809561,
  },
  {
    name: "Arthur Jen",
    karma: 23,
    date: 1704519809561,
  },
  {
    name: "Ryan Ward",
    karma: 59,
    date: 1704579800561,
  },
  {
    name: "Sean Collins",
    karma: 0,
    date: 1704579800562,
  },
  {
    name: "Tom Huteson",
    karma: 44,
    date: 1704579809561,
  },
  {
    name: "Arthur Jen",
    karma: 23,
    date: 1704519809561,
  },
  {
    name: "Ryan Ward",
    karma: 59,
    date: 1704579800561,
  },
  {
    name: "Sean Collins",
    karma: 0,
    date: 1704579800562,
  },
];

export default function PeopleList() {
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
      <div className="flex flex-col justify-center border-b-4 border-main w-full">
        <div className="text-center text-main text-3xl pb-4">members</div>
        <div className="text-main flex justify-between w-full mb-4 border-2 border-main">
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
        {sort(people, sortBy, asc).map(({ name, karma, date }, index) => (
          <div
            key={index}
            className="w-full flex justify-between items-center border-main border-2 my-4 p-4 text-xl text-main"
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
        ))}
      </div>
    </div>
  );
}
