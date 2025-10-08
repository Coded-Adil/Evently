
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

### Day 4
**Learnings:**
- Integrated Firebase Authentication for email/password and Google login/signup
- Created signup page with display image and confirm password fields
- Built backend user model and routes for user creation and retrieval
- Improved error handling and validation in signup flow
- Clarified full-stack data flow from frontend to backend
- Validated backend and frontend integration for user registration

**Issues Faced:**
- Initial signup form did not send all required fields to backend (fixed)
- Debugged backend route expectations and frontend POST payload
- Ensured .env usage for Firebase config and secrets
- Verified MongoDB user collection and data persistence
- Troubleshot error messages and improved feedback for failed signup

### Day 5
**Learnings:**
- Polished UI/UX across the app: animated banner carousel, eased transitions, subtle backdrop blur on gradient backgrounds.
- Added Featured Events section on the Home page showing the latest 3 events and a "See All" button that links to the Events page.
- Implemented server-side event fetching (app directory async page) so event data is rendered before the page is sent to the client.
- Built Event details page (`/events/[id]`) and wired event cards to link to details pages.
- Completed full Firebase auth UX:
  - Login (email/password + Google) and Signup (email/password + Google).
  - Signup form extended with display name, display image, and confirm password fields.
  - After successful signup, user data (uid, email, displayName, displayImage, createdAt) is posted to backend `/api/users`.
- Backend enhancements:
  - Created `User` model and `/api/users` routes to store user records.
  - Events endpoints now populate `createdBy` with user data when available.
  - Seed and CRUD routes tested for events/users.
- Navbar & Profile:
  - Navbar shows centered nav links on large screens and a hamburger menu on small/medium screens.
  - When authenticated, navbar shows user avatar (or default avatar) which links to `/profile`; Login button hidden.
  - Profile page created to show avatar, display name, email, uid, and joined date.
- Accessibility & responsiveness improvements for mobile/tablet.

**Issues Faced:**
- Next.js Image external domains error: had to add external domains (e.g., `i.ibb.co`, `firebasestorage.googleapis.com`) to `next.config.js`.
- Avatar not shown when `displayImage` was not saved or returned from backend — fixed by ensuring signup posts displayImage and by using a default avatar fallback.
- Firebase API key error: required correct NEXT_PUBLIC_ environment variables in `.env.local` and server restart.
- Mismatch between frontend POST payload and backend user route expectations — fixed payload to include `uid`, `email`, `displayName`, `displayImage` (password only stored for email/password flows if desired).
- CORS / API route confusion between frontend `/api/events` and backend `http://localhost:5000/api/events` — verified correct URLs and adjusted fetch logic.
- Browser `favicon.ico` 404 — handled by backend route to return 204 or by adding a favicon to `/public`.
j
---

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

---

## Deployment

You can deploy Evently easily on [Vercel](https://vercel.com/). See Next.js deployment documentation for more details.
