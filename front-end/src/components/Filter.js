import React from 'react';

const Filter = ({ onFilter }) => {
  const handleFilter = (e) => {
    onFilter(e.target.value);
  };

  return (
    <div>
      <input 
        type="text" 
        placeholder="Rechercher une tâche..." 
        onChange={handleFilter} 
      />
    </div>
  );
};

export default Filter;
