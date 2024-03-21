"use client";
import { Spinner } from "./spinner";

export function Button({
  onClick,
  text,
  disabled,
  type,
  loading,
}: {
  onClick?: () => void;
  text: string;
  disabled?: boolean;
  type?: "button" | "reset" | "submit" | undefined;
  loading?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      disabled={!!disabled}
      type={type}
      className="flex items-center justify-center w-full h-20 text-3xl bg-main font-regular text-secondary disabled:bg-tertiary hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
    >
      {loading ? <Spinner /> : text}
    </button>
  );
}
