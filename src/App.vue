<template>
  <div id="app">
    <!--<vue-facebook-chat :app-id="include(apikey)" :page-id="YOUR_PAGE_ID"></vue-facebook-chat>
    To do: off stream-->
    <router-view/>
  </div>
</template>
<script>
// const { apikey } = require("#"); include Facebook API Key
</script>
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

button {
  padding: 15px;
  border: 1px solid green;
  font-size: 18px;
  margin: 15px;
}
</style>
