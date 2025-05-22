const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const passport = require("passport");
require("./config/passport");
const authRoutes = require("./routes/auth");
const port = process.env.PORT || 5000;
const cors = require("cors");
const { readdirSync } = require("fs");
const { connectDb } = require("./db/connection");

app.use(cors({ origin: process.env.CLIENT_URL }));
app.use(express.json());

connectDb();

app.use(passport.initialize());
app.use("/auth", authRoutes);

app.get("/", (req, res) => {
  res.send(`<center><h1>Server Running on PORT : ${port} </h1></center>`);
});

readdirSync("./routes").map((route) =>
  app.use("/api", require(`./routes/${route}`))
);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
