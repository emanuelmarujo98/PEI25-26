import "leaflet/dist/leaflet.css"
import {
  MapContainer,
  TileLayer,
  Marker,
  useMapEvents,
} from "react-leaflet";

function LocationMarker({ setPosition, confirmed }) {
  useMapEvents({
    click(e) {
      if (!confirmed) setPosition(e.latlng);
    },
  });
  return null;
}

export default function MapComponent({
  position,
  setPosition,
  confirmed,
  correctPosition,
}) {
  return (
    <MapContainer
        center={[38.7223, -9.1393]}
        zoom={5}
        style={{ height: "100%", width: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      <LocationMarker
        setPosition={setPosition}
        confirmed={confirmed}
      />

      {position && <Marker position={position} />}
      {confirmed && <Marker position={correctPosition} />}
    </MapContainer>
  );
}