const express =require ("express");
const app = express();
const path = require("path");

const bodyparser = require("body-parser");

//mongoose 

// const port =5000;
const port = process.env.PORT || 5000;

//define mongoose scema

//express specific stuf
app.use("/static", express.static("static"));
app.use(express.urlencoded());

//pug specific stuf
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

//end point 
app.get("/",(req, res)=>{
    const params ={}
    res.status(200).render("home.pug", params);
})
app.get("/about",(req, res)=>{
    const params ={}
    res.status(200).render("about.pug", params);
})
app.get("/service",(req, res)=>{
    const params ={}
    res.status(200).render("service.pug", params);
})
app.get("/reviews",(req, res)=>{
    const params ={}
    res.status(200).render("review.pug", params);
})
app.get("/contact",(req, res)=>{
    const params ={}
    res.status(200).render("contact.pug", params);
});
//------

//start the server
app.listen(port,()=>{
    console.log(`The server successfully run at port ${port} `);
  });