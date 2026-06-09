import React, { useEffect, useState } from "react";

function Achievements() {

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
        return <p>A carregar conquistas...</p>;
    }

    const achievements = [

        {
            title: "🥉 Primeiro Passo",
            description: "Completa o teu primeiro jogo.",
            current: stats.total_games,
            target: 1
        },

        {
            title: "🥈 Explorador",
            description: "Completa 10 jogos.",
            current: stats.total_games,
            target: 10
        },

        {
            title: "🌍 Viajante do Mundo",
            description: "Completa 25 jogos.",
            current: stats.total_games,
            target: 25
        },

        {
            title: "🚀 Lenda",
            description: "Completa 50 jogos.",
            current: stats.total_games,
            target: 50
        },

        {
            title: "🥇 Geógrafo Experiente",
            description: "Obtém uma pontuação superior a 15000.",
            current: stats.best_score || 0,
            target: 15000
        },

        {
            title: "👑 Mestre OSINT",
            description: "Obtém uma pontuação superior a 20000.",
            current: stats.best_score || 0,
            target: 20000
        },

        {
            title: "🎯 Atirador de Elite",
            description: "Obtém uma pontuação superior a 24000.",
            current: stats.best_score || 0,
            target: 24000
        },

        {
            title: "🔥 Consistente",
            description: "Mantém uma média superior a 15000 pontos.",
            current: Math.round(stats.average_score || 0),
            target: 15000
        }

    ];

    return (

        <div className="achievements">

            <h2>🏅 Conquistas</h2>

            {achievements.map((achievement, index) => {

                const unlocked =
                    achievement.current >= achievement.target;

                const progress = Math.min(
                    (achievement.current / achievement.target) * 100,
                    100
                );

                return (

                    <div
                        key={index}
                        className={
                            unlocked
                                ? "achievement unlocked"
                                : "achievement locked"
                        }
                    >

                        <h3>

                            {unlocked ? "✅" : "🔒"}{" "}

                            {achievement.title}

                        </h3>

                        <p>
                            {achievement.description}
                        </p>

                        <div className="achievement-progress-container">

                            <div
                                className="achievement-progress-bar"
                                style={{
                                    width: `${progress}%`
                                }}
                            />

                        </div>

                        <small>

                            {Math.min(
                                achievement.current,
                                achievement.target
                            )}
                            {" / "}
                            {achievement.target}

                        </small>

                    </div>

                );

            })}

        </div>

    );

}

export default Achievements;