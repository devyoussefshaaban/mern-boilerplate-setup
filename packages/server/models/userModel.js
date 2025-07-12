import { Schema, model } from "mongoose";
import { ROLES } from "../utils/constants.js";

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      minLength: 3,
      maxLength: 30,
      trim: true,
    },
    email: {
      type: String,
      reeuired: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: ROLES.DEVELOPER,
    },
    token: String,
    emailVerification: {
      isVerified: {
        type: Boolean,
        default: false,
      },
      token: {
        type: String,
      },
      expiresIn: {
        type: Date,
      },
    },
  },
  { timestamps: true }
);

const User = model("User", userSchema);

export default User;
