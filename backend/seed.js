import mongoose from "mongoose";
import dotenv from "dotenv";
import Event from "./models/Event.js";

dotenv.config({ path: ".env.local" });

const events = [
  {
    "title": "Tech Conference 2025",
    "description": "Join industry leaders to explore the future of technology, AI, and blockchain.",
    "date": "2025-11-15T09:00:00Z",
    "location": "Dhaka, Bangladesh",
    "image": "https://i.ibb.co.com/ccgC33ZN/pexels-bertellifotografia-2467506.jpg",
    "createdBy": "652a1f5c9f1b2a0012345678",
    "createdAt": "2025-09-30T10:00:00Z"
  },
  {
    "title": "Music Festival",
    "description": "A celebration of music with artists from around the world performing live.",
    "date": "2025-12-01T17:00:00Z",
    "location": "Chittagong, Bangladesh",
    "image": "https://i.ibb.co.com/ZRsj73VJ/pexels-bence-szemerey-337043-7081159.jpg",
    "createdBy": "652a1f5c9f1b2a0012345679",
    "createdAt": "2025-09-30T11:00:00Z"
  },
  {
    "title": "Startup Pitch Night",
    "description": "Watch startups pitch their ideas to investors and win funding opportunities.",
    "date": "2025-10-20T18:30:00Z",
    "location": "Dhaka, Bangladesh",
    "image": "https://i.ibb.co.com/p6Yh98Bk/paul-hanaoka-n-EKGw-IRFe-Yc-unsplash.jpg",
    "createdBy": "652a1f5c9f1b2a0012345678",
    "createdAt": "2025-09-30T12:00:00Z"
  },
  {
    "title": "Art & Craft Fair",
    "description": "Local artists showcase their handmade crafts, paintings, and sculptures.",
    "date": "2025-11-05T10:00:00Z",
    "location": "Sylhet, Bangladesh",
    "image": "https://i.ibb.co.com/LzrJCpD5/monis-yousafzai-Zm-USf-V1o3v-Q-unsplash.jpg",
    "createdBy": "652a1f5c9f1b2a0012345679",
    "createdAt": "2025-09-30T13:00:00Z"
  },
  {
    "title": "Marathon 2025",
    "description": "Run for charity! Join thousands of participants in this city-wide marathon.",
    "date": "2025-12-10T06:00:00Z",
    "location": "Dhaka, Bangladesh",
    "image": "https://i.ibb.co.com/TxHy3TxH/pietro-rampazzo-x5-Gc-XFv-JJh-I-unsplash.jpg",
    "createdBy": "652a1f5c9f1b2a0012345678",
    "createdAt": "2025-09-30T14:00:00Z"
  },
  {
    "title": "Food Festival",
    "description": "Taste cuisines from around the world in this delicious food festival.",
    "date": "2025-10-28T12:00:00Z",
    "location": "Chittagong, Bangladesh",
    "image": "https://i.ibb.co.com/twdzJ50M/vernon-raineil-cenzon-6r-EPAbr-XNa-Y-unsplash.jpg",
    "createdBy": "652a1f5c9f1b2a0012345679",
    "createdAt": "2025-09-30T15:00:00Z"
  },
  {
    "title": "Coding Bootcamp",
    "description": "Intensive 3-day bootcamp teaching full-stack development skills.",
    "date": "2025-11-12T09:00:00Z",
    "location": "Dhaka, Bangladesh",
    "image": "https://i.ibb.co.com/TBSDfgLh/christine-erispe-s-Ijqrd51gr-A-unsplash.jpg",
    "createdBy": "652a1f5c9f1b2a0012345678",
    "createdAt": "2025-09-30T16:00:00Z"
  },
  {
    "title": "Photography Workshop",
    "description": "Learn professional photography techniques from experts in the field.",
    "date": "2025-11-22T14:00:00Z",
    "location": "Rajshahi, Bangladesh",
    "image": "https://i.ibb.co.com/6RjHQydh/point3d-commercial-imaging-ltd-3uqyjfd-WBf-E-unsplash.jpg",
    "createdBy": "652a1f5c9f1b2a0012345679",
    "createdAt": "2025-09-30T17:00:00Z"
  }
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    await Event.deleteMany({}); // Remove existing events
    await Event.insertMany(events);
    console.log("✅ Database seeded with initial events.");
    process.exit();
  } catch (err) {
    console.error("❌ Seeding error:", err);
    process.exit(1);
  }
}

seed();
