require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const dbconnection = require('./dbcon');
const cors = require('cors');
const users = require('./models/users')
const userdetails = require('./models/userdetails')
const PORT = process.env.PORT || 3500;

dbconnection();

const userdet = [];

app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cors());

app.get('/',(req,res) => {
    res.send('Hello world');
})

app.get("/getusers", async (req, res) => {
  const user = await users.find();
  if(!users){
    res.sendStatus(204);
  } 
  res.json(user);
  });

app.post('/sign-up', async (req,res) => {
  const userdata = req.body;
  // if(!req.body.name || !req.body.email || !req.body.password || !req.body.confirmpwd ){
  //   return res.sendStatus(409);
  // }
  //   try{
  //     const newuser = new users(userdata); 
  //     await newuser.save();
  //     console.log(newuser);
  //     res.status(201).json(userdata)
  //   }catch(err){
  //     res.status(500).json({'message' : err.message})
  //   }
  try{
  const newuser = new users(userdata); 
  await newuser.save();
  res.json(userdata)
  }catch(err){
    console.log(err);
  }
})
app.get("/users", async (req, res) => {
  const user = await userdetails.find();
  if(!users){
    res.sendStatus(204);
  } 
  res.json(user);
});
app.post('/users' , async(req,res) => {
  const userdatas = req.body;
  try{
    const newuserdetails = new userdetails(userdatas)
    await newuserdetails.save();
    res.json(userdatas)
    }catch(err){
      console.log(err);
    }
})
app.put('/users' , async(req,res) => {
  const userdatas = req.body;
  try{
    const user = await userdetails.find();
    const edituser = user.find(user => user.email === req.body.email);
    console.log(edituser);
    if(req.body.name){
    edituser.name=req.body.name;
    }
    if(req.body.email){
    edituser.email=req.body.email;
    }
    if(req.body.age){
    edituser.age = req.body.age;
    }
    if(req.body.gender){
    edituser.gender = req.body.gender;
    }
    console.log(edituser);
    await edituser.save();
    res.json(userdatas);
    }catch(err){
      console.log(err);
    }
})
mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
