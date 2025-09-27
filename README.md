# Firestore Task Manager

A simple **CRUD Task Manager** built with **React + TypeScript + Firebase Firestore**.  
This project demonstrates real-time database updates, clean component design, and type safety with TypeScript.

## Features

- Add Task: Create new tasks with a title and description.
- View Tasks: Display all tasks in real-time, ordered by creation time.
- Edit Task: Update the title or description of a task.
- Delete Task: Remove tasks from Firestore instantly.
- Real-time Updates: Task list syncs automatically using Firestore `onSnapshot`.
- Type Safety: Strongly typed with TypeScript (`Task` interface, `Partial<Task>` for updates).
- Modern UI: Clean card-based design with custom CSS.

## Tech Stack

- React (Vite + TypeScript)
- Firebase Firestore
- TypeScript
- CSS (custom component styles)

## Project Structure
```
src/
├── components/
│   ├── AddTaskForm.tsx
│   ├── AddTaskForm.css
│   ├── TaskList.tsx
│   ├── TaskList.css
├── firebaseConfig.ts
├── types.ts
├── App.tsx
├── App.css
```

### Getting Started

# 1. Clone the repo
```
git clone https://github.com/your-username/firestore-task-manager.git
cd firestore-task-manager
```
# 2. Install dependencies
```
npm install
npm install firebase
```
# 3. Configure Firebase
Go to Firebase Console: https://console.firebase.google.com/

Create a new project

Enable Firestore Database

Copy your Firebase config object

Edit src/firebaseConfig.ts:
```
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID",
};
```
# 4. Run the app
```
npm run dev
```
Go to: http://localhost:5173

# Learning Goals
- Practice CRUD operations with Firestore.


- Use TypeScript interfaces for data models.


- Work with real-time listeners (onSnapshot).


- Organize React components with modular CSS.

# License
MIT License © 2025
