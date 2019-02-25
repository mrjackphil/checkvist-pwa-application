<template>
  <div class="swipeout-action swipeout-red-back" @click="removeList">
    <i class="fa fa-trash"></i>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({})
export default class BtnRemoveList extends Vue {
  @Prop() private listId: number = this.listId;
  @Prop() private taskId: number = this.taskId;
  @Prop() private callback: () => void = this.callback;
  private async removeList() {
    const result = this.taskId
      ? await this.$api.taskDelete(this.listId, this.taskId)
      : await this.$api.checklistDelete(this.listId);

    if (result) {
      this.flash("Remove successful", "warning");
      this.callback();
    }
  }
}
</script>

