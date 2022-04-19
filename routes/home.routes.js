const express = require('express')
const app = express()



app.get('/',(req,res)=>{
    res.send("hello from home")
})


module.exports = app