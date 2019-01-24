<template>
  <div>
    <div name="title">Checkvist</div>
    <div class="desc desc_hide" name="description">Invalid email/password combination</div>
    <input type="email" name="login" placeholder="Your checkvist email">
    <input type="password" name="password" placeholder="Your checkvist password">
    <button name="login" @click="login"></button>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class Auth extends Vue {
  private login() {
    const a = document.querySelector(".desc");
    a ? a.classList.remove("desc_hide") : null;
  }
}
</script>


<style lang="scss" scoped>
.desc_hide {
  display: none;
}
</style>

