<template>
  <div id="app">
    <router-view/>
    <flash-message class="flash"></flash-message>
  </div>
</template>

<style lang="scss">
@import "../node_modules/vue-flash-message/dist/vue-flash-message.min.css";
@import "../node_modules/vue-swipe-actions/dist/vue-swipe-actions.css";
@import url("https://use.fontawesome.com/releases/v5.7.0/css/all.css");

body {
  * {
    box-sizing: content-box;
  }
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  overflow-y: auto;
  overflow-x: hidden;
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

.flash__message {
  animation: hide 1s 2s forwards;
}

@keyframes hide {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>
