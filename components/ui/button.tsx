"use client";
export function Button({
  onClick,
  text,
  disabled,
  type,
}: {
  onClick?: () => void;
  text: string;
  disabled?: boolean;
  type?: "button" | "reset" | "submit" | undefined;
}) {
  return (
    <button
      onClick={onClick}
      disabled={!!disabled}
      type={type}
      className="w-full h-20 text-3xl bg-main font-regular text-secondary disabled:bg-tertiary hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
    >
      {text}
    </button>
  );
}
