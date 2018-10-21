const mysql = require("mysql");
const fs = require("fs");

let conn = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '29993!',
    database : 'economy'
});
conn.connect();

conn.query("SELECT * FROM entering", (err, res,fildes)=>{

    //qureing the data and returing it as json file, to be get;

   fs.writeFileSync(__dirname+"/files/file.json", JSON.stringify(res));


   /* fs.writeFileSync("/json/file.json", JSON.stringify(res)) */

});
module.exports = conn;

