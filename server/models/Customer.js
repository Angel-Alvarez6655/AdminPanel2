const mongoose = require("mongoose");

// Schema Definition 
const userSchema = mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true
    },
    email: {
      type: String,
      required: true
  
    }
  });
  
module.exports = mongoose.model('User', userSchema);