<script>
import { mapActions } from 'vuex';

export default {
  name: 'TaskItem',
  props: {
    task: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    isEdit: false,
    formData: {},
  }),
  created() {
    this.formData = { ...this.task };
  },
  methods: {
    ...mapActions('todo', ['deleteTask', 'editTask', 'taskDone']),
    removeTask(taskId) {
      this.deleteTask(taskId);
    },
    isTaskDone(value) {
      this.taskDone({ taskId: this.task.id, isDone: value });
    },
    updateTask() {
      if (!this.task.name) {
        return;
      }
      this.toggleEdit(false);

      const updatedTask = {
        taskId: this.task.id,
        payload: {
          name: this.task.name,
          isDone: this.task.isDone,
        },
      };

      this.editTask(updatedTask);
    },
    toggleEdit(value) {
      this.isEdit = value;
    },
  },
};
</script>
<template>
  <div v-if="!isEdit" class="d-flex">
    <div class="d-flex align-center">
      <v-checkbox
        v-model="formData.isDone"
        class="ma-0"
        color="success"
        hide-details
        @click="isTaskDone(formData.isDone)"
      />
      <v-card-text class="blue-grey--text text--darken-2 pa-0">
        {{ formData.name }}
      </v-card-text>
    </div>

    <v-spacer></v-spacer>

    <div class="d-flex">
      <v-icon color="#ff33ae" @click="toggleEdit(!isEdit)"> mdi-pencil </v-icon>
      <v-icon class="ms-4" color="#ff33ae" @click="removeTask(formData.id)">
        mdi-trash-can-outline
      </v-icon>
    </div>
  </div>

  <div v-else-if="isEdit" class="d-flex align-center">
    <div class="d-flex align-center w-100">
      <span class="blue-grey--text text--darken-2 pa-0 me-4"> Edit: </span>
      <v-text-field
        v-model="formData.name"
        hide-details="auto"
        outlined
      />
    </div>

    <v-spacer></v-spacer>

    <div class="d-flex">
      <v-btn color="#ff33ae" class="ms-4" outlined @click="updateTask"
        >Save
      </v-btn>
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
