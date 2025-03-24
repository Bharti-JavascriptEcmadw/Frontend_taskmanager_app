import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, moveTask, updateTask, deleteTask } from "../redux/taskSlice"; 
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import Header1 from "../Components/Header1";
import TaskColumn from "../Components/TaskColumn";
import Filter from "../Components/Filter";
import Footer from "../Components/Footer";

const Dashboard = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);

  const [filter, setFilter] = useState({
    priority: "",
    category: "",
    dueDate: "",
  });

  const handleAddTask = (task, column) => {
    dispatch(addTask({ ...task, status: column }));
  };

  const handleUpdateTask = (updatedTask) => {
    dispatch(updateTask(updatedTask));
  };

  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  const handleOnDragEnd = (result) => {
    const { destination, source } = result;
    if (!destination) return;
    if (destination.droppableId === source.droppableId && destination.index === source.index) return;

    const movedTask = tasks.find((task) => task.id === result.draggableId);
    if (movedTask) {
      dispatch(moveTask({ id: movedTask.id, newStatus: destination.droppableId }));
    }
  };

  const handleFilterChange = (filters) => {
    setFilter(filters);
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const filterTasks = (columnTasks) => {
    if (!columnTasks) return [];
    return columnTasks.filter((task) => {
      return (
        (filter.priority ? task.priority === filter.priority : true) &&
        (filter.category ? task.category?.toLowerCase().includes(filter.category.toLowerCase()) : true) &&
        (filter.dueDate ? task.dueDate === filter.dueDate : true)
      );
    });
  };

  const todoTasks = tasks.filter((task) => task.status === "To Do");
  const inProgressTasks = tasks.filter((task) => task.status === "In Progress");
  const doneTasks = tasks.filter((task) => task.status === "Done");

  return (
    <div className="flex flex-col min-h-screen">
      {/* Sticky Header */}
      <div className="sticky top-0 left-0 w-full bg-white shadow z-50">
        <Header1 />
      </div>

      {/* Filter Section */}
      <div className="relative z-40 w-full bg-white shadow-md mt-14">
        <Filter onFilterChange={handleFilterChange} />
      </div>

      {/* Task Board with Responsive Layout */}
      <div className="flex-1 p-4 bg-teal-200">
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <div className="flex flex-col sm:flex-row gap-4">
            {/* To Do Column */}
            <Droppable droppableId="To Do">
              {(provided) => (
                <div ref={provided.innerRef} {...provided.droppableProps} className="w-full sm:w-1/3">
                  <TaskColumn
                    title="To Do"
                    tasks={filterTasks(todoTasks)}
                    addTask={(task) => handleAddTask(task, "To Do")}
                    updateTask={handleUpdateTask}
                    deleteTask={handleDeleteTask}
                    provided={provided}
                  />
                  {provided.placeholder}
                </div>
              )}
            </Droppable>

            {/* In Progress Column */}
            <Droppable droppableId="In Progress">
              {(provided) => (
                <div ref={provided.innerRef} {...provided.droppableProps} className="w-full sm:w-1/3">
                  <TaskColumn
                    title="In Progress"
                    tasks={filterTasks(inProgressTasks)}
                    addTask={(task) => handleAddTask(task, "In Progress")}
                    updateTask={handleUpdateTask}
                    deleteTask={handleDeleteTask}
                    provided={provided}
                  />
                  {provided.placeholder}
                </div>
              )}
            </Droppable>

            {/* Done Column */}
            <Droppable droppableId="Done">
              {(provided) => (
                <div ref={provided.innerRef} {...provided.droppableProps} className="w-full sm:w-1/3">
                  <TaskColumn
                    title="Done"
                    tasks={filterTasks(doneTasks)}
                    addTask={(task) => handleAddTask(task, "Done")}
                    updateTask={handleUpdateTask}
                    deleteTask={handleDeleteTask}
                    provided={provided}
                  />
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        </DragDropContext>
      </div>

      {/* Footer - No Sticky, Appears at the End of Page */}
      <Footer />
    </div>
  );
};

export default Dashboard;
