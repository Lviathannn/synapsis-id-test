'use client';

import { Select } from 'antd';
import { useState } from 'react';
import dynamic from 'next/dynamic';
import MapSkeleton from './MapSkeleton';

interface DataType {
  properties: {
    id: number;
    name: string;
  };

  geometry: {
    type: string;
    coordinates: [number, number];
  };
}

type Props = {
  geoJson: DataType[];
};

const Map = dynamic(() => import('@/components/features/Map'), {
  ssr: false,
  loading: () => <MapSkeleton />,
});

export default function GeoJson({ geoJson }: Props) {
  const [selectedGeoJson, setSelectedGeoJson] = useState<DataType | undefined>(
    geoJson[0],
  );

  const handleChange = (value: string) => {
    const selected = geoJson.find(
      (data) => data.properties.id === Number(value),
    );
    setSelectedGeoJson(selected);
  };

  return (
    <div className="w-full space-y-10">
      <div className="flex justify-between">
        <h2 className="text-2xl font-medium">Pulau Pulau di Indonesia</h2>
        <Select
          placeholder="Pilih Pulau"
          style={{ width: 120, height: 40 }}
          onChange={handleChange}
          options={geoJson.map((data) => ({
            label: data.properties.name,
            value: data.properties.id,
          }))}
        />
      </div>
      <Map
        position={
          selectedGeoJson?.geometry.coordinates.toReversed() as [number, number]
        }
        className="h-[500px] z-0 w-full"
        zoom={5}
        marker
      />
    </div>
  );
}
