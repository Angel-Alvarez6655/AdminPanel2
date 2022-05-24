const mongoose = require("mongoose");

// Schema Definition 
const customerSchema = mongoose.Schema({
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
      required: false
    },
    cellphone:{
      type: Number,
      required: false
    },
    details: {
      type: String,
      required: true,
    },
    quota:{
      type: Number,
      required: true
    },
    status:{
      type: Boolean,
      required: false
    },
    paid:{
      type: Boolean,
      required: true 
    }
  });
  
module.exports = mongoose.model('Customer', customerSchema);