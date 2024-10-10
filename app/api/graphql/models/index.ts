// User Model Creation
const mongoose = require("mongoose");
const { Schema } = mongoose;

//console.log("Creating User Model(models/index.ts)" + mongoose.models.UserModel);

const userSchema = new Schema({
  // Define user fields here matching the GraphQL schema
  name: {
    type: String,
    required: [true, "All fields are required"],
  },
  email: {
    type: String,
    required: [true, "All fields are required"],
  },
  password: {
    type: String,
    required: [true, "All fields are required"],
  },
  //active: Boolean,
});

export default mongoose.models.UserModel ||
  mongoose.model("UserModel", userSchema);
