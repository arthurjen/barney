import { signIn, signOut } from "auth";
import { Button } from "./ui/button";

export function SignIn({ provider, ...props }: { provider?: string }) {
  return (
    <form
      action={async () => {
        "use server";
        await signIn(provider, { redirectTo: "/borrow" });
      }}
      className="w-full"
    >
      <Button
        text="continue with discord"
      />
    </form>
  );
}

// export function SignOut(props: React.ComponentPropsWithRef<typeof Button>) {
//   return (
//     <form
//       action={async () => {
//         "use server";
//         await signOut();
//       }}
//       className="w-full"
//     >
//       <Button className="w-full p-0" {...props}>
//         Sign Out
//       </Button>
//     </form>
//   );
// }
