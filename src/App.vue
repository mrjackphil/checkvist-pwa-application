<template>
  <div id="app">
	<router-view/>
	<flash-message class="flash"></flash-message>
  </div>
</template>

<style lang="scss">
@import '../node_modules/vue-flash-message/dist/vue-flash-message.min.css';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: fixed;
  width: 100%;
  height: 100%;
}

#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.flash {
	position: fixed;
	top: 0;
	right: 0;
}
</style>
