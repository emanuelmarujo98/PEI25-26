const express = require("express");
const cors = require("cors");
const scoresRoutes = require("./routes/scores");

const authRoutes = require("./routes/auth");

require("./database/db");

const app = express();


app.use(cors());
app.use(express.json());
app.use("/auth", authRoutes);
app.use("/scores", scoresRoutes);

app.get("/", (req,res)=>{
    res.json({
        message:"API GeoGuessr OSINT ativa"
    });
});

app.listen(5000, ()=>{
    console.log("Servidor ativo na porta 5000");
});