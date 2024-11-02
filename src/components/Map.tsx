import { TileLayer, MapContainer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

L.Marker.prototype.options.icon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
});

const center = { lat: 13.736717, lng: 100.523186 };

export default function Map() {
  function onEachFeature(feature: any, layer: L.Layer) {
    if (feature.properties) {
      const { popupContent } = feature.properties;
      layer.bindPopup(popupContent);
    }
  }

  return (
    <MapContainer style={{ height: '70vh', width: 'auto' }} center={center} zoom={15}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={center}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}
