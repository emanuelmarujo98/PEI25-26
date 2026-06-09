import "./App.css";
import React, { useState } from "react";
import locations from "./data/locations";
import { getDistance } from "./utils/distance";
import MapComponent from "./components/Map";
import ImageDisplay from "./components/imageDisplay";
import Ranking from "./components/Ranking";
import History from "./components/History";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Stats from "./components/Stats";
import Home from "./pages/Home";
import {useEffect} from "react";
import Achievements from "./components/Achievements";

function shuffleArray(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

function App() {
  const [position, setPosition] = useState(null);
  const [confirmed, setConfirmed] = useState(false);
  const [distance, setDistance] = useState(null);
  const [score, setScore] = useState(null);
  const [round, setRound] = useState(1);
  const [totalScore, setTotalScore] = useState(0);
  const [gameFinished, setGameFinished] = useState(false);
  const [shuffledLocations, setShuffledLocations] = useState(
  shuffleArray(locations));

  const [currentIndex, setCurrentIndex] = useState(0);

  const currentLocation = shuffledLocations[currentIndex];

  const correctPosition = {
    lat: currentLocation.lat,
    lng: currentLocation.lng,
  };
  const [hintLevel, setHintLevel] = useState(0);
  const [usedHints, setUsedHints] = useState(0);
  
  const [loggedIn, setLoggedIn] = useState(
  !!localStorage.getItem("token"));

  const [showRegister, setShowRegister] = useState(false);
  const [zoomImage, setZoomImage] = useState(false);
  const [inGame, setInGame] = useState(false);
  const[timeLeft, setTimeLeft] = useState(60);
  const [pointsAnimation, setPointsAnimation] = useState(null);
  const [newAchievements, setNewAchievements] = useState([]);
  const [showAchievementPopup, setShowAchievementPopup] = useState(false);

  useEffect(() => {

  if (!inGame) return;

  if (confirmed || gameFinished) return;

  const timer = setInterval(() => {

    setTimeLeft(prev => {

      if (prev <= 1) {

        clearInterval(timer);

        handleTimeExpired();

        return 0;
      }

      return prev - 1;

    });

  }, 1000);

  return () => clearInterval(timer);

}, [confirmed, round, inGame, gameFinished]);

  if (!loggedIn) {

  if (showRegister) {

    return (
      <Register
        goToLogin={() =>
          setShowRegister(false)
        }
      />
    );

  }

  return (
    <Login
      onLogin={() =>
        setLoggedIn(true)
      }
      goToRegister={() =>
        setShowRegister(true)
      }
    />
  );

  }

if (!inGame) {

  return (
    <Home
      startGame={() => setInGame(true)}
    />
);

}

function handleTimeExpired() {

  setScore(0);

  setDistance(9999);

  setConfirmed(true);

}

function handleHint() {

  if (hintLevel < currentLocation.hints.length) {
    setHintLevel(prev => prev + 1);
    setUsedHints(prev => prev + 1);
  }

}

function handleConfirm() {
  if (position) {
    const dist = getDistance(
      position.lat,
      position.lng,
      correctPosition.lat,
      correctPosition.lng
    );

    setDistance(dist);

    let points;

    if (dist < 1) points = 5000;
    else if (dist < 10) points = 4000;
    else if (dist < 50) points = 3000;
    else if (dist < 200) points = 2000;
    else if (dist < 500) points = 1000;
    else points = 0;         
    
    points = points - (usedHints * 250);

    if (points < 0) {
    points = 0;
}
    
    setScore(points);
    setTotalScore(prev => prev + points);
    setConfirmed(true);
    setPointsAnimation(`+${points}`);

    setTimeout(() => {
      setPointsAnimation(null);
    }, 2000);
  }
}

function resetGame() {

  setRound(1);

  setTotalScore(0);

  setCurrentIndex(0);

  setPosition(null);

  setConfirmed(false);

  setDistance(null);

  setScore(null);

  setHintLevel(0);

  setUsedHints(0);

  setGameFinished(false);

  setTimeLeft(60);

  setShuffledLocations(
    shuffleArray(locations)
  );

}

  function handleReset() {

  if (round === 5) {

    const unlocked = [];

    if (totalScore >= 15000) {
      unlocked.push("🥇 Geógrafo Experiente");
    }

    if (totalScore >= 20000) {
      unlocked.push("👑 Mestre OSINT");
    }

    if (totalScore >= 24000) {
      unlocked.push("🎯 Atirador de Elite");
    }

    setNewAchievements(unlocked);

    if (unlocked.length > 0) {
      setShowAchievementPopup(true);
    }

    saveScore(totalScore);
    setGameFinished(true);

    return;
  }

  setRound(prev => prev + 1);

  setPosition(null);
  setConfirmed(false);
  setDistance(null);
  setScore(null);

  setHintLevel(0);
  setUsedHints(0);
  setTimeLeft(60);

  setCurrentIndex(prev => prev + 1);

  }

async function saveScore(points) {

  const token = localStorage.getItem("token");

  if (!token) {
    console.log("Utilizador não autenticado");
    return;
  }

  try {

    const response = await fetch(
      "http://localhost:5000/scores/save",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          score: points
        })
      }
    );

    const data = await response.json();

    console.log(data);

  } catch(error) {

    console.error(error);

  }

}
let medal = "";
let medalMessage = "";

