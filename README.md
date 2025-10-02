
# Evently

>A modern event discovery and management platform built with Next.js and Tailwind CSS.

---

## Project Description

Evently is designed to help users discover, plan, and manage events with ease. The platform features a sleek, modern UI and leverages the power of Next.js for fast, scalable web experiences. Tailwind CSS is used for rapid and responsive styling.

---

## Getting Started

To run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

---

## Process Documentation

### Day 1
**Learnings:**
- Introduction to Next.js project structure (app, components, public, styles)
- Basic routing and page creation
- Integrating Tailwind CSS for styling
- Creating a modern contact page and about page with responsive design

**Issues Faced:**
- Understanding the difference between pages and components in Next.js
- Initial Tailwind setup and configuration



### Day 2
**Learnings:**
- Set up backend with Express and Mongoose for MongoDB integration
- Created RESTful API endpoints for events (CRUD operations)
- Connected frontend to backend API for dynamic event data
- Learned how to seed the database with initial event data using a custom script
- Improved error handling and API responses

**Issues Faced:**
- MongoDB connection string required database name for correct data access
- API returned empty array until database was seeded and connection string was fixed
- Browser requested favicon.ico from backend, causing 404 errors (fixed by handling route)
- Debugging CORS and JSON middleware issues for API requests

### Day 3
**Learnings:**
- Built a professional, animated banner carousel for the home page
- Added a dynamic stats section with animated counting numbers
- Refactored and improved the Navbar: centered links, added responsive hamburger menu, and dynamic nav links
- Implemented a modern events page with server-side data fetching and event cards
- Created a login page and integrated a login button in the Navbar

**Issues Faced:**
- Debugging client-side vs server-side data fetching in Next.js app directory
- Handling CORS and API endpoint differences between frontend and backend
- Ensuring responsive design and smooth animations across devices

---

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

---

## Deployment

You can deploy Evently easily on [Vercel](https://vercel.com/). See Next.js deployment documentation for more details.
