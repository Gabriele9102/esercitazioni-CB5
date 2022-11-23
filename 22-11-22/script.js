"use strict";
import{sum , sub, mult, div} from "./calc.js";
import http from "http";
import url from "url";
import fs from "fs";

const server = http.createServer((req, res) => {
    const my_url = url.parse(req.url, true).pathname;
    const params = url.parse(req.url,true).query;
    const {param1, param2} = params;
    console.log(param1, param2);
    switch(my_url) {
        case "/style.css":
        const style = fs.readFileSync('./style.css');
        res.write(style.toString());
            break;
        case "/Calculator":
            const data = fs.readFileSync("./Calculator/index.html")
            res.write(data.toString())
            break

        case "/sum": 
        const dataSum = fs.readFileSync("./Calculator/sum.html")
            res.write(dataSum.toString())
            res.write(`${sum(param1,param2)}`);
            break
        case "/sub":
            const dataSub = fs.readFileSync("./Calculator/sub.html")
            res.write(dataSub.toString())
            res.write(`${sub(param1,param2)}`);
            break
        case "/mult":
            const dataMult = fs.readFileSync("./Calculator/mult.html")
            res.write(dataMult.toString())
            res.write(`${mult(param1,param2)}`);
            break
        case "/div":
            const dataDiv = fs.readFileSync("./Calculator/div.html")
            res.write(dataDiv.toString())
            res.write(`${div(param1,param2)}`);
            break
        default:
            res.write("<h1>Error</h1><p>The page not load, return to <a href='/Calculator'>Calculator<a></p>")
    }


    res.end();
});

server.listen(3000);



