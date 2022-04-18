<script>
import { mapState, mapActions } from 'vuex';
import TaskItem from './TaskItem.vue';

export default {
  name: 'TaskList',
  components: {
    TaskItem,
  },
  computed: {
    ...mapState('todo', ['tasks']),
  },
  created() {
    this.fetchTaskList();
  },
  methods: {
    ...mapActions('todo', ['getTaskList']),
    fetchTaskList() {
      this.getTaskList();
    },
  },
};
</script>

<template>
  <div v-if="tasks.length">
    <template v-for="task in tasks">
      <v-card
        :key="task.id"
        class="mx-auto pa-4"
        max-width="700"
        elevation="0"
        outlined
        tile
      >
        <task-item :task="task" />
      </v-card>
    </template>
  </div>

  <v-card
    v-else
    class="mx-auto pa-4"
    max-width="700"
    elevation="1"
    outlined
    tile
  >
    <h3 class="text-center">let's add to do 🥳</h3>
  </v-card>
</template>
