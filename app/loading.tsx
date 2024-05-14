import { Spinner } from "@/components/ui";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-between w-full min-h-96 text-main text-3xl mt-80">
      <Spinner />
    </div>
  );
}
