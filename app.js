// app.js
const express=require("express")
const mongoose=require("mongoose")
const {join}=require('path')
const port=3000
const Customer = require("./model/customer")
const Seller = require("./model/seller") 
const app = express()
app.use(express.json())
mongoose.connect('mongodb+srv://jainprakhar0610:mongodb.pass@cluster0.92d2y7u.mongodb.net/?retryWrites=true&w=majority')
const db=mongoose.connection
db.once('open',()=>{
  console.log("database conncected")
})
app.get('/data',(req,res)=>{
  res.sendFile(join(__dirname,'index.html'))
})
app.get('/data2',(req,res)=>{
  res.sendFile(join(__dirname,'index2.html'))
})
app.post('/data',async(req,res)=>{
  console.log(req.body)
  const {cname,email,address,phoneno}=req.body
  if(phoneno.length==10){
    
  }
  else{
    return res.status(401).json({message:'Invalid length!'})
  }
  try{
    const newcustomer=await Customer.create({
      cname,
      email,
      address,
      phoneno
    }) 
    res.status(201).json({message:'Data Created'})
  }catch(error){
    res.status(401).json({message:'Failed'})
    console.log(error)
  }
})

app.post('/data2',async(req,res)=>{
  console.log(req.body)
  const {sname,productid,productname,phoneno2}=req.body
  if(phoneno2.length==10){
    
  }
  else{
    return res.status(401).json({message:'Invalid length!'})
  }
  try{
    const newcustomer=await Seller.create({
      sname,
      productid,
      productname,
      phoneno2
    }) 
    res.status(201).json({message:'Data Created'})
  }catch(error){
    res.status(401).json({message:'Failed'})
    console.log(error)
  }
})


app.listen(port,()=>
{
  console.log("app is listening on port 3000")
})