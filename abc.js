// const ex = require("express")
// const app = ex()
// const cors = require("cors")

// app.use(cors({
//     origin: 'http://localhost:3000'
// }));

// app.get("/sum", (req,res)=>{
//     let num1 =req.query.num1
//     let num2 = req.query.num2
//     const number1 = parseInt(num1)
//     const number2 = parseInt(num2)
//     const sum = number1 + number2
//     res.json({sum})
// })

// app.listen(5000)

// abc.js
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors({
    origin: 'http://localhost:3000' 
}))

app.use(express.json());

app.get("/sum", (req, res) => {
    let num1 = req.query.num1;
    let num2 = req.query.num2;

    console.log(`Received num1: ${num1}, num2: ${num2}`); 

    const number1 = parseInt(num1);
    const number2 = parseInt(num2);

 

    const sum = number1 + number2;
    res.json({ sum }); // 
});

app.listen(5000, () => {
    console.log("Server is running on http://localhost:5000");
});


