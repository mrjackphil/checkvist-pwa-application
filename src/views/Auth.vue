<template>
  <div>
    <div name="title">Checkvist</div>
    <div v-show="alertMessage" name="description">Invalid email/password combination</div>
    <input type="email" name="email" placeholder="Your checkvist email">
    <input type="password" name="password" placeholder="Your checkvist password">
    <button name="login" @click="login">Login</button>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Fetcher from '@/lib/fetch';

@Component({})
export default class Auth extends Vue {
  private alertMessage = false;

  private mounted() {
	  //@ts-ignore
	  window.f = new Fetcher;
  }

  private login() {
	  this.alertMessage = true;
  }
}
</script>


<style lang="scss" scoped>
.desc_hide {
  display: none;
}
</style>

