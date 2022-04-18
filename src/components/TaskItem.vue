<script>
/* eslint-disable */
export default {
  name: 'TaskItem',
  data: () => ({
    isEdit: false,
  }),
  props: {
    task: {
      type: Object,
      required: true,
    },
  },
  methods: {
    onDeleteTask(taskId) {
      this.$store.dispatch('todo/deleteTask', taskId);
    },
    onEditTask() {
      if (!this.task.name) {
        return;
      }
      this.toggleEdit(false);

      const data = {
        taskId: this.task.id,
        payload: {
          name: this.task.name,
          isDone: this.task.isDone,
        },
      };
      this.$store.dispatch('todo/editTask', data);
    },
    toggleEdit(value) {
      this.isEdit = value;
    },
    onTaskDone(value) {
      this.$store.dispatch('todo/taskDone', {taskId: this.task.id, isDone: value});
    }
  },
};
</script>
<template>
  <div class="d-flex" v-if="!isEdit">
    <div class="d-flex align-center">
      <v-checkbox class="ma-0" color="success" v-model="task.isDone" @click="onTaskDone(task.isDone)" hide-details></v-checkbox>
      <v-card-text class="blue-grey--text text--darken-2 pa-0">
        {{ task.name }}
      </v-card-text>
    </div>
    <v-spacer></v-spacer>
    <div class="d-flex">
      <v-icon @click="toggleEdit(!isEdit)" color="#ff33ae"> mdi-pencil </v-icon>
      <v-icon @click="onDeleteTask(task.id)" color="#ff33ae" class="ms-4">
        mdi-trash-can-outline
      </v-icon>
    </div>
  </div>

  <div class="d-flex align-center" v-else-if="isEdit">
    <div class="d-flex align-center w-100">
      <span class="blue-grey--text text--darken-2 pa-0 me-4"> Edit: </span>
      <v-text-field
        v-model="task.name"
        hide-details="auto"
        outlined
      ></v-text-field>
    </div>
    <v-spacer></v-spacer>
    <div class="d-flex">
      <v-btn @click="onEditTask()" color="#ff33ae" class="ms-4" outlined
        >Save</v-btn
      >
    </div>
  </div>
</template>

<style>
.w-100 {
  width: 100%;
}
.v-text-field--outlined > .v-input__control > .v-input__slot {
  min-height: 38px !important;
}
</style>
