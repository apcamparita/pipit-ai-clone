const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

require("dotenv").config();

app.use(cors());
app.use(express.json());

app.use(express.static("public"));

const generateRoute = require("./routes/generate");

app.use("/api", generateRoute);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});