"use client";

export function IconButton({
  onClick,
  children,
}: {
  onClick?: () => void;
  children: React.ReactElement;
}) {
  return <button onClick={onClick}>{children}</button>;
}
