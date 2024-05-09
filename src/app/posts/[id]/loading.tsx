import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

type Props = {};

export default function loading({}: Props) {
  return (
    <main className="container py-20 space-y-10">
      <section className="max-w-4xl mx-auto space-y-10">
        <div className="w-full space-y-5">
          <Skeleton className="w-20 h-5 bg-primary" />
          <Skeleton className="w-full h-5 bg-accent" />
          <Skeleton className="w-[70%] h-5 bg-accent" />
          <div className="flex gap-3 items-center">
            <Skeleton className="w-8 h-8 bg-primary rounded-full" />
            <Skeleton className="w-20 h-5 bg-accent" />
          </div>
        </div>
        <Skeleton className="w-full h-[400px] rounded-xl bg-accent" />
        <div className="space-y-2">
          <Skeleton className="w-full h-5 bg-accent" />
          <Skeleton className="w-full h-5 bg-accent" />
          <Skeleton className="w-full h-5 bg-accent" />
          <Skeleton className="w-full h-5 bg-accent" />
        </div>
      </section>
    </main>
  );
}
