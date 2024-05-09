import SkeletonPostCard from "@/components/features/SkeletonPostCard";
import { Skeleton } from "@/components/ui/skeleton";

type Props = {};

export default function loading({}: Props) {
  return (
    <main className="container py-20 space-y-10">
      <Skeleton className="w-full h-[450px] rounded-xl bg-accent" />
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {Array.from({ length: 4 }).map((_, index) => (
          <SkeletonPostCard key={index} />
        ))}
      </section>
    </main>
  );
}
