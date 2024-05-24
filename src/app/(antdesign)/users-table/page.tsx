import MainSection from '@/components/sections/users-table/MainSection';
import { getDummyUsers } from '@/services/getDummyUsers';
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query';

export default async function page() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['dummyUsers'],
    queryFn: () => getDummyUsers(),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <MainSection />
    </HydrationBoundary>
  );
}
