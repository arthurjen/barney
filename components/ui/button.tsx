"use client";
export function Button({
  onClick,
  text,
  disabled,
}: {
  onClick?: () => void;
  text: string;
  disabled?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      disabled={!!disabled}
      className="bg-main h-20 w-full font-regular text-3xl text-secondary hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
    >
      {text}
    </button>
  );
}
