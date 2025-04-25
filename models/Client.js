const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
  employee: String,
  price: Number,
  isDone:{
    type:Boolean,
    default:false
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Client = mongoose.model('Client', clientSchema);
module.exports = Client;
