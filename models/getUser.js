const mongoose = require("mongoose");
const { validate, User } = require("./signup");

async function getUser(param) {
  const { error } = validate(param);
  if (error) {
    return error.details[0].message;
  }
  const result = await User.find({
    username: param.username,
    password: param.password,
    mail: param.mail,
  }).select({
    username: 1,
    password: 1,
    mail: 1,
    _id: 0,
  });

  return result;
}
module.exports.getUser = getUser;
