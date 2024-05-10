import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

type Props = {
  page: string;
};

export default function Pagination({ page }: Props) {
  return (
    <div className="flex gap-3 max-w-xs mx-auto items-center">
      <Button variant="ghost" className="w-full" disabled={Number(page) <= 1}>
        <Link
          href={`?page=${Number(page) - 1}`}
          className="flex gap-3 items-center"
          scroll={false}
        >
          <ChevronLeft size={20} />
          Previous
        </Link>
      </Button>
      <div className="size-9 flex items-center justify-center bg-accent rounded-sm aspect-square">
        {page}
      </div>
      <Button
        variant="ghost"
        className="w-full"
        disabled={Number(page) === 10}
        asChild
      >
        <Link
          href={`?page=${Number(page) + 1}`}
          className="flex gap-3 items-center"
          scroll={false}
        >
          Next
          <ChevronRight size={20} />
        </Link>
      </Button>
    </div>
  );
}
