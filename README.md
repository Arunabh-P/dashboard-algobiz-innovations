Scalable React Admin Dashboard
Overview

This project is a scalable React-based Admin Dashboard that displays and manages user data with features like search, pagination, and detailed views.

The goal of this project is to demonstrate clean architecture, efficient API handling, performance optimization, and production-ready frontend practices.

Tech Stack

React (Vite)
TypeScript
TanStack Query (React Query)
ShadCN UI
Tailwind CSS
Axios
React Router DOM

Project Setup

# Clone the repository

git clone <https://github.com/Arunabh-P/dashboard-algobiz-innovations.git>

# Navigate to project

cd <project-folder>

# Install dependencies

npm install

# Run the project

npm run dev

Architecture Decisions

The project follows a modular and scalable structure:

src/
├── api/ → API layer (axios calls)
├── hooks/ → Custom hooks
├── components/ → Reusable UI components
├── pages/ → Page-level components
├── utils/ → Helper functions

API logic is separated from UI components
Custom hooks are used for data fetching
Reusable components improve maintainability
Clean separation of concerns

State Management Approach

This project uses TanStack Query (React Query) for state management.

Why React Query?

Efficient data fetching & caching
Automatic background refetching
Built-in loading & error handling
Reduces boilerplate compared to Redux

Features Implemented

Dashboard Listing
Displays users in a responsive card layout

Clean and modern UI using ShadCN
Search with Debouncing

Optimized API calls using debounce (500ms)
Improves performance and UX

Pagination
Server-side pagination
Avoids loading large datasets

User Detail View
Modal (Dialog) to view complete user details

API Handling
Structured API layer
Loading and error states handled properly

Dark Mode
Light/Dark theme toggle
System theme support
Keyboard shortcut support (Press "D")

Performance Optimizations

Debounced search input
React Query caching
Lazy loading (code splitting)
Avoided unnecessary re-renders
Optimized component structure

Assumptions & Trade-offs

Used pagination instead of infinite scroll for simplicity and better control
Focused more on functionality and architecture than heavy UI design
Used public API (dummyjson) for demonstration purposes

Live Demo

https://dashboard-algobiz-innovations.vercel.app/
