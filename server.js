const { log } = require("console");
const express = require("express");
const signup = require("./routes/singup");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api/register", signup);
const port = process.env.PORT || 4000;

app.listen(port, () => {
  log("server working");
});
