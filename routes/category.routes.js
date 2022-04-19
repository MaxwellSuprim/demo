const router= require('express').Router()

router.route('/')
    .get((req,res)=>{
    res.send("hello from categoryrouter")
})

    .post((req,res)=>{
    console.log(req.body.name) 
    res.send(" successful")
    })

module.exports =router
