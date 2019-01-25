<template>
  <div>
    <div v-for="task in list" :key="task.id" name="task">{{task.name}}</div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { Checklist } from "@/entities/datatypes";

@Component({})
export default class TaskList extends Vue {
  @Prop() list: Checklist[] = this.list;
}
</script>

