 let router = require("express").Router();
let fs = require("fs");
let conn = require("../db/db");

conn.query("SELECT * FROM entering", (err, res,fildes)=>{

    //qureing the data and returing it as json file, to be get;

   fs.writeFileSync(__dirname+"/files/table.json", JSON.stringify(res));


   /* fs.writeFileSync("/json/file.json", JSON.stringify(res)) */

});
router.get("/", ((req, res)=>{
    res.render("templates/tamplate.ejs");
}))
router.get("/set", ((req, res)=>{
    res.render(
        "templates/box.ejs"
        )
    }))
    router.post("/get",(req, res)=>{
        res.json(req.body);
})
let newData = JSON;
router.get("/app", (req, res)=>{
    let allData = fs.readFileSync(__dirname+"/files/table.json");
    
    let myData = JSON.parse(allData);
    res.render("app.ejs", {myData:myData});
   
    console.log(myData);

});
//fetching data form addAct form;
router.post("/fetch", (req,res)=>{
    res.redirect("/app")
    fs.writeFileSync(__dirname+"/files/newAct.json",JSON.stringify (req.body));
       let newData = fs.readFileSync(__dirname+"/files/newAct.json");
       let myNewData = JSON.parse(newData);
       console.log(myNewData);
  conn.query(`INSERT INTO entering VALUES( ${myNewData.amount},'${myNewData.description}','${myNewData.date}', 'debt' , 0)`);

  conn.end();
})

module.exports = {
    router:router
}