<script>
import { mapActions } from 'vuex';

export default {
  name: 'AddNewTask',
  data: () => ({
    newTask: {
      name: '',
      isDone: false,
    },
  }),
  methods: {
    ...mapActions('todo', ['getTaskList', 'addNewTask']),
    addTask() {
      if (!this.newTask.name) {
        return;
      }

      this.getTaskList();
      this.addNewTask(this.newTask);
      this.getTaskList();
      this.clearAddForm();
    },
    clearAddForm() {
      this.newTask = {
        name: '',
        isDone: false,
      };
    },
  },
};
</script>

<template>
  <div class="d-flex">
    <v-text-field
      v-model="newTask.name"
      hide-details="auto"
      outlined
    />
    <v-btn @click="addTask" color="#ff33ae" class="ms-4 white--text" raised>Add</v-btn>
  </div>
</template>
