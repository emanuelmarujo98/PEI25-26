import React, { useState } from "react";

function Login({ onLogin, goToRegister }) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleLogin() {

        try {

            const response = await fetch(
                "http://localhost:5000/auth/login",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        email,
                        password
                    })
                }
            );

            const data = await response.json();

            if (data.token) {

                localStorage.setItem(
                    "token",
                    data.token
                );

                localStorage.setItem(
                    "username",
                    data.username
                );

                onLogin();

            } else {

                alert(data.error);

            }

        } catch(error) {

            console.error(error);

        }

    }

    return (

        <div>

            <h1>Geoguessr OSINT</h1>

            <h2>Login</h2>

            <input
                type="email"
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

            <button onClick={handleLogin}>
                Login
            </button>

            <br /><br />

            <button onClick={goToRegister}>
                Registar
            </button>

            <footer className="footer">
                Geoguessr OSINT © 2026
            </footer>

        </div>

    );

}

export default Login;