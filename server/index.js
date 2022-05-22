const express = require('express');
const app = express();
const mongoose = require('mongoose');
const userSchema = require('./models/Customer')
require('dotenv').config();

const PORT = process.env.PORT || 5050;

// Middlewares 
app.use(express.json());
app.use(express.static('public'));

// MongoDB Connection.
mongoose.connect(process.env.MONGODB_URI)
.then(console.log('Database Connection Succeded!'))
.catch((err)=>console.error('Error registered at',err)
)

app.get('/', (req,res)=>{
    res.sendFile(__dirname+'/index.html');
});

// Fetch & Display on Terminal
const mostrar = async ()=>{
    personas = await userSchema.find()
    personas.forEach(element => {
       console.log(element.name); 
    });
    
}

console.log(mostrar())
// Raising up Server.
app.listen(PORT, ()=> console.log(`Server running through: http://localhost:${PORT}`))