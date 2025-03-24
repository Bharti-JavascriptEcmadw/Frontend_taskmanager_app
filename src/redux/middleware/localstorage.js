const localStorageMiddleware = store => next => action => {
    const result = next(action); // Pass the action to the reducer
  
    // After every action, save the state to localStorage
    const state = store.getState();
    localStorage.setItem('tasks', JSON.stringify(state.tasks.tasks)); // Save tasks state
  
    return result;
  };
  
  export default localStorageMiddleware;
  