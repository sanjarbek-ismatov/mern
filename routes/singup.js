const express = require("express");
const { validate, createUser } = require("../models/signup");
const router = express.Router();
router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  await createUser(req.body);
  res.send(req.body);
});
module.exports = router;
