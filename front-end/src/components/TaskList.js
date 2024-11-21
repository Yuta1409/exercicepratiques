import React from 'react';

const TaskList = ({ tasks, onDelete, onUpdate, role }) => {
  return (
    <ul className="space-y-4">
      {tasks.map((task, index) => (
        <li key={task._id} className="flex justify-between items-center p-4 bg-gray-100 rounded shadow">
          <div>
            <h3 className="text-lg font-bold">{task.title}</h3>
            <p>{task.description}</p>
          </div>
          {role === 'admin' && (
            <div className="flex space-x-2">
              <button onClick={() => onUpdate(task)} className="bg-yellow-500 text-white px-4 py-2 rounded">Modifier</button>
              <button onClick={() => onDelete(index)} className="bg-red-500 text-white px-4 py-2 rounded">Supprimer</button>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TaskList;