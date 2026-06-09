import "./App.css";
import React, { useState } from "react";
import locations from "./data/locations";
import { getDistance } from "./utils/distance";
import MapComponent from "./components/Map";
import ImageDisplay from "./components/imageDisplay";

function App() {
  const [position, setPosition] = useState(null);
  const [confirmed, setConfirmed] = useState(false);
  const [distance, setDistance] = useState(null);

  const [currentLocation, setCurrentLocation] = useState(
    locations[Math.floor(Math.random() * locations.length)]
  );

  const correctPosition = {
    lat: currentLocation.lat,
    lng: currentLocation.lng,
  };

  function handleConfirm() {
    if (position) {
      const dist = getDistance(
        position.lat,
        position.lng,
        correctPosition.lat,
        correctPosition.lng
      );
      setDistance(dist);
      setConfirmed(true);
    }
  }

  function handleReset() {
    setPosition(null);
    setConfirmed(false);
    setDistance(null);

    const random =
      locations[Math.floor(Math.random() * locations.length)];
    setCurrentLocation(random);
  }

  return (
  <div className="app">
    <h1>Geoguessr OSINT</h1>

    <div className="image-container">
      <ImageDisplay image={currentLocation.image} />
    </div>

    <div className="map-container">
      <MapComponent
        position={position}
        setPosition={setPosition}
        confirmed={confirmed}
        correctPosition={correctPosition}
      />
    </div>

    <div className="buttons">
      <button onClick={handleConfirm} disabled={!position || confirmed}>
        Confirmar
      </button>

      <button onClick={handleReset}>
        Nova ronda
      </button>
    </div>

    {confirmed && (
      <div className="result">
        <p>Distância: {distance.toFixed(2)} km</p>
        <p>Local correto: {currentLocation.name}</p>
      </div>
    )}
  </div>
);
}

export default App;