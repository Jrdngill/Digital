<template>
  <div class="nav">
    <div class="nav-left">
      <img src="../assets/images/logo.png" width="42" height="42">
      <Languages/>
    </div>
    <div class="nav-center">
      <router-link to="/">{{ $t('headerHomePage') }}</router-link>
      <router-link to="/services">{{ $t('headerServicePage') }}</router-link>
      <router-link to="/cases">{{ $t('headerCasesPage') }}</router-link>
      <router-link to="/news">{{ $t('headerNewsPage') }}</router-link>
      <router-link to="/contact">{{ $t('headerContactPage') }}</router-link>
    </div>
    <div class="nav-right">
      <p>Messenger</p>
    </div>
  </div>
</template>

<script>
import Languages from "@/components/Languages.vue";

export default {
  name: "Header",
  components: {
    Languages
  }
};
</script>

<style scoped lang="scss">
.nav {
  display: inline-grid;
  grid-template-columns: repeat(3, 1fr);
  padding-top: 55px;

  a {
    font-size: 20px;
    font-weight: bold;
    font-family: "Karla", sans-serif;
    color: $black;
    text-decoration: none;
    padding-left: 23px;
    padding-right: 23px;
    &.router-link-exact-active {
      color: $grey-active;
    }
  }
}

.nav-left {
  justify-self: left;
  padding-left: 120px;
  grid-column: 1;
}

.nav-center {
  justify-content: center;
  padding-top: 15px;
  grid-column: 2;
}

.nav-right {
  justify-self: right;
  grid-column: 3;
  padding-right: 112px;
  margin-top: -8px;

  p {
    font-size: 20px;
    font-family: "Karla", sans-serif;
    font-weight: 700;
    color: $blue;
  }
}
</style>