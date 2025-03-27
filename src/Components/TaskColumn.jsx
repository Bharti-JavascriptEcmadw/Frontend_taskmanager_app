import React, { useState } from "react";
import TaskCard from "./TaskCard";
import TaskModel from "./TaskModel";
import { Button } from "@mui/material";

const TaskColumn = ({ title, tasks, addTask, updateTask, deleteTask }) => {
  const [taskData, setTaskData] = useState({
    id: "",
    title: "",
    description: "",
    priority: "Medium",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleOpenModal = (task = null) => {
    if (task) {
      setTaskData(task);
      setIsEditing(true);
    } else {
      setTaskData({ id: null, title: "", description: "", priority: "Medium" });
      setIsEditing(false);
    }
    setIsModalOpen(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTaskData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSaveTask = () => {
    if (taskData.title.trim() && taskData.description.trim()) {
      if (isEditing) {
        updateTask(taskData);
      } else {
        addTask({ ...taskData, id: Date.now().toString() });
      }
      setIsModalOpen(false);
    }
  };

  return (
    <div className="w-full max-w-md sm:max-w-lg lg:max-w-xl p-3 sm:p-4 bg-red-100 rounded-lg shadow-lg">
      <h3 className="text-base sm:text-lg md:text-xl font-semibold text-black mb-3 sm:mb-5">
        {title}
      </h3>

      {tasks.map((task) => (
        <div key={task.id} className="mb-3 sm:mb-4 p-3 bg-white rounded-lg shadow-md">
          <TaskCard {...task} />
          <div className="flex justify-between mt-2">
            <Button variant="outlined" color="primary" size="small" onClick={() => handleOpenModal(task)}>
              Edit
            </Button>
            <Button variant="outlined" color="secondary" size="small" onClick={() => deleteTask(task.id)}>
              Delete
            </Button>
          </div>
        </div>
      ))}

      <Button
        variant="contained"
        onClick={() => handleOpenModal(null)}
        sx={{
          marginTop: 2,
          width: "100%",
          backgroundColor: "#1976D2",
          "&:hover": { backgroundColor: "#1565C0" },
        }}
      >
        Add Task
      </Button>

      {/* Task Modal Component */}
      <TaskModel
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        taskData={taskData}
        isEditing={isEditing}
        handleInputChange={handleInputChange}
        handleSaveTask={handleSaveTask}
      />
    </div>
  );
};

export default TaskColumn;
