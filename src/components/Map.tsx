import { LatLngLiteral } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useState } from 'react';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';

const Map = () => {
  const [geoData, setGeoData] = useState<LatLngLiteral>({
    lat: 64.536634,
    lng: 16.779852,
  });

  return (
    <MapContainer center={geoData} zoom={12} style={{ height: '100vh' }}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      {geoData.lat && geoData.lng && (
        <Marker position={[geoData.lat, geoData.lng]} />
      )}
    </MapContainer>
  );
};

export default Map;
