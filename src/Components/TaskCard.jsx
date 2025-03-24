import React from 'react';

const TaskCard = ({ title, description, priority, }) => {
  return (
    <div className="bg-yellow-200 shadow-lg rounded-lg p-6 mb-4">
      {/* Priority Badge */}
      <p
        className={`font-semibold text-sm mb-2 ${
          priority === 'High'
            ? 'text-red-500'
            : priority === 'Medium'
            ? 'text-yellow-500'
            : 'text-green-500'
        }`}
      >
        Priority: {priority}
      </p>

      {/* Title */}
      <div className="flex items-center mb-4">
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      </div>

      {/* Task Description */}
      <p className="text-sm text-gray-600 mb-4">{description}</p>

    
    </div>
  );
};

export default TaskCard;

