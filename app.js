const express = require("express");
const connectDB = require("./config/db");
const productRoute = require("./router/product/product")
const userRoute = require("./router/user/user")
const app = express();
require("dotenv").config();

connectDB();

app.use(express.json());

app.use('/api', productRoute);

app.use('/api', userRoute)

app.listen(process.env.PORT, () => {
    console.log(`server running on port ${process.env.PORT}`);
    
})