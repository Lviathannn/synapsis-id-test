import GeoJson from '@/components/features/GeoJson';
import MapSkeleton from '@/components/features/MapSkeleton';
import { getGeoJson } from '@/services/getGeoJson';
import dynamic from 'next/dynamic';

const Map = dynamic(() => import('@/components/features/Map'), {
  ssr: false,
  loading: () => <MapSkeleton />,
});

export default async function page() {
  const indonesiaCenterPosition = [-2.5489, 118.0149];
  const worldCenterPosition = [20, 0];
  const geoJson = await getGeoJson();

  return (
    <main className="container min-h-screen flex justify-center items-center flex-col gap-20 py-20">
      <div className="flex flex-col justify-center items-center w-full gap-10">
        <h2 className="text-3xl font-medium">Map Indonesia</h2>
        <Map
          position={indonesiaCenterPosition as [number, number]}
          className="h-[500px] z-0 w-full"
          zoom={5}
        />
      </div>
      <div className="flex flex-col justify-center items-center w-full gap-10">
        <h2 className="text-3xl font-medium">Map Dunia</h2>
        <Map
          position={worldCenterPosition as [number, number]}
          className="h-[500px] z-0 w-full"
          zoom={2}
        />
      </div>
      {geoJson && <GeoJson geoJson={geoJson} />}
    </main>
  );
}
