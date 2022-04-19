const express = require('express')
const app = express()


const routes=require("./routes/index.routes.js")

app.use((express.json()))

app.use('/',routes)



app.use(express.json());

app.listen(9001,"localhost",(err)=>{

    if(!err){
       console.log("listened successfully") 
    }
    else{
        console.log("error in listening",err)
    }

})