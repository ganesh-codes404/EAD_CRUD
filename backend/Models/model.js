import mongoose from "mongoose";

const alienSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  tech: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  sub: {
    type: Boolean,
    default: false,
    required: true,
  },

});
const User = mongoose.model("User", alienSchema);

export default User
