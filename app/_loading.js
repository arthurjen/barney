import { Spinner } from "@/components/ui";

export default function Loading() {
  return (
    <div className="flex items-center justify-between w-full h-full">
      <Spinner />
    </div>
  );
}
