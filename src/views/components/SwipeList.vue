<template>
  <swipe-list :items="items" transition-key="id">
    <!--
    @swipeout:contentclick="contentClick"
    @swipeout:click="itemClick"
    @swipeout:doubleclick="itemDblClick"
    -->
    <template slot-scope="{ item }">
      <!-- item is the corresponding object from the array -->
      <!-- index is clearly the index -->
      <!-- revealLeft is method which toggles the left side -->
      <!-- revealRight is method which toggles the right side -->
      <!-- close is method which closes an opened side -->
      <div class="card-content">
        <!-- style content how ever you like -->
        <h2 @click="onClick(item.id)">{{ item.name }}</h2>
      </div>
    </template>
    <template slot="left">
      <!-- remove <template slot="left" slot-scope="{ item }"> if you dont wanna have left swipe side  -->
      <!-- close is method which closes an opened side -->
      <div class="swipeout-action">
        <i class="fa fa-cloud"></i>
      </div>
      <div class="swipeout-action">
        <!-- place icon here or what ever you want -->
      </div>
    </template>
    <template slot="right" slot-scope="{ item }">
      <!-- remove <template slot="right" slot-scope="{ item }"> if you dont wanna have right swipe side  -->
      <!-- close is method which closes an opened side -->
      <remove-list :listId="item.id"></remove-list>
    </template>
    <div slot="empty">
      <!-- change mockSwipeList to an empty array to see this slot in action  -->
      list is empty ( filtered or just empty )
    </div>
  </swipe-list>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
// @ts-ignore
import { SwipeList, SwipeOut } from "vue-swipe-actions";
import RemoveList from "./BtnRemoveList.vue";

@Component({ components: { SwipeOut, SwipeList, RemoveList } })
export default class SwipeActionList extends Vue {
  @Prop() private items: any[] = this.items;
  private name = "swipe-action-list";

  private onClick(id: number) {
    this.$router.push(`/tasks/${id}`);
  }
}
</script>

<style lang="scss">
.swipeout-action {
  width: 5rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.swipeout-red-back {
  background: red;
  color: white;
}
</style>

