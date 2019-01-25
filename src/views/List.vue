<template>
  <div>
    <div name="title">List</div>
    <task-list :list="checklists"></task-list>
    <create-task></create-task>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Checklist } from '@/entities/datatypes';
import Fetcher from '@/entities/api';

import TaskList from './components/TaskList.vue';
import CreateTask from './components/CreateTask.vue';

@Component({ components: { TaskList, CreateTask } })
export default class List extends Vue {
  private checklists: Checklist[] = [];

  private mounted() {
    this.load();
  }

  private async load() {
    try {
      const checklists = await this.$api.checklists();
      if (checklists) {
        this.checklists = checklists;
      }
    } catch {
      alert('Problem with loading checklists');
    }
  }
}
</script>

