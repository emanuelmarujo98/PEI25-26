import React, { useState } from "react";

function Register({ goToLogin }) {

    const [username, setUsername] =
        useState("");

    const [email, setEmail] =
        useState("");

    const [password, setPassword] =
        useState("");

    async function handleRegister() {

        try {

            const response = await fetch(
                "http://localhost:5000/auth/register",
                {
                    method: "POST",
                    headers: {
                        "Content-Type":
                            "application/json"
                    },
                    body: JSON.stringify({
                        username,
                        email,
                        password
                    })
                }
            );

            const data =
                await response.json();

            alert(data.message);

            goToLogin();

        } catch(error) {

            console.error(error);

        }

    }

    return (

        <div>

            <h1>Registo</h1>

            <input
                placeholder="Username"
                value={username}
                onChange={(e)=>
                    setUsername(e.target.value)
                }
            />

            <br /><br />

            <input
                placeholder="Email"
                value={email}
                onChange={(e)=>
                    setEmail(e.target.value)
                }
            />

            <br /><br />

            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e)=>
                    setPassword(e.target.value)
                }
            />

            <br /><br />

            <button
                onClick={handleRegister}
            >
                Criar Conta
            </button>

            <br /><br />

            <button
                onClick={goToLogin}
            >
                Voltar
            </button>

            <footer className="footer">
                Geoguessr OSINT © 2026
            </footer>

        </div>

    );

}

export default Register;