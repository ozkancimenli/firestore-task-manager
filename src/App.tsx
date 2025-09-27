import AddTaskForm from "./components/AddTaskForm";
import TaskList from "./components/TaskList";
import "./App.css"; // stilleri buradan alacak

function App() {
  return (
    <div className="app">
      <h1 className="app-title">Firestore Task Manager</h1>
      <div className="app-container">
        <AddTaskForm />
        <TaskList />
      </div>
    </div>
  );
}

export default App;
