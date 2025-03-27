import React from "react";
import { Button, TextField, MenuItem } from "@mui/material";

const TaskModel = ({ isOpen, onClose, taskData, isEditing, handleInputChange, handleSaveTask }) => {
  if (!isOpen) return null;

  return (
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
            onClick={onClose}
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
  );
};

export default TaskModel;
