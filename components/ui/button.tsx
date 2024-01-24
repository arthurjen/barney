export function Button(props: {
  onClick: () => void;
  text: string;
}) {
  const { onClick, text } = props;
  return (
    <button
      onClick={onClick}
      className="bg-main h-16 w-full font-regular text-3xl text-secondary hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
    >
      {text}
    </button>
  );
}
