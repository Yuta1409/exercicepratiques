import React, { useState, useEffect } from 'react';
import TaskList from './TaskList';
import { getTasks } from '../api';

const TaskListPage = () => {
  const [tasks, setTasks] = useState([]);
  const role = localStorage.getItem('role'); // Récupérez le rôle de l'utilisateur depuis le localStorage

  useEffect(() => {
    async function fetchTasks() {
      const tasks = await getTasks();
      setTasks(tasks);
    }
    fetchTasks();
  }, []);

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 border border-gray-300 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Liste des tâches</h1>
      <TaskList tasks={tasks} role={role} />
    </div>
  );
};

export default TaskListPage;