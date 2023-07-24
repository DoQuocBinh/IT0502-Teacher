const express = require('express')
const app = express()

app.set('view engine','hbs')
app.use(express.json());

app.get('/',(req,res)=>{
    res.render('home')
})

const PORT = 3000
app.listen(PORT,()=>{
    console.log(`Server is running on :${PORT}`)
})