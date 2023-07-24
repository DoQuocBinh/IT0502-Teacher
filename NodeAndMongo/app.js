const express = require('express')
const app = express()

app.set('view engine','hbs')
app.use(express.json());

const { connectToDatabase } = require('./db');
const { getProducts } = require('./product');

connectToDatabase();

app.get('/',async (req,res)=>{
    const items = await getProducts();
    res.render('home',{products:items})
})

const PORT = 3000
app.listen(PORT,()=>{
    console.log(`Server is running on :${PORT}`)
})