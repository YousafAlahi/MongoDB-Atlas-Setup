// import express from 'express';
// import mongoose from 'mongoose';
require("dotenv").config();   // must be at the very top
const express = require("express");
 const mongoose = require("mongoose");



const app = express();
const port = 3000;

// const connectionDB = async() => {
//     try {
//         await mongoose.connect("mongodb+srv://yousafali7005_db_user:ip8jPdHa385up4Ls@cluster0.zmxhcy5.mongodb.net/");
//         console.log("MongoDB conection successfully conected")
//     } catch (error) {
//        console.log("something are wrong :", error) 
//     }
// }


// const mongoose = require("mongoose");
const dns = require("dns");
dns.setServers(["8.8.8.8", "1.1.1.1"]);

const connectionDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI)
    //   , {
    //   serverSelectionTimeoutMS: 10000,
    // });

    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
  }
};
// console.log("URI:", process.env.MONGO_URI);
// module.exports = connectionDB;


app.get('/', (req, res) => {
    res.send("Api are working")
});


app.listen(port , () => {
 connectionDB();
    console.log(`api are working on port ${port}`)
});