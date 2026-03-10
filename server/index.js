const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");

require("dotenv").config();

const app = express();

const authRoute = require("./Routes/AuthRoute");

const { MONGO_URL, PORT } = process.env;

// middleware
app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: ["http://localhost:3000"],   // frontend usually runs on 3000
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// routes
app.use("/", authRoute);

// database connection
mongoose
  .connect(MONGO_URL)
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error(err));

// server start
app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});


app.get("/" ,(req,res)=>{
    res.send("shukar hai!!")
})
