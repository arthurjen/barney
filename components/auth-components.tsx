import { signIn, signOut } from "auth";
import { Button } from "./ui/button";
import {} from "next-auth";
export function SignIn({ provider, ...props }: { provider?: string }) {
  return (
    <form
      action={async () => {
        "use server";
        await signIn(provider, { redirectTo: "/" });
      }}
      className="w-full"
    >
      <Button
        // onClick={() => console.log("sign in")}
        className="bg-main h-16 w-full font-regular text-3xl text-secondary hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
        // onClick={async () => {
        //   "use server";
        //   await signIn(provider);
        // }}
        // {...props}
      >
        Sign In
      </Button>
    </form>
  );
}

export function SignOut(props: React.ComponentPropsWithRef<typeof Button>) {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
      className="w-full"
    >
      <Button className="w-full p-0" {...props}>
        Sign Out
      </Button>
    </form>
  );
}