if (totalScore >= 22000) {

  medal = "🥇";
  medalMessage = "Mestre Geógrafo";

} else if (totalScore >= 15000) {

  medal = "🥈";
  medalMessage = "Excelente Desempenho";

} else if (totalScore >= 8000) {

  medal = "🥉";
  medalMessage = "Bom Trabalho";

} else {

  medal = "📍";
  medalMessage = "Continua a Explorar";

}

if (gameFinished) {

  return (

    <div className="end-game">

      <h1>🏆 Jogo Terminado</h1>

      <div className="medal-card">

        <h1 className="medal-icon">
          {medal}
        </h1>

        <h2>
          {medalMessage}
        </h2>

      </div>

      <div className="score-card">

        <h3>Pontuação Final</h3>

        <h1>{totalScore}</h1>

      </div>

      {showAchievementPopup && (

      <div className="achievement-popup">

        <h2>🏅 Novas Conquistas!</h2>

        {newAchievements.map((achievement, index) => (

          <p key={index}>
            {achievement}
          </p>

        ))}

      </div>

      )}

      <div className="end-buttons">

        <button
          onClick={() => {

            resetGame();

            setInGame(true);

          }}
        >
          🔄 Jogar Novamente
        </button>

        <button
          onClick={() => {

            resetGame();

            setInGame(false);

          }}
        >
          🏠 Voltar à Home
        </button>

      </div>

      <div className="dashboard">

        <Stats />

        <Ranking />

        <Achievements />

      </div>

      
      <footer className="footer">
        Geoguessr OSINT © 2026
      </footer>

  
      

    </div>

  );

}

  return (
  <div className="app">
    <div className="navbar">

      <h1>🌍 Geoguessr OSINT</h1>

      <div className="user-section">

      <span>
        Bem-vindo, {localStorage.getItem("username")}
      </span>

     <button
        className="logout-btn"
        onClick={() => {

          localStorage.removeItem("token");
          localStorage.removeItem("username");

          window.location.reload();

        }}
      >
        Logout
      </button>

      </div>

    </div>

    <h2>Ronda {round}/5</h2>
    <div className="progress-container">
      <div
        className="progress-bar"
        style={{
      
          width: `${(round / 5) * 100}%`
        }}
      />
    </div>
    <h2>Pontuação Total: {totalScore}</h2>

    <h2>⏱️ Tempo: {timeLeft}s</h2>

    <div className="game-layout">

  <div className="image-panel">

    <div onClick={() => setZoomImage(true)}>
      <ImageDisplay image={currentLocation.image} />
    </div>

    <div className="hints">

      {currentLocation.hints
        .slice(0, hintLevel)
        .map((hint, index) => (
          <p key={index}>💡 {hint}</p>
      ))}

    </div>

    <button
      onClick={handleHint}
      disabled={
        hintLevel >= currentLocation.hints.length ||
        confirmed
      }
    >
      💡 Pedir Dica
    </button>

    

  </div>

  <div className="map-panel">

    <MapComponent
      key={round}
      position={position}
      setPosition={setPosition}
      confirmed={confirmed}
      correctPosition={correctPosition}
    />

  </div>

</div>

    <div className="buttons">
      <button onClick={handleConfirm} disabled={!position || confirmed}>
        Confirmar
      </button>

      <button
        onClick={handleReset}
        disabled={!confirmed}
      >
        {round === 5 ? "Terminar Jogo" : "Próxima Ronda"}
      </button>
    </div>

    {zoomImage && (
  <div
    className="image-modal"
    onClick={() => setZoomImage(false)}
  >

    <img
      src={currentLocation.image}
      alt={currentLocation.name}
      className="zoomed-image"
    />

  </div>
  )}

  {pointsAnimation && (

  <div className="points-popup">

    {pointsAnimation}

  </div>

)}

      {confirmed && (
        <div className="result">
          <p>Distância: {distance.toFixed(2)} km</p>
          <p>Local correto: {currentLocation.name}</p>
          <p>Dicas Usadas: {usedHints} </p>
          <h2>Pontuação: {score}</h2>
        </div>
      )}

     
     <footer className="footer">
      Geoguessr OSINT © 2026
    </footer>

  </div>
    
  );

  
}

export default App;