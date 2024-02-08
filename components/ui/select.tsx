"use client";
import React, { Fragment, SetStateAction, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";

export function Select({
  data,
  label,
  className,
  value,
  onSelect,
  placeholder,
  type,
  name,
}: {
  label?: string;
  data: SelectItem[];
  className?: string;
  value?: any;
  onSelect: React.Dispatch<SetStateAction<any>>;
  placeholder?: string;
  type?: string;
  name?: string;
}) {
  return (
    <div className={className}>
      {label && <div className="text-main text-xl mb-2">{label}</div>}
      <Listbox value={value} by="value" onChange={onSelect} name={name}>
        <div className="z-0">
          <Listbox.Button className="w-full z-0 cursor-default bg-secondary text-main border-2 border-main py-2 pl-3 text-left text-xl flex justify-between items-center">
            <span
              className={clsx(
                "block truncate",
                !value && placeholder && "text-gray-300"
              )}
            >
              {value.display || value.value || placeholder}
            </span>
            <span className="pointer-events-none inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon className="h-5 w-5" aria-hidden="true" />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute z-10 w-full bg-secondary text-main border-2 border-main mt-1 max-h-60 overflow-auto py-1 text-xl">
              {data.map((item, index) => (
                <Listbox.Option
                  key={index}
                  className={({ active }) =>
                    `cursor-default select-none text-main`
                  }
                  value={item}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate py-2 px-4 ${
                          selected ? "text-secondary bg-main" : "text-main"
                        }`}
                      >
                        {item.display || item.value}
                      </span>
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
