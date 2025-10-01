import mongoose from "mongoose";

const EventSchema = new mongoose.Schema({
  title: String,
  description: String,
  date: Date,
  location: String,
  image: String,
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Event", EventSchema);
