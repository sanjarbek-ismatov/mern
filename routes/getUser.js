const express = require("express");
const { validate } = require("../models/signup");
const { getUser } = require("../models/getUser");
const { log } = require("console");
const router = express.Router();
router.get("/", async (req, res) => {
  const { error } = validate(req.query);
  if (error) {
    return res.send(error.details[0].message);
  }
  const result = await getUser(req.query);
  if (result.length == 0) {
    return res.status(404).send("User not found");
  }
  res.status(200).send(result);
});

module.exports = router;
