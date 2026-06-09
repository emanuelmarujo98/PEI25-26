import React, { useEffect, useState } from "react";

function History() {

    const [history, setHistory] = useState([]);

    useEffect(() => {

        async function fetchHistory() {

            const token = localStorage.getItem("token");
            
            if (!token) {
                alert("Faça login para ver o histórico de jogos!");
                return;
            }

            try {

                const response = await fetch(
                    "http://localhost:5000/scores/history",
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                );

                const data = await response.json();

                setHistory(data);

            } catch(error) {

                console.error(error);

            }

        }

        fetchHistory();

    }, []);

    return (

        <div className="history">

            <h2>📜 Histórico</h2>

            {history.map((game, index) => (

                <div key={index}>

                    <strong>
                        {game.score} pontos
                    </strong>

                    <br />

                    {new Date(
                        game.played_at
                    ).toLocaleString()}

                </div>

            ))}

        </div>

    );

}

export default History;
