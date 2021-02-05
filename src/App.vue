<template>
  <div id="app" class="App">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import '~reset-css';

* {
  box-sizing: border-box;
}

.App {
  max-width: 732px;
  margin: 0 auto;
  padding: 24px 16px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
