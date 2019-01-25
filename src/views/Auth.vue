<template>
  <div>
    <div name="title">Checkvist</div>
    <div v-show="alertMessage" name="description">Invalid email/password combination</div>
    <input v-model="email" type="email" name="email" placeholder="Your checkvist email">
    <input v-model="pass" type="password" name="password" placeholder="Your checkvist password">
    <button name="login" @click="login">Login</button>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import router from '@/router';

@Component({})
export default class Auth extends Vue {
  private alertMessage = false;
  private email = '';
  private pass = '';

  private async login() {
    try {
      const token = await this.$api.login(this.email, this.pass);
      this.alertMessage = false;
      if (token) { localStorage.setItem('token', token); }
      router.push('/list');
    } catch {
      this.alertMessage = true;
    }
  }

}
</script>


<style lang="scss" scoped>
.desc_hide {
  display: none;
}
</style>

