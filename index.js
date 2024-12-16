const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const register = require('./routes/register');
const login  = require('./routes/login');
const products = require('./products');
const app = express();
require('dotenv').config();
app.use(express.json());
app.use(cors());

app.use('/api/register' , register);
app.use('/api/login' , login);

app.get('/api/register' , (req , res)=>{
    res.send('If you want sign up write data here...')
})
app.get('/api/login' , (req , res)=>{
    res.send('write your data here to submit and sign in...')
})

app.get('/' , (req , res)=>{
    res.send('welcome to our online shop Api...')
})

app.get('/products' , (req , res)=>{
    res.send(products)
})


const port = process.env.PORT || 5000
const url = process.env.DB_URL;

app.listen(port , console.log(`server running on port ${port}`));

mongoose.connect(url)
  .then(() => console.log('MongoDB connection successful...'))
  .catch((err) => console.log('MongoDB connection failed', err.message));
