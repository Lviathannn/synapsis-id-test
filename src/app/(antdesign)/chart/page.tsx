import MainSection from '@/components/sections/chart/MainSection';
import { getChartData } from '@/services/getChartData';
import { QueryClient } from '@tanstack/react-query';

type Props = {};

export default async function page({}: Props) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['chartData'],
    queryFn: () => getChartData(),
  });
  return <MainSection />;
}
