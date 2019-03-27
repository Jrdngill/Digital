<template>
  <div class="footer">
    <div class="container">
      <h1>Maestro Media Group B.V.</h1>
      <p class="large-text">
        Snellius 1, Office A6, 6442 RM Herleen
        <br>
        <a href="mailto:info@maestrodigital.nl">info@maestrodigital.nl</a>
      </p>
      <div class="socials">
        <a href="https://twitter.com/maestrodigital_">
          <font-awesome-icon :icon="['fab', 'instagram']" size="2x"/>
        </a>
        <a href="https://www.facebook.com/mmgbvdigital/">
          <font-awesome-icon :icon="['fab', 'facebook']" size="2x"/>
        </a>
        <a href="https://twitter.com/maestrodigital_">
          <font-awesome-icon :icon="['fab', 'twitter']" size="2x"/>
        </a>
      </div>
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

.socials {
  padding-top: 70px;
  color: $white;

  svg {
    padding-right: 30px;
  }

  a {
    color: $white;
  }
}

h1 {
  @include footer-heading;
  text-decoration: none;
}

p {
  @include large-text;

  a {
    text-decoration: underline;
    color: $white;
  }
}
</style>