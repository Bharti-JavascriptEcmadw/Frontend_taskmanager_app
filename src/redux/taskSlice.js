import { createSlice } from "@reduxjs/toolkit";

// 🟢 Step 1: Local Storage se Initial State Load Karein (Agar Empty ho to Default Tasks)
const loadTasksFromLocalStorage = () => {
  try {
    const tasks = localStorage.getItem("tasks");
    if (tasks) {
      return JSON.parse(tasks);
    } else {
      // 🟢 Default 5 Tasks
      const defaultTasks = [
        { id: 1, title: "Design UI Mockups", priority: "High", status: "To Do" },
        { id: 2, title: "Set Up Database", priority: "Medium", status: "To Do" },
        { id: 3, title: "Develop API Endpoints", priority: "High", status: "In Progress" },
        { id: 4, title: "Write Documentation", priority: "Low", status: "In Progress" },
        { id: 5, title: "Test Application", priority: "Medium", status: "Done" },
      ];
      localStorage.setItem("tasks", JSON.stringify(defaultTasks));
      return defaultTasks;
    }
  } catch (error) {
    console.error("Error loading tasks from local storage:", error);
    return [];
  }
};

const initialState = {
  tasks: loadTasksFromLocalStorage(),
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
      localStorage.setItem("tasks", JSON.stringify(state.tasks)); 
    },
    updateTask: (state, action) => {
      const index = state.tasks.findIndex(task => task.id === action.payload.id);
      if (index !== -1) {
        state.tasks[index] = action.payload;
      }
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    setTasks: (state, action) => {
      state.tasks = action.payload;
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    }
  }
});

export const { addTask, updateTask, deleteTask, setTasks } = taskSlice.actions;
export default taskSlice.reducer;
