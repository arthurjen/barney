"use client";
import { Spinner } from "./spinner";

export function Button({
  onClick,
  text,
  disabled,
  type,
  loading,
  outline,
}: {
  onClick?: () => void;
  text: string;
  disabled?: boolean;
  type?: "button" | "reset" | "submit" | undefined;
  loading?: boolean;
  outline?: boolean;
}) {
  return outline ? (
    <button
      onClick={onClick}
      disabled={!!disabled}
      type={type}
      className="flex items-center justify-center w-full h-20 text-3xl bg-secondary font-regular text-main disabled:opacity-60 border-main border-2"
    >
      {loading ? <Spinner /> : text}
    </button>
  ) : (
    <button
      onClick={onClick}
      disabled={!!disabled}
      type={type}
      className="flex items-center justify-center w-full h-20 text-3xl bg-main font-regular text-secondary disabled:bg-tertiary"
    >
      {loading ? <Spinner /> : text}
    </button>
  );
}
