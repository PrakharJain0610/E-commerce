const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  cname: String,
  email: { type: String, unique: true,required: true },
  address: String,
  phoneno: Number,
});

const Customer = mongoose.model("customer", customerSchema);

module.exports = Customer;
