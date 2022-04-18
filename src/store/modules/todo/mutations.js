import Vue from 'vue';

let lastId = 0;
export default {
  GET_TASKS_LIST(state) {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    state.tasks = tasks;
  },

  ADD_NEW_TASK(state, payload) {
    lastId += 1;

    if (state.tasks == null) {
      state.tasks = [];
    }

    state.tasks.push({
      id: lastId,
      name: payload.name,
      isDone: payload.isDone,
    });
    localStorage.setItem('tasks', JSON.stringify(state.tasks));
  },

  DELETE_TASK(state, payload) {
    state.tasks = state.tasks.filter((t) => t.id !== payload);
    localStorage.setItem('tasks', JSON.stringify(state.tasks));
  },

  EDIT_TASK(state, { taskId, payload }) {
    const taskIndex = state.tasks.findIndex((t) => t.id === taskId);

    if (taskIndex !== -1) {
      const updatedTask = {
        id: taskId,
        name: payload.name,
        isDone: payload.isDone,
      };

      Vue.set(state.tasks, taskIndex, updatedTask);
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    }
  },

  TASK_DONE(state, { taskId, isDone }) {
    const taskIndex = state.tasks.findIndex((t) => t.id === taskId);
    const task = state.tasks[taskIndex];

    if (taskIndex !== -1) {
      task.isDone = isDone;
      Vue.set(state.tasks, taskIndex, task);
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    }
  },
};
