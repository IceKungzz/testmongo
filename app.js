const express = require('express');
const cors = require('cors');
const app = express()
const mongoose = require('./database')
const {User} = require('./schema')

app.use(cors())
app.use(express.json())

app.get('/',(req,res)=>{
    res.send("test")
})

app.get('/test',(re,res)=>{
    User.find().then((result)=>{
        res.send(result)
    })
    
})





app.listen(3309,()=>{
    console.log("server start");
})

