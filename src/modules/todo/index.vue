<script>
import TaskList from './components/TaskList.vue';
import AddNewTask from './components/AddNewTask.vue';

export default {
  name: 'ToDo',
  components: {
    TaskList,
    AddNewTask,
  },
};
</script>

<template>
  <v-app>
    <v-main>
      <v-toolbar color="#ff33ae" extended flat extension-height="120" />

      <v-card
        class="mx-auto pa-4 mb-10"
        max-width="700"
        style="margin-top: -64px"
      >
        <v-card-title
          class="
            blue-grey--text
            text--darken-2 text-subtitle-1
            font-weight-medium
            pa-0
            pb-3
          "
        >
          New Todo:
        </v-card-title>

        <add-new-task />
      </v-card>

      <task-list />
    </v-main>
  </v-app>
</template>
