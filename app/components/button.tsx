export function Button(props: { children: any, icon: any }) {
  const { children, icon } = props;
  return (
    <button>{icon}{children}</button>
  )
}