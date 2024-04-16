"use client";
import { SetStateAction, useState } from "react";
export function Input({
  label,
  value,
  onChange,
  className,
  name,
}: {
  label?: string;
  value: string;
  onChange: React.Dispatch<SetStateAction<any>>;
  className?: string;
  name?: string;
}) {
  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label className="block mb-2 text-xl text-main dark:text-gray-400">
          {label}
        </label>
      )}
      <input
        type="text"
        placeholder="card name"
        // <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
        value={value}
        onChange={onChange}
        className="w-full px-3 py-2 text-xl placeholder-gray-300 border-2 border-main bg-secondary text-main"
        name={name}
      />
    </div>
  );
}
