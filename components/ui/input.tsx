"use client";
import { SetStateAction, useState } from "react";
export function Input({
  label,
  value,
  onChange,
  className,
  name
}: {
  label?: string;
  value: string;
  onChange: React.Dispatch<SetStateAction<any>>;
  className?: string;
  name?: string;
}) {
  return (
    <div className={`w-full ${className}`}>
      {/* {label && (
        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
          {label}
        </label>
      )} */}
      <input
        type="text"
        placeholder="card name"
        // <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
        value={value}
        onChange={onChange}
        className="w-full px-3 py-2 placeholder-gray-300 text-xl border-2 border-main bg-secondary text-main"
        name={name}
      />
    </div>
  );
}
