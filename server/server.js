const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();
const cors=require("cors");
const app=express();
app.use(cors());
app.use(express.json())


app.get("/api/news",async (req,res)=>{
 const category=req.query.category || 'general';
 const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${process.env.API_KEY}`;

 try{
    const response= await axios.get(url);
    res.json(response.data)
 }
 catch(error){
    res.status(500).json({ error: 'Error fetching data',details: error.message  });
 }
})

app.listen(3000)