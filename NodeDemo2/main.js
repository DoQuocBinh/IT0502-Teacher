var express = require('express')
const { rmSync } = require('fs')
var app = express()

app.get('/',(req,res)=>{
    res.write("<html><body><h1 style='color:red'>Hello world</h1></body></html>")
    res.end
})

app.get('/profile',(req,res)=>{
    console.log(__dirname)
    res.sendFile(__dirname +  '/profile.html')
})

const PORT = 3000
app.listen(PORT,()=>{
    console.log("Server is running!")
})