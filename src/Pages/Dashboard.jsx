import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, updateTask, deleteTask, setTasks } from "../redux/taskSlice"; 
import Header1 from "../Components/Header1";
import TaskColumn from "../Components/TaskColumn";
import Filter from "../Components/Filter";
import Footer from "../Components/Footer";

const Dashboard = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);

  const [filter, setFilter] = useState({
    priority: "",
    title: "",
  });

  // Local Storage se Redux Store me Data Load Karna
  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      dispatch(setTasks(JSON.parse(storedTasks))); // Redux store me set karna
    }
  }, [dispatch]);

  // Redux Store ke changes ko Local Storage me Save Karna
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = (task, column) => {
    dispatch(addTask({ ...task, status: column }));
  };

  const handleUpdateTask = (updatedTask) => {
    dispatch(updateTask(updatedTask));
  };

  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  const handleFilterChange = (filters) => {
    setFilter(filters);
  };

  const filterTasks = (columnTasks) => {
    if (!columnTasks) return [];
    return columnTasks.filter((task) => {
      return (
        (filter.priority ? task.priority === filter.priority : true) &&
        (filter.title ? task.title?.toLowerCase().includes(filter.title.toLowerCase()) : true)
      );
    });
  };

  const todoTasks = tasks.filter((task) => task.status === "To Do");
  const inProgressTasks = tasks.filter((task) => task.status === "In Progress");
  const doneTasks = tasks.filter((task) => task.status === "Done");

  return (
    <div className="flex flex-col min-h-screen">
      <div className="sticky top-0 left-0 w-full bg-white shadow z-50">
        <Header1 />
      </div>

      <div className="relative z-40 w-full bg-white shadow-md mt-14">
        <Filter onFilterChange={handleFilterChange} />
      </div>

      <div className="flex-1 p-4 bg-teal-200">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="w-full sm:w-1/3">
            <TaskColumn
              title="To Do"
              tasks={filterTasks(todoTasks)}
              addTask={(task) => handleAddTask(task, "To Do")}
              updateTask={handleUpdateTask}
              deleteTask={handleDeleteTask}
            />
          </div>

          <div className="w-full sm:w-1/3">
            <TaskColumn
              title="In Progress"
              tasks={filterTasks(inProgressTasks)}
              addTask={(task) => handleAddTask(task, "In Progress")}
              updateTask={handleUpdateTask}
              deleteTask={handleDeleteTask}
            />
          </div>

          <div className="w-full sm:w-1/3">
            <TaskColumn
              title="Done"
              tasks={filterTasks(doneTasks)}
              addTask={(task) => handleAddTask(task, "Done")}
              updateTask={handleUpdateTask}
              deleteTask={handleDeleteTask}
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;
