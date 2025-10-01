import express from "express";
import Event from "../models/Event.js";

const router = express.Router();

// GET all events
router.get("/", async (req, res) => {
    const events = await Event.find(); 
    res.json(events);
});

// GET one event by ID
router.get("/:id", async (req, res) => {
  const event = await Event.findById(req.params.id);
  if (!event) return res.status(404).json({ message: "Event not found" });
  res.json(event);
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
