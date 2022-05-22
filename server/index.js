const express = require('express');
const app = express();
const mongoose = require('mongoose');
const userSchema = require('./models/Customer')
const userRoutes = require('./routes/Customer')
require('dotenv').config();

const PORT = process.env.PORT || 5050;

// Middlewares 
app.use(express.json());
app.use(express.static('public'));
app.use('/api', userRoutes);

// MongoDB Connection.
mongoose.connect(process.env.MONGODB_URI)
.then(console.log('Database Connection Succeded!'))
.catch((err)=>console.error('Error registered at',err)
)

app.get('/', (req,res)=>{
    res.sendFile(__dirname+'/index.html');
});

// Fetch & Display on Terminal

// Raising up Server.
app.listen(PORT, ()=> console.log(`Server running through: http://localhost:${PORT}`))