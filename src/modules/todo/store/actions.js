export default {
  getTaskList({ commit }) {
    return new Promise((resolve) => {
      setTimeout(() => {
        commit('GET_TASKS_LIST');
        resolve();
      }, 250);
    });
  },
  addNewTask({ commit }, newTask) {
    return new Promise((resolve) => {
      setTimeout(() => {
        commit('ADD_NEW_TASK', newTask);
        resolve();
      }, 250);
    });
  },
  deleteTask({ commit }, taskId) {
    return new Promise((resolve) => {
      setTimeout(() => {
        commit('DELETE_TASK', taskId);
        resolve();
      }, 250);
    });
  },
  editTask({ commit }, editedTask) {
    return new Promise((resolve) => {
      setTimeout(() => {
        commit('EDIT_TASK', editedTask);
        resolve();
      }, 250);
    });
  },
  taskDone({ commit }, checkedTask) {
    return new Promise((resolve) => {
      commit('TASK_DONE', checkedTask);
      setTimeout(() => {
        resolve();
      }, 250);
    });
  },
};
