<template>
  <div>
    <div name="title">List</div>
    <task-list :list="checklists"></task-list>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Checklist } from '@/entities/datatypes';
import Fetcher from '@/entities/fetch';

import TaskList from './components/TaskList.vue';

@Component({ components: { TaskList } })
export default class List extends Vue {
  private checklists: Checklist[] = [];

  private mounted() {
	  this.load();
  }

  private async load() {
	  try {
		const checklists = await this.$api.checklists();
		if (checklists) { this.checklists = checklists }
	  } catch {
		  alert('Problem with loading checklists');
	  }
  }
}
</script>

