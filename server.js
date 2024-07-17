const express = require("express");
const app = express();

app.get('/api/get',(req,res) =>{
    res.send({message:"Hello Back to node js"});
})

app.listen(8000,()=>{
    console.log("listening on port 8000");
})