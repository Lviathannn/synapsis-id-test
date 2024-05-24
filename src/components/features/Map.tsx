'use client';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
type Props = {
  position: [number, number];
  zoom?: number;
  scrollWheelZoom?: boolean;
  className?: string;
  marker?: boolean;
};

import L from 'leaflet';

const customIcon = L.icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/128/447/447031.png',
  iconSize: [41, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

export default function Map({
  position,
  zoom,
  scrollWheelZoom,
  className,
  marker,
}: Props) {
  return (
    <MapContainer
      center={position as [number, number]}
      zoom={zoom || 5}
      scrollWheelZoom={scrollWheelZoom || true}
      className={className}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {marker && (
        <Marker
          position={position as [number, number]}
          icon={customIcon}
        ></Marker>
      )}
    </MapContainer>
  );
}
