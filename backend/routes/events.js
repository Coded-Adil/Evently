import express from "express";
import Event from "../models/Event.js";

const router = express.Router();

// GET all events
// GET all events with user data populated
router.get("/", async (req, res) => {
  try {
    const events = await Event.find().populate("createdBy");
    res.json(events);
  } catch (err) {
    res.status(500).json({ message: "Error fetching events", error: err.message });
  }
});

// GET one event by ID
// GET one event by ID with user data populated
router.get("/:id", async (req, res) => {
  try {
    const event = await Event.findById(req.params.id).populate("createdBy");
    if (!event) return res.status(404).json({ message: "Event not found" });
    res.json(event);
  } catch (err) {
    res.status(500).json({ message: "Error fetching event", error: err.message });
  }
});

// POST new event
router.post("/", async (req, res) => {
  const { title, description, date, location, image } = req.body;
  const newEvent = new Event({ title, description, date, location, image });
  await newEvent.save();
  res.status(201).json(newEvent);
});

// PUT update event
router.put("/:id", async (req, res) => {
  const updatedEvent = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedEvent);
});

// DELETE event
router.delete("/:id", async (req, res) => {
  await Event.findByIdAndDelete(req.params.id);
  res.json({ message: "Event deleted" });
});

export default router;
