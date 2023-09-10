const mongoose = require("mongoose");
//Schema
const userSchema = new mongoose.Schema(
    {
      firstName: {
        type: String,
        require: true,
      },
      lastName: {
        type: String,
      },
      email: {
        type: String,
        required: true,
        unique: true,
      },
      jobTitle: {
        type: String,
      },
      gender: {
        type: String,
      },
    },
    { timestamps: true }
  );
  //Model,(collection name= users)(in plural form) using this user class we can interact with mongo
const User = mongoose.model("user", userSchema);

//export
module.exports = User;