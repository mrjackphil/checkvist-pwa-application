<template>
  <div>
    <div name="title" class="list-title">List</div>
    <input v-if="input" v-model="newtask" v-focus name="add" @keydown.enter="add" @blur="hideAdd">
    <pull-to
      :top-load-method="showAdd"
      :top-block-height="60"
      @top-state-change="hideAdd"
      :top-config="pullConfig"
      :distance-index="20"
    >
      <!-- <task-list :list="checklists"></task-list> -->
      <swipe-action-list :items="checklists" v-on:update="load"></swipe-action-list>
    </pull-to>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { Checklist } from "@/entities/datatypes";
import Fetcher from "@/entities/api";

import TaskList from "./components/TaskList.vue";

// @ts-ignore
import PullTo from "vue-pull-to";
import SwipeActionList from "./components/SwipeList.vue";

@Component({ components: { TaskList, PullTo, SwipeActionList } })
export default class List extends Vue {
  private checklists: Checklist[] = [];
  private input: boolean = false;
  private newtask: string = "";
  private pullConfig = {
    pullText: "Pull down to create new list",
    triggerText: "Release to create new list",
    triggerDistance: 15,
    stayDistance: 0,
    doneText: ""
  };

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
      this.flash("Data not loaded", "error");
    }
  }

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
}
</script>

<style lang="scss" scoped>
.list-title {
  position: absolute;
  left: 0;
  top: 0;
}
</style>

<style lang="scss">
.action-block {
  pointer-events: none;
}
</style>
