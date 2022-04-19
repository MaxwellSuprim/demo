const express = require('express')
const app = express()

const homeroute = require('./home.routes')
const categoryroute = require('./category.routes')

app.use('/home',homeroute)
app.use('/category',categoryroute)

app.get('/',(req,res)=>{
    res.send("hello bro")
})


module.exports = app