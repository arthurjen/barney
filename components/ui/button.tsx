export function Button(props: {
  className?: string;
  children: any;
  onClick: () => void;
}) {
  const { children, onClick, className } = props;
  return (
    <button
      // onClick={onClick}
      className={`${className}`}
    >
      {children}
    </button>
  );
}
