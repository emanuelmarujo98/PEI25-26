const express = require("express");
const db = require("../database/db");

const router = express.Router();
const jwt = require("jsonwebtoken");

function verifyToken(req, res, next) {

    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({
            error: "Token não fornecido"
        });
    }

    const token = authHeader.split(" ")[1];

    try {

        const decoded = jwt.verify(
            token,
            "segredo_geoguessr"
        );

        req.user = decoded;

        next();

    } catch {

        return res.status(403).json({
            error: "Token inválido"
        });

    }

}

router.post(
    "/save",
    verifyToken,
    (req, res) => {

        const { score } = req.body;

        db.run(
            `
            INSERT INTO game_results
            (user_id, score)
            VALUES (?, ?)
            `,
            [req.user.id, score],
            function(err) {

                if(err){
                    return res.status(500).json(err);
                }

                res.json({
                    message: "Score guardado",
                    id: this.lastID
                });

            }
        );

    }
);

router.get("/ranking", (req, res) => {

    db.all(
        `
        SELECT
            users.username,
            MAX(game_results.score) AS best_score
        FROM game_results
        JOIN users
            ON users.id = game_results.user_id
        GROUP BY users.id
        ORDER BY best_score DESC
        LIMIT 10
        `,
        [],
        (err, rows) => {

            if (err) {
                return res.status(500).json(err);
            }

            res.json(rows);

        }
    );
}
);
router.get(
    "/history",
    verifyToken,
    (req, res) => {

        db.all(
            `
            SELECT
                score,
                played_at
            FROM game_results
            WHERE user_id = ?
            ORDER BY played_at DESC
            `,
            [req.user.id],
            (err, rows) => {

                if(err){
                    return res.status(500).json(err);
                }

                res.json(rows);

            }
        );

    }
);

router.get(
  "/stats",
  verifyToken,
  (req, res) => {

    db.get(
      `
      SELECT
        COUNT(*) AS total_games,
        MAX(score) AS best_score,
        AVG(score) AS average_score
      FROM game_results
      WHERE user_id = ?
      `,
      [req.user.id],
      (err, row) => {

        if (err) {
          return res.status(500).json(err);
        }

        res.json(row);

      }
    );

  }
);


module.exports = router;