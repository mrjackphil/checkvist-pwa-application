<template>
  <div name="task" :class="{edited: isEdit}" @click="click">{{task.name}}</div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { Task as ITask } from '@/entities/datatypes';

@Component({})
export default class Task extends Vue {
  @Prop() private task: ITask = this.task;

  private get isEdit() {
    return this.$store.state.editTask === this.task.id;
  }

  private click() {
    this.$store.commit('editTask', this.task.id);
  }
}
</script>

<style lang="scss" edited>
.edited {
  background: lightblue;
}
</style>


