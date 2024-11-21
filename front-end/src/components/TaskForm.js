import React, { useState, useEffect } from 'react';

const TaskForm = ({ onAdd, taskToUpdate }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (taskToUpdate) {
      setTitle(taskToUpdate.title);
      setDescription(taskToUpdate.description);
    } else {
      setTitle('');
      setDescription('');
    }
  }, [taskToUpdate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { title, description };
    onAdd(newTask);
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-4">
        <label className="block text-gray-700">Titre</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mt-1"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Description</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mt-1"
        />
      </div>
      <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">
        {taskToUpdate ? 'Mettre à jour la tâche' : 'Ajouter une Task'}
      </button>
    </form>
  );
};

export default TaskForm;