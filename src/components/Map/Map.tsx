import { LatLngLiteral } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import React, { useState } from 'react';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';

const Map = () => {
  const [geoData, setGeoData] = useState<LatLngLiteral>({
    lat: 36.65,
    lng: 52.5,
  });

  React.useEffect(() => {
    const L = require('leaflet');

    delete L.Icon.Default.prototype._getIconUrl;

    L.Icon.Default.mergeOptions({
      iconRetinaUrl: '/images/leaflet/marker-icon-2x.png',
      iconUrl: '/images/leaflet/marker-icon.png',
      shadowUrl: '/images/leaflet/marker-shadow.png',
    });
  }, []);

  return (
    <MapContainer
      center={geoData}
      zoom={12}
      style={{ height: '568px', width: '852px' }}
      className='z-0'
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      {geoData.lat && geoData.lng && (
        <Marker position={[geoData.lat, geoData.lng]} draggable={true} />
      )}
    </MapContainer>
  );
};

export default Map;
