import { Skeleton } from '../ui/skeleton';

type Props = {};

export default function MapSkeleton({}: Props) {
  return <Skeleton className="bg-accent rounded-none w-full h-[500px]" />;
}
