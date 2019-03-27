<template>
  <div id="app">
    <vue-facebook-chat :app-id="YOUR_APP_IDD" :page-id="YOUR_PAGE_ID"></vue-facebook-chat>
    <!-- To do: off stream -->
    <router-view/>
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Karla:400,400i,700|Work+Sans:600,700,800,900");

body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
