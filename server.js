let express = require("express");
let ejs = require("ejs");
let body_parser = require("body-parser");
let rotues = require("./routes/routes").router;
const helmet = require("helmet");
//let mysql = require("mysql");

ejs.cache = null;

let app = express();

app.set("view engine", ejs);
app.use(body_parser.urlencoded({extended:true}));
app.use(express.static('public'));
app.use(helmet())
app.set("views" + __dirname +"/views");
app.use("/", rotues);
app.listen(port = 4001, () => {
    console.log("http://localhost:4001");
    
})
