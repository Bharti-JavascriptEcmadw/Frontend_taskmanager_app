import React, { useState } from "react";
import TaskCard from "./TaskCard";
import { Button, TextField, MenuItem } from "@mui/material";

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

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-3 sm:p-6">
          <div className="bg-white p-4 sm:p-6 rounded-lg w-full max-w-xs sm:max-w-md md:max-w-lg shadow-lg overflow-auto max-h-[90vh]">
            <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 mb-3 sm:mb-5 text-center">
              {isEditing ? "Edit Task" : "Add Task"}
            </h3>

            <div className="space-y-2 sm:space-y-3">
              <TextField
                name="title"
                label="Task Title"
                value={taskData.title}
                onChange={handleInputChange}
                fullWidth
                variant="outlined"
                size="small"
              />
              <TextField
                name="description"
                label="Task Description"
                value={taskData.description}
                onChange={handleInputChange}
                fullWidth
                multiline
                minRows={3}
                variant="outlined"
                size="small"
              />
              <TextField
                name="priority"
                label="Priority"
                value={taskData.priority}
                onChange={handleInputChange}
                fullWidth
                select
                variant="outlined"
                size="small"
              >
                <MenuItem value="Low">Low</MenuItem>
                <MenuItem value="Medium">Medium</MenuItem>
                <MenuItem value="High">High</MenuItem>
              </TextField>
            </div>

            <div className="flex justify-between mt-3 sm:mt-5">
              <Button
                variant="outlined"
                onClick={() => setIsModalOpen(false)}
                sx={{
                  color: "#d32f2f",
                  borderColor: "#d32f2f",
                  "&:hover": { backgroundColor: "#f8d7da", borderColor: "#b71c1c" },
                }}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                onClick={handleSaveTask}
                sx={{
                  backgroundColor: "#2E7D32",
                  "&:hover": { backgroundColor: "#1B5E20" },
                }}
              >
                {isEditing ? "Update Task" : "Add Task"}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskColumn;
