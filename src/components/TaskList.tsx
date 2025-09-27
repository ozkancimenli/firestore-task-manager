// src/components/TaskList.tsx
import { useEffect, useState } from "react";
import { db } from "../firebaseConfig";
import {
  collection,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
  query,
  orderBy,
} from "firebase/firestore";
import { type Task } from "../types";
import "./TaskList.css";

const TaskList = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");

  // Firestore real-time listener with ordering
  useEffect(() => {
    const q = query(collection(db, "tasks"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Task[];
      setTasks(data);
    });

    return () => unsubscribe();
  }, []);

  // Update task
  const updateTask = async (taskId: string, updatedData: Partial<Task>) => {
    const taskRef = doc(db, "tasks", taskId);
    await updateDoc(taskRef, updatedData);
    setEditingId(null);
  };

  // Delete task
  const deleteTask = async (taskId: string) => {
    await deleteDoc(doc(db, "tasks", taskId));
  };

  return (
    <div className="task-list">
      <h2>Task List</h2>
      {tasks.map((task) => (
        <div key={task.id} className="task-card">
          {editingId === task.id ? (
            <div>
              <input
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
                placeholder="Edit title"
                className="task-edit-input"
              />
              <input
                value={editDescription}
                onChange={(e) => setEditDescription(e.target.value)}
                placeholder="Edit description"
                className="task-edit-input"
              />
              <div className="task-actions">
                <button
                  className="save"
                  onClick={() =>
                    updateTask(task.id!, {
                      title: editTitle,
                      description: editDescription,
                    })
                  }
                >
                  Save
                </button>
                <button className="cancel" onClick={() => setEditingId(null)}>
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <div>
              <p className="task-title">{task.title}</p>
              <p className="task-desc">{task.description}</p>
              <div className="task-actions">
                <button
                  className="edit"
                  onClick={() => {
                    setEditingId(task.id!);
                    setEditTitle(task.title);
                    setEditDescription(task.description);
                  }}
                >
                  Edit
                </button>
                <button
                  className="delete"
                  onClick={() => deleteTask(task.id!)}
                >
                  Delete
                </button>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default TaskList;
