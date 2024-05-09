import Pagination from "@/components/features/Pagination";
import CreateUserSection from "@/components/sections/users/CreateUserSection";
import TableSection from "@/components/sections/users/TableSection";
import { getUsers } from "@/services/getUsers";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";

type Props = {
  searchParams?: {
    page: string;
  };
};

export default async function page({ searchParams }: Props) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["users", searchParams?.page || "1"],
    queryFn: () => getUsers(searchParams?.page || "1"),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <main className="container py-20 space-y-5">
        <CreateUserSection />
        <TableSection page={searchParams?.page || "1"} />
        <Pagination page={searchParams?.page || "1"} />
      </main>
    </HydrationBoundary>
  );
}
