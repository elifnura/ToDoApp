<script>
import { mapState } from 'vuex';
import TaskItem from './TaskItem.vue';

export default {
  name: 'TaskList',
  components: {
    TaskItem,
  },
  computed: {
    ...mapState('todo', ['tasks']),
  },
  methods: {
    onGetTaskList() {
      this.$store.dispatch('todo/getTaskList');
    },
  },
  created() {
    this.onGetTaskList();
  },
};
</script>

<template>
  <div v-if="tasks">
    <template v-for="task in tasks">
      <v-card :key="task.id" class="mx-auto pa-4" max-width="700" elevation="0" outlined tile>
        <TaskItem :task="task" />
      </v-card>
    </template>
  </div>
  <v-card v-else-if="!tasks" class="mx-auto pa-4" max-width="700" elevation="1" outlined tile>
    <h3 class="text-center">let's add to do 🥳</h3>
  </v-card>
</template>

<style scoped>
</style>
