import React, { useEffect, useState } from "react";

function Ranking() {

    const [ranking, setRanking] = useState([]);

    useEffect(() => {

        async function loadRanking() {

            try {

                const response = await fetch(
                    "http://localhost:5000/scores/ranking"
                );

                const data = await response.json();

                setRanking(data);

            } catch (error) {

                console.error(error);

            }

        }

        loadRanking();

    }, []);

    return (
        

        <div className="ranking-container">

            <h2>🏆 Top Jogadores</h2>

            {ranking.map((player, index) => (

                <div
                    key={index}
                    className="ranking-item"
                >

                    <span>
                        {index + 1}. {player.username}
                    </span>

                    <strong>
                        {player.best_score} pts
                    </strong>

                </div>

            ))}

        </div>

    );
}

export default Ranking;