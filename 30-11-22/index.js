
//-------------------------------------------------------------------------------------------------------------------------------------------------

const express = require("express");
const fs = require ("fs")

const app = express()

app.use(express.static("public"))

app.listen(3000, () => {
    console.log("Server acceso")
})

//--------------------------------------------------------------------------------------------------------------------------------------------------

app.get("/home", function (req, res) {
    res.sendFile("index.html", {root: __dirname + "/src"})
});

app.get("/attori", function(req, res){
    const attori_text = fs.readFileSync("./src/attori.json", "utf8");
    const attori = JSON.parse(attori_text)

    const arr_attori = attori.map((att) => {
        const id = att.id;
        const nome = att.nome;
        const cognome = att.cognome;
        const data_nascita = att.data_nascita

        return {id, nome, cognome, data_nascita}
    });

    res.json(arr_attori)
});

app.get("/attore", function(req, res){
    const id_attore = parseInt(req.query.id)
    if(isNan(id_attore)){
        res.status(400).send("Parametro mancante");
    }

    const attori_text = fs.readFileSync(".src/attori.json", "utf8")
    const attori = JSON.parse(attori_text);

    const attr = attori.find((attore) => {
        return attore.id == id_attore;
    });

    if(typeof attr === "undefined"){
        res.status(400).send("Attore non trovato!");
    } else{
        res.json(attr);
    }
});

app.post("/attore", function (req, res) {
    if (req.body.nome == undefined) {
      res.status(404).json({ error: "not found" });
    }
    if (req.body.cognome == undefined) {
      res.status(400).json({ error: "not found" });
    }
    const nuovoAttore = {
      id: req.body.id == undefined ? "" : parseInt(req.body.id),
      nome: req.body.nome,
      cognome: req.body.cognome,
      data_nascita:
        req.body.data_nascita == undefined ? "" : req.body.data_nascita,
      riconoscimenti:
        req.body.riconoscimenti == undefined ? "" : req.body.riconoscimenti,
      inizio_attivita:
        req.body.inizio_attivita == undefined ? "" : req.body.inizio_attivita,
      fine_attivita:
        req.body.fine_attivita == undefined ? "" : req.body.fine_attivita,
      in_attivita: req.body.in_attivita == undefined ? "" : req.body.in_attivita,
    };
    const attori = readData();
    const index = Number(nuovoAttore.id) - 1;
    console.log("Nuovo indice: " + index);
    attori[index] = nuovoAttore;
    console.log(attori);
    fs.writeFileSync("./src/attori.json", JSON.stringify(attori));
    res.status(200).send("Attore creato");
  });
  
  app.delete("/attore", function (req, res) {
    if (req.body.id === undefined) {
      res.status(400).json({ error: "not found" });
    }
    if (isNaN(parseInt(req.body.id))) {
      res.status(400).json({ error: "not found" });
    }
    const deleteId = req.body.id;
    const attori = readData();
    const attoriArr = attori.filter((attore) => {
      return attore.id == deleteId;
    });
    if (attoriArr.length > 0) {
      const deleteArr = attori.filter((attore) => {
        return attore.id != deleteId;
      });
      fs.writeFileSync("./src/attori.json", JSON.stringify(deleteArr));
      res.status(200).json({ res: "attore cancellato" });
    } else {
      res.status(200).json({ res: "attore da cancellare non trovato" });
    }
  });