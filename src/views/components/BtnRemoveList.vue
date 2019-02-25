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
  private removeList() {
    this.taskId
      ? this.$api.taskDelete(this.listId, this.taskId)
      : this.$api.checklistDelete(this.listId);
		this.flash("Checklist deleted", "warning");
		this.callback();

  }
}
</script>

