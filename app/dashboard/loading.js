
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {

  return (
    <div className="h-full w-full flex">
        <Skeleton className="h-full w-1/3" />
        <Skeleton className="h-full w-2/3" />
    </div>
  );
}
