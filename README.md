# MERN Authentication Project

This repository contains a basic MERN (MongoDB, Express.js, React, Node.js) authentication project with a simple login page. It demonstrates the fundamental steps for setting up authentication using the MERN stack.

## Project Summary

- **Backend Setup (Node.js & Express):**
  1. Set up a new Node.js project with Express.
  2. Install necessary packages like `express`, `mongoose`, and `jsonwebtoken`.
  3. Create API routes for user registration and login.
  4. Use `bcrypt` to hash passwords before storing them.

- **Database (MongoDB):**
  1. Set up a MongoDB database (local or cloud-based).
  2. Create a user schema to store user data like email and hashed password.

- **Frontend Setup (React):**
  1. Create a new React app using `npx create-react-app`.
  2. Set up a basic folder structure for components.

- **User Interface (UI):**
  1. Design a simple login form using HTML and CSS.
  2. Create a controlled component in React to manage form input state.

- **API Requests:**
  1. Use `axios` or `fetch` to send POST requests from the frontend to the backend.
  2. Handle API responses and errors.

- **Login Logic:**
  1. On form submission, send the entered email and password to the backend.
  2. Backend verifies the credentials, generates a JWT token, and sends it back to the frontend.

- **JWT Handling:**
  1. Store the received JWT token securely (e.g., in `localStorage`).
  2. Include the token in the headers of future API requests for authentication.

- **Protected Routes:**
  1. Create a protected route using React Router.
  2. Check for the presence of the JWT token before allowing access.

- **Logout:**
  1. Implement a logout button that clears the stored token.

- **Error Handling:**
  1. Display error messages on the UI for failed login attempts.

- **Testing:**
  1. Write basic tests for backend routes and frontend components using testing libraries like Jest and React Testing Library.

- **Deployment:**
  1. Deploy the backend to a platform like Heroku and the frontend to Netlify, Vercel, or another similar platform.
