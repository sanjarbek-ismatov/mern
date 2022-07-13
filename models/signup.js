const { log } = require("console");
const Joi = require("joi");
const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost/mern")
  .then(() => log("mongodb working"))
  .catch((err) => log(`error with: ${err}`));
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, minlength: 3 },
  mail: { type: String, required: true },
  password: { type: String, required: true, minlength: 8 },
});
const User = mongoose.model("user", userSchema);
async function createUser({ username, mail, password }) {
  await new User({
    username: username,
    mail: mail,
    password: password,
  }).save();
}
function validate(valid) {
  const validator = Joi.object({
    username: Joi.string().required().min(3),
    mail: Joi.string().required(),
    password: Joi.string().required().min(8),
  });
  return validator.validate(valid);
}
module.exports.createUser = createUser;
module.exports.validate = validate;
module.exports.userSchema = userSchema;
module.exports.User = User;
