import React from "react";
import Stats from "../components/Stats";
import Ranking from "../components/Ranking";
import Achievements from "../components/Achievements";

function Home({ startGame }) {

    const username =
        localStorage.getItem("username");

    return (
        <div className="home-page">

            <div className="home-header">

                <div>
                    <h1>🌍 Geoguessr OSINT</h1>
                    <p>
                        Descobre localizações através
                        de pistas visuais
                    </p>
                </div>

                <div className="user-info">

                    <span>
                        Bem-vindo, {username}
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
            <div className="hero">

                <h1>🌎 Explora o Mundo</h1>

                <p>
                    Analisa imagens, utiliza pistas e tenta
                    descobrir a localização correta.
                </p>

            </div>
            <div className="play-section">

                <button
                    className="play-btn"
                    onClick={startGame}
                >
                    ▶ Jogar
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



export default Home;