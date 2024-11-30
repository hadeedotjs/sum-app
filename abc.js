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

// Allow requests from the frontend running on http://localhost:3000
app.use(cors({
    origin: 'http://localhost:3000' // Adjust this if your frontend is served from a different origin
}));

app.use(express.json());

app.get("/sum", (req, res) => {
    let num1 = req.query.num1;
    let num2 = req.query.num2;

    console.log(`Received num1: ${num1}, num2: ${num2}`); // Log received values

    const number1 = parseInt(num1);
    const number2 = parseInt(num2);

    if (isNaN(number1) || isNaN(number2)) {
        return res.status(400).json({ error: "Invalid numbers" });
    }

    const sum = number1 + number2;
    res.json({ sum }); // Send the sum as a JSON response
});

app.listen(5000, () => {
    console.log("Server is running on http://localhost:5000");
});


