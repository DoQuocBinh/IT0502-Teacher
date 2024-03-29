const express = require('express')
const app = express()

app.set('view engine','hbs')

var dsSV = [
        {id:100, name : "Linh", age : 20, phone : '0901223333'},
        {id:200, name : "Long", age : 23,phone : '0933533556'}, 
        {id:700, name : "Truong", age : 20,phone : '0933533557'},
        {id:400, name : "Minh", age : 19,phone : '0933533556'} 
    ]

app.use(express.urlencoded({extended:true}))

app.post('/search',(req,res)=>{
    const name = req.body.searchName
    const results = dsSV.filter(e => e.name.toUpperCase().includes(name.toUpperCase()))
    res.render('home',{danhSach : results})
})

app.get('/',(req,res)=>{
    res.render('home',{danhSach : dsSV})
})

app.get('/delete/:id',(req,res)=>{
    let studentId = req.params.id
    let index = dsSV.findIndex(item => item.id ==studentId)
    console.log(index)
    if(index !=-1){
        dsSV.splice(index,1)      
    }
    res.redirect('/')
})

app.get('/student/:id',(req,res)=>{
    let studentId = req.params.id
    let student = dsSV.find(item => item.id ==studentId)
    if(student){//neu tim thay trong danh sach
        res.render('student',{'student':student})
    }else{
        res.send('Not found!')
    }
    
})


const PORT = process.env.PORT || 3000
app.listen(PORT,()=>{
    console.log("Server is running on Port " + PORT)
})