const mongoose = require("mongoose");

const sellerSchema = new mongoose.Schema({
  sname: String,
  productid: { type: String, unique: true,required: true },
  productname: String,
  phoneno2: Number,
});

const Seller = mongoose.model("seller", sellerSchema);

module.exports = Seller;