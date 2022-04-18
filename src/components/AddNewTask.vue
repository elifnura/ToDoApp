<script>
export default {
  name: 'AddNewTask',
  data: () => ({
    newTask: {
      name: '',
      isDone: false,
    },
  }),
  methods: {
    onAddNewTask() {
      if (!this.newTask.name) {
        return;
      }

      this.$store.dispatch('todo/addNewTask', this.newTask);
      this.$store.dispatch('todo/getTaskList');
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
    ></v-text-field>
    <v-btn @click="onAddNewTask()" color="#ff33ae" class="ms-4 white--text" raised>Add</v-btn>
  </div>
</template>
