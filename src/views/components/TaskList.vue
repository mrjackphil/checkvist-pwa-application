<template>
  <div>
    <task v-for="task in list" :key="task.id" :task="task"></task>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { Checklist } from "@/entities/datatypes";
import Task from "./Task.vue";

@Component({ components: { Task } })
export default class TaskList extends Vue {
  @Prop() private list: Checklist[] = this.list;
}
</script>

