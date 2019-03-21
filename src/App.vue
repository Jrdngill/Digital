<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Karla:400,400i,700|Work+Sans:600,700,800,900");

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-size: 20px;
    font-weight: bold;
    font-family: "Karla", sans-serif;
    color: #2c3e50;
    text-decoration: none;
    padding-left: 23px;
    padding-right: 23px;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
