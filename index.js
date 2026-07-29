require('dotenv').config()

const express = require('express')
const app = express()
// const port = 3000

app.get('/' , (req,res) =>{
    res.send("Hello Ji !!")
})

app.get('/twitter' , (req,res) =>{
    res.send("adityaraj")
})
app.get("/twitteremail", (req, res) => {
  res.send("<h1>aditya@gmail.com</h1>");
});
app.get('/youtube' , (req,res) =>{
    res.send("<marquee>chaiaurcode</marquee>");
})
app.listen(process.env.PORT,()=>{
    console.log(`sun rahe hai ji!! ${process.env.PORT} port `);
})