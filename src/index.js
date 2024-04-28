const express = require('express')
const routes = require('../src/routes/employers.route')
const mongoose = require('mongoose')
require('dotenv').config()

const mongoUrl=process.env.MONGO_URL



//conexion a la base de datos
mongoose.connect(mongoUrl)
const database = mongoose.connection

database.on('error', (error)=>{
    console.log(error);
})

database.once('connected', ()=>{
    console.log('Database connected successfully');
})


const app = express()
app.use(express.json())
app.use('/api', routes)


app.listen(3000, ()=>{
    console.log(`Server running on port ${3000}`);
})