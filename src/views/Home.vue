<template>
  <div class="home">
    <Header/>
    <div class="container">
      <h1>WE ARE MAESTRO</h1>
    </div>
    <button>Get to know us</button>

    <p>video here</p>
    <div class="container-title">
      <h2>Masters in connecting your brand with GEN-Z and Millenials.</h2>
    </div>
    <div class="container-services">
      <div class="service-left">
        <h4>01</h4>
        <h3>Branding</h3>
        <p
          class="medium-text"
        >Working out and coming up with concepts from A to Z. Thanks to our broad knowledge, tools and partners in the field of esports and broadcasting, we develop original concepts.</p>
      </div>
      <div class="service-right">
        <h4>02</h4>
        <h3>Esports</h3>
        <p
          class="medium-text"
        >With years of experience in having esport teams playing in esport tournaments such as the Copenhagen Games, Maestro Digital is the market leader in the field of esports in the Benelux.</p>
      </div>
      <div class="service-left">
        <h4>03</h4>
        <h3>Marketing</h3>
        <p
          class="medium-text"
        >Reaching young people together with the gaming and millennial market. Thanks to our experience in esports and general marketing, we can make every brand appeal to young people and ensure brand activation.</p>
      </div>
      <div class="service-right">
        <h4>04</h4>
        <h3>Graphic design</h3>
        <p
          class="medium-text"
        >Creating and coming up with graphic concepts such as design and online related. Thanks to our experienced programmers and designers, we can create and set up projects in your house style.</p>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "home",
  components: {
    HelloWorld,
    Header,
    Footer
  }
};
</script>

<style scoped lang="scss">
body {
  margin: 0;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;

  min-height: 55vh;
}

.container-title {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: left;
}

.container-services {
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(2, 1fr);
  text-align: left;
  justify-items: center;
  align-items: center;
}

.service-left {
  max-width: 500px;
  padding-left: 260px;
}

.service-right {
  max-width: 500px;
  padding-right: 260px;
}

button {
  width: 221px;
  height: 49px;
  border-radius: 71px;
  border: none;
  font-size: 21px;
  font-weight: bold;
  color: $white;
  background-color: $pink;
}

h1 {
  @include heading-1;
}

h2 {
  @include heading-2;
  max-width: 1190px;
  line-height: 71px;
}

h3 {
  @include heading-3;
}

h4 {
  @include heading-4;
}
</style>