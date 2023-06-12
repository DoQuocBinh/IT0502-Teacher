const express = require('express')
const app = express()

app.set('view engine','hbs')

const dsSV = [
        {id:1, name : "Linh", age : 20, phone : '0901223333'},
        {id:2, name : "Long", age : 23,phone : '0933533556'}
    ]

app.get('/',(req,res)=>{
    res.render('home',{danhSach : dsSV})
})

app.get('/student/:name',(req,res)=>{
    let studentName = req.params.name
    let tuoi = 20 //truy cap tu database
    //res.sendFile(__dirname + "/"  + studentName + ".html")
    res.render('student',{'name':studentName,'tuoi':tuoi})
})


const PORT = process.env.PORT || 3000
app.listen(PORT,()=>{
    console.log("Server is running on Port " + PORT)
})