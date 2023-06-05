var express = require('express')
const { rmSync } = require('fs')
var app = express()

app.use(express.static('public'))

app.get('/',(req,res)=>{
    res.sendFile(__dirname + "/danhsach.html")
})
app.get('/huyHoang',(req,res)=>{
    res.sendFile(__dirname + "/sv_hoang.html")
})
app.get('/profile',(req,res)=>{
    console.log(__dirname)
    res.sendFile(__dirname +  '/profile.html')
})

const PORT = 3000
app.listen(PORT,()=>{
    console.log("Server is running!")
})