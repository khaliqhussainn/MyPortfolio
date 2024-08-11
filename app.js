const path = require("path");
const express = require('express');
const app = express();

const staticPath = path.join(__dirname, "./assets");
app.use(express.static(staticPath));

app.get("/",(req,res)=>{
    res.send("this is home");
})

app.listen( 8000 , () => {
    console.log("The Application is Running in Port 8000 ");
})
