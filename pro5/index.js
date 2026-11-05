


const dns = require("dns");
dns.setServers(["8.8.8.8", "1.1.1.1"]);

require("dotenv").config();   
const express = require("express");
const mongoose = require("mongoose");


const app = express();
const port = 3000;





const connectionDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI)
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};
 console.log("URI:", process.env.MONGODB_URI);


app.get('/', (req, res) => {
    res.send("Api are working")
});


app.listen(port , () => {
 connectionDB();
    console.log(`api are working on port ${port}`)
});