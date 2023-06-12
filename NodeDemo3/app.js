const express = require('express')
const app = express()

app.set('view engine','hbs')

const dsSV = [
        {id:1, name : "Linh", age : 20, phone : '0901223333'},
        {id:2, name : "Long", age : 23,phone : '0933533556'}
    ]
'1'
app.get('/',(req,res)=>{
    res.render('home',{danhSach : dsSV})
})

app.get('/student/:id',(req,res)=>{
    let studentId = req.params.id
    let student = dsSV.find(item => item.id ==studentId)
    if(student){
        res.render('student',{'student':student})
    }else{
        res.send('Not found!')
    }
    
})


const PORT = process.env.PORT || 3000
app.listen(PORT,()=>{
    console.log("Server is running on Port " + PORT)
})