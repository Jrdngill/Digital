<template>
  <div class="footer">
    <div class="container">
      <h1>Maestro Media Group B.V.</h1>
      <p class="large-text">Snellius 1, Office A6, 6442 RM Herleen
        <br>info@maestrodigital.nl
      </p>
      <font-awesome-icon icon="spinner"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped lang="scss">
body {
  margin: 0;
}
.footer {
  background-color: $grey-black;
  height: 633px;
}

.container {
  text-align: left;
  padding-left: 113px;
  padding-top: 184px;
}

h1 {
  @include footer-heading;
}

p {
  @include large-text;
}
</style>