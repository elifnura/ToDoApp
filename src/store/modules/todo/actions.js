export default {
  getTaskList({ commit }) {
    return new Promise((resolve) => {
      setTimeout(() => {
        commit('GET_TASKS_LIST');
        resolve();
      }, 250);
    });
  },
  addNewTask({ commit }, data) {
    return new Promise((resolve) => {
      setTimeout(() => {
        commit('ADD_NEW_TASK', data);
        resolve();
      }, 250);
    });
  },
  deleteTask({ commit }, data) {
    return new Promise((resolve) => {
      setTimeout(() => {
        commit('DELETE_TASK', data);
        resolve();
      }, 250);
    });
  },
  editTask({ commit }, data) {
    return new Promise((resolve) => {
      setTimeout(() => {
        commit('EDIT_TASK', data);
        resolve();
      }, 250);
    });
  },
  taskDone({ commit }, data) {
    return new Promise((resolve) => {
      commit('TASK_DONE', data);
      setTimeout(() => {
        resolve();
      }, 250);
    });
  },
};
