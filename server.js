const express = require("express");
const app = express();

app.get('/api/get',(req,res) =>{
    res.send({message:"Hello Back to node js"});
})

app.get('/api/getdetails',(req,res) =>{
    res.send({name:"Shrivinayak Birla",
        role :"Backend Developer"
    });
})


app.listen(8000,()=>{
    console.log("listening on port 8000");
})