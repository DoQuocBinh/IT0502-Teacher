const express = require('express')
const app = express()

app.set('view engine','hbs')

app.get('/',(req,res)=>{
    res.sendFile(__dirname +"/home.html")
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