<template>
  <div>
    <!-- <div v-for="task in tasks" :key="task.id">{{task.content}}</div> -->
    <input v-if="input" v-model="newtask" v-focus name="add" @keydown.enter="add" @blur="hideAdd">
    <pull-to
      :top-block-height="60"
      :top-load-method="showAdd"
      @top-state-change="hideAdd"
      :top-config="pullConfig"
      :distance-index="20"
    >
      <SwipeTask :items="tasks"/>
    </pull-to>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { Task } from "@/entities/datatypes";
// @ts-ignore
import PullTo from "vue-pull-to";
import SwipeTask from "@/views/components/SwipeTask.vue";

@Component({ components: { SwipeTask, PullTo } })
export default class Tasks extends Vue {
  private tasks: Task[] = [];
  private input: boolean = false;
  private newtask: string = "";
  private pullConfig = {
    pullText: "Pull down to create a task",
    triggerText: "Release to create new task",
    triggerDistance: 15,
    stayDistance: 0,
    doneText: ""
  };

  @Prop() private id: number = this.id;

  private showAdd(loaded: (s: string) => void) {
    this.input = true;
    loaded("done");
  }

  private hideAdd(val: any) {
    if (val && val !== "loaded-done" && val !== "trigger") {
      this.input = false;
    }
  }

  private async add() {
    try {
      const list = await this.$api.checklistCreate(this.newtask);
    } catch (err) {
      throw Error(err);
    }

    this.newtask = "";
    this.hideAdd("hide");
    this.flash("List created", "info");
    this.load();
  }

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

