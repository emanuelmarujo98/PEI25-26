import "leaflet/dist/leaflet.css"
import {
  MapContainer,
  TileLayer,
  Marker,
  Polyline,
  useMapEvents,
  useMap
} from "react-leaflet";

import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const correctIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const playerIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

function LocationMarker({ setPosition, confirmed }) {
  useMapEvents({
    click(e) {
      if (!confirmed) setPosition(e.latlng);
    },
  });
  
  return null;
}

function FitBounds({ position, correctPosition, confirmed }) {

  const map = useMap();

  if (
    confirmed &&
    position &&
    correctPosition
  ) {

    map.fitBounds([
      [position.lat, position.lng],
      [correctPosition.lat, correctPosition.lng]
    ]);
  }

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
        center={[40,10]}
        zoom={3.5}
        style={{ height: "100%", width: "100%" }}
        
    >
      
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      
      
      

      <FitBounds
         position={position}
         correctPosition={correctPosition}
         confirmed={confirmed}
      />

      <LocationMarker
        setPosition={setPosition}
        confirmed={confirmed}
      />

      {position && (
    <Marker
      position={[position.lat, position.lng]}
      icon={playerIcon}
    />
     )}

      {confirmed && (
        <Marker
          position={[
            correctPosition.lat,
            correctPosition.lng
          ]}
          icon={correctIcon}
        />
      )}

      {confirmed && position && (
        <Polyline
          positions={[
            [position.lat, position.lng],
            [correctPosition.lat, correctPosition.lng]
          ]}
        />
      )}
    </MapContainer>
  );
}