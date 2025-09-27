Firestore Task Manager (React + TypeScript + Vite)

This project demonstrates a minimal CRUD Task Manager built with React, TypeScript, and Firebase Firestore.
It uses Firestore’s real-time listener (onSnapshot) for instant updates and TypeScript for strong type safety.

Currently, the app supports:

➕ Add tasks with a title and description

📋 View tasks in real-time, ordered by creation time

✏️ Edit a task’s title or description

❌ Delete tasks instantly from Firestore

Firebase Setup

Create a Firebase project in the Firebase Console

Enable Firestore Database

Copy your Firebase config into src/firebaseConfig.ts

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID",
};

Getting Started
Install dependencies
npm install

Run the app
npm run dev


App will be available at: http://localhost:5173

Project Structure
src/
 ├── components/
 │    ├── AddTaskForm.tsx
 │    ├── AddTaskForm.css
 │    ├── TaskList.tsx
 │    ├── TaskList.css
 ├── firebaseConfig.ts
 ├── types.ts
 ├── App.tsx
 ├── App.css

Tech Stack

React
 with Vite

TypeScript

Firebase Firestore

Custom CSS for styling

Learning Goals

Practice Firestore CRUD operations

Use TypeScript interfaces for type safety

Implement real-time listeners with Firestore

Organize React components with modular CSS