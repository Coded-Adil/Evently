import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  uid: { type: String, required: true, unique: true }, // Firebase UID
  email: { type: String, required: true, unique: true },
  password: { type: String }, // Only for email/password users
  displayName: { type: String },
  displayImage: { type: String },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("User", UserSchema);
