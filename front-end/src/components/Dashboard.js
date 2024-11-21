import React, { useState, useEffect } from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import Filter from './Filter';
import { addTask, getTasks, updateTask } from '../api';

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [taskToUpdate, setTaskToUpdate] = useState(null);

  useEffect(() => {
    async function fetchTasks() {
      const tasks = await getTasks();
      setTasks(tasks);
      setFilteredTasks(tasks);
    }
    fetchTasks();
  }, []);

  const handleAddTask = async (task) => {
    if (taskToUpdate) {
      const updatedTask = await updateTask(taskToUpdate._id, task);
      const updatedTasks = tasks.map(t => (t._id === updatedTask._id ? updatedTask : t));
      setTasks(updatedTasks);
      setFilteredTasks(updatedTasks);
      setTaskToUpdate(null);
    } else {
      const newTask = await addTask(task);
      const updatedTasks = [...tasks, newTask];
      setTasks(updatedTasks);
      setFilteredTasks(updatedTasks);
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
    setFilteredTasks(updatedTasks);
  };

  const handleFilterTasks = (query) => {
    setFilteredTasks(
      tasks.filter((task) => task.title.toLowerCase().includes(query.toLowerCase()))
    );
  };

  const handleUpdateTask = (task) => {
    setTaskToUpdate(task);
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 border border-gray-300 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Gestionnaire de tâche</h1>
      <TaskForm onAdd={handleAddTask} taskToUpdate={taskToUpdate} />
      <Filter onFilter={handleFilterTasks} />
      <TaskList tasks={filteredTasks} onDelete={handleDeleteTask} onUpdate={handleUpdateTask} role="admin" />
    </div>
  );
};

export default Dashboard;