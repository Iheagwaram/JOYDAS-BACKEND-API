const express = require("express");
const connectDB = require("./config/db");

const app = express();
require("dotenv").config();

connectDB();

app.use(express.json());

// app.use('/api', )
app.listen(process.env.PORT, () => {
    console.log(`server running on port ${process.env.PORT}`);
    
})