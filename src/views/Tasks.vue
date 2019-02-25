<template>
  <div>
    <div v-for="task in tasks" :key="task.id">{{task.content}}</div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { Task } from "@/entities/datatypes";

@Component({})
export default class Tasks extends Vue {
  private tasks: Task[] = [];

  @Prop() private id: number = this.id;

  private mounted() {
    this.load();
  }

  private async load() {
    const result = await this.$api.tasks(this.id);
    if (result) {
      this.tasks = result;
    }
  }
}
</script>

