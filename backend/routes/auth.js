const express = require("express");
const bcrypt = require("bcrypt");
const db = require("../database/db");

const router = express.Router();



router.post("/register", async (req, res) => {
    
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({
            error: "Todos os campos são obrigatórios"
        });
    }

    try {

        const hashedPassword = await bcrypt.hash(password, 10);

        db.run(
            `
            INSERT INTO users(username,email,password)
            VALUES(?,?,?)
            `,
            [username, email, hashedPassword],
            function(err){

                if(err){
                    return res.status(400).json({
                        error: err.message
                    });
                }

                res.status(201).json({
                    message: "Utilizador criado",
                    userId: this.lastID
                });

            }
        );

    } catch(error){

        res.status(500).json({
            error: error.message
        });

    }

});

const jwt = require("jsonwebtoken");

router.post("/login", (req, res) => {

    const { email, password } = req.body;

    db.get(
        `
        SELECT * FROM users
        WHERE email = ?
        `,
        [email],
        async (err, user) => {

            if (err) {
                return res.status(500).json(err);
            }

            if (!user) {
                return res.status(401).json({
                    error: "Utilizador não encontrado"
                });
            }

            const validPassword =
                await bcrypt.compare(password, user.password);

            if (!validPassword) {
                return res.status(401).json({
                    error: "Password incorreta"
                });
            }

            const token = jwt.sign(
                {
                    id: user.id,
                    username: user.username
                },
                "segredo_geoguessr",
                {
                    expiresIn: "24h"
                }
            );

            res.json({
                token,
                username: user.username
            });

        }
    );

});

module.exports = router;