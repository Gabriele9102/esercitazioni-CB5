const { json } = require("body-parser");
const express = require("express");
const app = express();


const calcolatrice = require("./src/modulo_calcolatrice"); 


app.use(express.static("public"));
app.use(express.urlencoded({extended: false}));

app.listen(3000, ()=>{
    console.log("Server avviato sulla porta 3000");
});


app.get("/home", function (req, res) {
    res.sendFile("index.html", {root: __dirname + "/src"})
});

app.get("/calcolatrice" , function(req, res) {
    console.log(req.query);
    let par1 =  req.query.param1;
    let par2 = req.query.param2;
    let par3 = req.query.param3;
    let result;

    switch (par3) {
        case "somma": result = calcolatrice.somma(par1, par2);
                      res.status(200).json({risultato: result});
            break;
        case "sottrazione": result = calcolatrice.sottrazione(par1, par2);
                            res.status(200).json({risultato: result});
            break;
        case "moltiplicazione": result = calcolatrice.moltiplicazione(par1, par2);
                                res.status(200).json({risultato: result});
            break;
        case "divisione": result = calcolatrice.divisione(par1, par2);
                          res.status(200).json({risultato: result});
            break;
        case "modulo": result = calcolatrice.modulo(par1, par2);
                       res.status(200).json({risultato: result});
            break;
        default: console.log("Orrore! ops.. Errore!");
    }
});