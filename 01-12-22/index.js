const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;


app.listen(port, () => console.log(`Server acceso sulla porta ${port}!`));


app.use(express.static("public"));
app.use(express.urlencoded({extended: false}));


app.get("/attori", function (req, res) {
    res.sendFile("attori.html", {root: __dirname + "/src"})
});

app.get("/registi", function (req, res) {
    res.sendFile("registi.html", {root: __dirname + "/src"})
});




/*---------------------------------------------

     Chiamate GET/POST/PUT/DELETE (ATTORI/E)

----------------------------------------------*/

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
    if(isNaN(id_attore)){
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

app.post("/attore", function(req, res){
    if(req.body.nome == undefined || req.body.nome.length==0) {
        res.status(400).send("Nome attore mancante");
    }

    if(req.body.cognome == undefined || req.body.cognome.length==0) {
        res.status(400).send("Cognome attore mancante");
    }

    const nuovo_attore = {
        "nome": req.body.nome,
        "cognome": req.body.cognome,
        "data_nascita": req.body.data_nascita == undefined ? '' : req.body.data_nascita,
        "riconoscimenti": req.body.riconoscimenti == undefined ? '' : req.body.riconoscimenti,
        "inizio_attivita": req.body.inizio_attivita == undefined ? '' : req.body.inizio_attivita,
        "fine_attivita": req.body.fine_attivita == undefined ? '' : req.body.fine_attivita,
        "in_attivita": req.body.in_attivita == undefined ? '' : req.body.in_attivita
    }
    // -------------lettura dati da file ---------------------
    const attori_text = fs.readFileSync('./src/attori.json', 'utf8');
    const attori = JSON.parse(attori_text);
    // ---------------------------------------------

    // trova il primo id
    const arr_map = attori.map(attore => attore.id);
    const id_max = Math.max(...arr_map);
    nuovo_attore.id = id_max +1;

    // trova la prima posizione disponibile
    const index = attori.length;
    attori[index] = nuovo_attore;
    fs.writeFileSync('./src/attori.json',JSON.stringify(attori));
    res.status(200).send("Attore creato");
});

app.put("/attore", function(req, res){
    
    if (req.body.nome == undefined){
        res.status(400).send("Parametro nome mancante!");
    }

    if (req.body.cognome == undefined){
        res.status(400).send("Parametro cognome mancante!");
    }

    const nuovo_attore = {
        "id": req.body.id == undefined ? '' : parseInt(req.body.id),
        "nome": req.body.nome,
        "cognome": req.body.cognome,
        "data_nascita": req.body.data_nascita == undefined ? '' : req.body.data_nascita,
        "riconoscimenti": req.body.riconoscimenti == undefined ? '' : req.body.riconoscimenti,
        "inizio_attivita": req.body.inizio_attivita == undefined ? '' : req.body.inizio_attivita,
        "fine_attivita": req.body.fine_attivita == undefined ? '' : req.body.fine_attivita,
        "in_attivita": req.body.in_attivita == undefined ? '' : req.body.in_attivita
    }
    // -------------lettura dati da file ---------------------
    const attori_text = fs.readFileSync('./src/attori.json', 'utf8');
    const attori = JSON.parse(attori_text);
    // ---------------------------------------------
    
    // trovare e cancellare l'elemento
    const index = attori.findIndex((attore) => {
        return attore.id === nuovo_attore.id
    });


    if(index >0) {
        attori.splice(index, 1, nuovo_attore);

        fs.writeFileSync('./src/attori.json',JSON.stringify(attori));

        res.status(200).send("Attore aggiornato");
    } else {
        res.status(200).send("Attore non trovato");
    }

});

app.delete("/attore", function(req, res){
   
    // ricevo l'id
    if (req.body.id === undefined){
        res.status(400).send("Parametro id mancante!");
    }
    if (isNaN(parseInt(req.body.id))) {
        res.status(400).send("Parametro non numerico!");
    }

    const id_da_cancellare = req.body.id;

    // -------------lettura dati da file ---------------------
    const attori_text = fs.readFileSync('./src/attori.json', 'utf8');
    const attori = JSON.parse(attori_text);
    // ---------------------------------------------
    
    // verifico che l'elemento esista
    const attr = attori.filter((attore)=>{
        return attore.id == id_da_cancellare;
    });

    // se l'elemento esiste lo cancello
    if (attr.length > 0) {
        const array_deleted = attori.filter((attore)=>{
            return attore.id != id_da_cancellare;
        });
        fs.writeFileSync('./src/attori.json',JSON.stringify(array_deleted));
        res.status(200).send("Attore cancellato");
    } else {
        res.status(200).send("Attore da cancellare non trovato");
    }
});

  
 




/*---------------------------------------------------

    Chiamate GET/POST/PUT/DELETE (REGISTI/E)

-----------------------------------------------------*/




app.get("/registi", function(req, res){
    const registi_text = fs.readFileSync("./src/registi.json", "utf8");
    const registi = JSON.parse(registi_text)

    const arr_registi = registi.map((regist) => {
        const id = att.id;
        const nome = att.nome;
        const cognome = att.cognome;
        const data_nascita = att.data_nascita

        return {id, nome, cognome, data_nascita}
    });

    res.json(arr_registi)
});


app.get("/regista", function(req, res){
    const id_registi = parseInt(req.query.id)
    if(isNaN(id_registi)){
        res.status(400).send("Parametro mancante");
    }

    const registi_text = fs.readFileSync(".src/registi.json", "utf8")
    const registi = JSON.parse(registi_text);

    const regist = registi.find((registi) => {
        return registi.id == id_registi;
    });

    if(typeof regist === "undefined"){
        res.status(400).send("Attore non trovato!");
    } else{
        res.json(regist);
    }
});

app.post("/regista", function(req, res){
    
    if(req.body.nome == undefined || req.body.nome.length==0) {
        res.status(400).send("Nome regista mancante");
    }

    if(req.body.cognome == undefined || req.body.cognome.length==0) {
        res.status(400).send("Cognome regista mancante");
    }

    const nuovo_regista = {
        "nome": req.body.nome,
        "cognome": req.body.cognome,
        "data_nascita": req.body.data_nascita == undefined ? '' : req.body.data_nascita,
        "riconoscimenti": req.body.riconoscimenti == undefined ? '' : req.body.riconoscimenti,
        "inizio_attivita": req.body.inizio_attivita == undefined ? '' : req.body.inizio_attivita,
        "fine_attivita": req.body.fine_attivita == undefined ? '' : req.body.fine_attivita,
        "in_attivita": req.body.in_attivita == undefined ? '' : req.body.in_attivita
    }
    // -------------lettura dati da file ---------------------
    const registi_text = fs.readFileSync('./src/registi.json', 'utf8');
    const registi = JSON.parse(registi_text);
    // ---------------------------------------------

    // trova il primo id
    const arr_map2 = registi.map(regista => regista.id);
    const id_max2 = Math.max(...arr_map2);
    nuovo_regista.id = id_max2 +1;

    // trova la prima posizione disponibile
    const index2 = registi.length;
    registi[index2] = nuovo_regista;
    fs.writeFileSync('./src/registi.json',JSON.stringify(registi));
    res.status(200).send("regista creato");
});

app.put("/regista", function(req, res){
    
    if (req.body.nome == undefined){
        res.status(400).send("Parametro nome mancante!");
    }

    if (req.body.cognome == undefined){
        res.status(400).send("Parametro cognome mancante!");
    }

    const nuovo_regista = {
        "id": req.body.id == undefined ? '' : parseInt(req.body.id),
        "nome": req.body.nome,
        "cognome": req.body.cognome,
        "data_nascita": req.body.data_nascita == undefined ? '' : req.body.data_nascita,
        "riconoscimenti": req.body.riconoscimenti == undefined ? '' : req.body.riconoscimenti,
        "inizio_attivita": req.body.inizio_attivita == undefined ? '' : req.body.inizio_attivita,
        "fine_attivita": req.body.fine_attivita == undefined ? '' : req.body.fine_attivita,
        "in_attivita": req.body.in_attivita == undefined ? '' : req.body.in_attivita
    }
    // -------------lettura dati da file ---------------------
    const registi_text = fs.readFileSync('./src/registi.json', 'utf8');
    const registi = JSON.parse(registi_text);
    // ---------------------------------------------
    
    // trovare e cancellare l'elemento
    const index = registi.findIndex((regista) => {
        return regista.id === nuovo_regista.id
    });

    if(index >0) {
        attori.splice(index, 1, nuovo_regista);

        fs.writeFileSync('./src/registi.json',JSON.stringify(registi));

        res.status(200).send("Regista aggiornato");
    } else {
        res.status(200).send("Regista non trovato");
    }

});

app.delete("/regista", function(req, res){
    // ricevo l'id
    if (req.body.id === undefined){
        res.status(400).send("Parametro id mancante!");
    }
    if (isNaN(parseInt(req.body.id))) {
        res.status(400).send("Parametro non numerico!");
    }

    const id_da_cancellare2 = req.body.id;

    // -------------lettura dati da file ---------------------
    const registi_text = fs.readFileSync('./src/registi.json', 'utf8');
    const registi = JSON.parse(registi_text);
    // ---------------------------------------------
    
    // verifico che l'elemento esista
    const regist = registi.filter((regista)=>{
        return regista.id == id_da_cancellare2;
    });

    // se l'elemento esiste lo cancello
    if (regist.length > 0) {
        const array_deleted2 = registi.filter((regista)=>{
            return regista.id != id_da_cancellare2;
        });
        fs.writeFileSync('./src/registi.json',JSON.stringify(array_deleted2));
        res.status(200).send("Regista cancellato");
    } else {
        res.status(200).send("Regista da cancellare non trovato");
    }
});
