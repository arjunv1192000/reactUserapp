const express = require("express");
const app = express()
const db = require("./mongodb")
const bcrypt =require('bcrypt')
const upload =require('./multer')
const cors = require('cors')
const { ObjectID } = require("mongodb")
const jwt = require('jsonwebtoken');




app.use(express.static('img'))
app.use(express.json())
app.use(cors())

db.connect((err) => {
  if (err) {
    console.log("connection failed" + err);
  } else {
    console.log("db connected");
  }
})




  
  
  app.post('/signup',async(req,res)=>{
    req.body.password = await bcrypt.hash(req.body.password, 10)
    db.get().collection('users').insertOne(req.body).then(()=>{
      res.status(200).json()
    })
  })  


app.listen(3000, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("server running");
  }
});
