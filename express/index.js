const express    = require("express");
const bodyParser = require("body-parser");
const cors       = require("cors");
const errorhandler = require("errorhandler");

const app      = express();

// utilizado para pre-fetch
app.use(cors());
app.use(errorhandler());

// utilizado para converter body da requisição;
app.use(bodyParser.json());

const alunos = [
    { nome: "Roupa 1", imagem: "https://i.pinimg.com/236x/01/b4/16/01b416cfe07af46a68f14052a3878273.jpg" },
    { nome: "Roupa 2", imagem: "https://i.pinimg.com/originals/ed/ff/76/edff76e2f7b3f0bee123ae4205c049b1.jpg" },
    { nome: "Roupa 3", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTBqEAdjOVvfMAn2gsA2X0kBTLcTUFyZP1ycA&usqp=CAU" },
    { nome: "Roupa 4", imagem: "https://i.pinimg.com/originals/2e/e6/38/2ee63891538d1500518d25d5e39f93ab.jpg" }, 
    { nome: "Roupa 5", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ-NWyS96d7v6niZ8CPmF5ceMcLGbuHYS8lmg&usqp=CAU" }
];

app.get("/roupas", (req, res) => {
    res.send(alunos);
});

app.post("/roupas", (req, res) => {
    console.log(req.body);
    res.send(req.body);
});

app.listen(8080, () => {
    console.log("utilizando porta 8080");
});