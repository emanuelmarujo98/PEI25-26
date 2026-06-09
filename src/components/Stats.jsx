import React, { useEffect, useState } from "react";

function Stats() {

    const [stats, setStats] = useState(null);

    useEffect(() => {

        const token = localStorage.getItem("token");

        fetch(
            "http://localhost:5000/scores/stats",
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        )
        .then(res => res.json())
        .then(data => setStats(data))
        .catch(err => console.error(err));

    }, []);

    if (!stats) {
        return <p>A carregar estatísticas...</p>;
    }

    return (

        <div className="stats-container">

            <div className="stat-card">
                <h3>Jogos</h3>
                <p>{stats.total_games}</p>
            </div>

            <div className="stat-card">
                <h3>Melhor Pontuação</h3>
                <p>{stats.best_score || 0}</p>
            </div>

            <div className="stat-card">
                <h3>Média</h3>
                <p>
                    {stats.average_score
                        ? Number(stats.average_score).toFixed(0)
                        : 0}
                </p>
            </div>

        </div>

    );

}

export default Stats;