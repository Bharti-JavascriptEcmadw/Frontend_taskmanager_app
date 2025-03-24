import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [
    {
      id: "1",
      title: "Design Homepage",
      description: "Create a user-friendly homepage layout.",
      priority: "High",
      
      status: "To Do",
    },
    {
      id: "2",
      title: "Design Homepage",
      description: "Create a user-friendly homepage layout.",
      priority: "Medium",
      
      status: "To Do",
    },

    {
      id: "3",
      title: "Design Homepage",
      description: "Create a user-friendly homepage layout.",
      priority: "Low",
      
      status: "To Do",
    },
    {
      id: "4",
      title: "API Integration",
      description: "Connect frontend with backend API.",
      priority: "Medium",
      likes: 5,
    
      status: "In Progress",
    },
    {
      id: "5",
      title: "Testing & Debugging",
      description: "Run unit tests and fix bugs.",
      priority: "Low",
    
      status: "Done",
    },
  ],
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    moveTask: (state, action) => {
      const { id, newStatus } = action.payload;
      const task = state.tasks.find((task) => task.id === id);
      if (task) {
        task.status = newStatus;
      }
    },
    updateTask: (state, action) => {
      const updatedTask = action.payload;
      const index = state.tasks.findIndex((task) => task.id === updatedTask.id);
      if (index !== -1) {
        state.tasks[index] = updatedTask;
      }
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
  },
});

export const { addTask, moveTask, updateTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;
