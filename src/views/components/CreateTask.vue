<template>
  <button name="create" @click="click">Create Task</button>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({})
export default class CreateTask extends Vue {
  private click() {
    this.flash('Test', 'error');
  }
}

</script>

