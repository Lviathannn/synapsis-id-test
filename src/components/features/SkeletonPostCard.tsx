import { Skeleton } from "../ui/skeleton";

type Props = {};

export default function SkeletonPostCard({}: Props) {
  return (
    <div className="w-full rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all md:grid md:grid-rows-2">
      <Skeleton className="w-full aspect-video object-cover md:row-span-1" />
      <div className="p-5 flex flex-col justify-between md:row-span-1">
        <div className="h-full flex flex-col justify-between">
          <div className="space-y-2">
            <Skeleton className="w-20 h-5 bg-primary" />
            <Skeleton className="w-full h-5" />
            <Skeleton className="w-[70%] h-5" />
          </div>
          <div className="flex gap-5 items-center mt-5">
            <Skeleton className="w-10 h-10 rounded-full bg-accent" />

            <div>
              <Skeleton className="text-sm font-medium bg-accent w-40 h-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
