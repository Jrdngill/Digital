<template>
  <div class="home">
    <Header/>
    <div class="container">
      <h1>{{ $t('heroMsg') }}</h1>
      <br>
      <router-link to="/about">
        <button>{{ $t('heroBtnMsg') }}</button>
      </router-link>
    </div>
    <div class="gradient-background">
      <iframe
        width="1190"
        height="660"
        src="https://www.youtube.com/embed/pTA0DSfrGZ0"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <div class="container-title">
        <h2>{{ $t('serviceHeaderMsg') }}</h2>
      </div>
      <div class="container-services">
        <div class="service-left">
          <h4>01</h4>
          <h3>{{ $t('serviceSubHeader01') }}</h3>
          <p class="medium-text">{{ $t('serviceSubHeaderText01') }}</p>
        </div>
        <div class="service-right">
          <h4>02</h4>
          <h3>{{ $t('serviceSubHeader02') }}</h3>
          <p class="medium-text">{{ $t('serviceSubHeaderText02') }}</p>
        </div>
        <div class="service-left">
          <h4>03</h4>
          <h3>{{ $t('serviceSubHeader03') }}</h3>
          <p class="medium-text">{{ $t('serviceSubHeaderText03') }}</p>
        </div>
        <div class="service-right">
          <h4>04</h4>
          <h3>{{ $t('serviceSubHeader04') }}</h3>
          <p class="medium-text">{{ $t('serviceSubHeaderText04') }}</p>
        </div>
      </div>
    </div>

    <div class="container-portfolio">
      <div class="portfolio-left">
        <img src="../assets/images/phone.png">
      </div>
      <div class="portfolio-right">
        <h3>{{ $t('portfolioHeaderMsg') }}</h3>
        <div class="portfolio-right-button">
          <button>{{ $t('portfolioBtnMsg') }}</button>
        </div>
      </div>
    </div>

    <div class="article-container">
      <h2>Our Articles</h2>
      <div class="catagory">
        <p class="small-text-bold-active" id="#">All</p>
        <p class="small-text-bold" id="#">Branding</p>
        <p class="small-text-bold" id="#">Marketing</p>
        <p class="small-text-bold" id="#">Esports</p>
        <p class="small-text-bold" id="#">Design</p>

        <button id="left-button">.</button>
        <button id="right-button">.</button>
      </div>
    </div>

    <div class="articles">
      <div class="articles-card-large">
        <div class="articles-test-large">
          <h2>
            How to Market to GenZ Effectively:
            4 Takeaways from Savage.Z
          </h2>
          <p>#marketing</p>
        </div>
      </div>

      <div class="articles-card-small">
        <div class="articles-test-small">
          <h2>Esports Brand Checklist 2019</h2>
          <p>#branding #esports</p>
        </div>
      </div>

      <div class="articles-card-small">
        <div class="articles-test-small">
          <h2>
            3 Secrets to Take Your Esports
            Brand to the Next Level
          </h2>
          <p>#marketing</p>
        </div>
      </div>
    </div>

    <div class="container-team">
      <div class="team-left">
        <h3>{{ $t('teamHeaderMsg') }}</h3>
      </div>
      <div class="team-right">
        <button>{{ $t('teamBtnMsg') }}</button>
      </div>
    </div>

    <Team/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Team from "@/components/Team.vue";

export default {
  name: "home",
  components: {
    HelloWorld,
    Team,
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
  padding-top: 316px;
  justify-content: center;
  align-items: center;
  min-height: 55vh;
}

.gradient-background {
  width: 100%;
  padding-bottom: 400px;
  background: url("../assets/images/gradient_1.svg");
  background-repeat: no-repeat;
  background-size: cover;
}
.container-title {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: left;
  padding-top: 128px;
}

.container-services {
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(2, 1fr);
  text-align: left;
  justify-items: center;
}

.container-services p {
  @include medium-text;
}
.service-left {
  max-width: 500px;
  padding-left: 260px;
}

.service-right {
  max-width: 500px;
  padding-right: 260px;
}

.container-portfolio {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  text-align: left;
  justify-items: center;
  margin-top: -220px;
  z-index: 2;
}

.portfolio-left {
  max-width: 500px;
  padding-left: 260px;
}

.portfolio-left img {
  max-width: 700px;
}

.portfolio-right {
  max-width: 500px;
  padding-right: 260px;
  text-align: right;
  margin-top: -40px;
}

.portfolio-right h3 {
  font-size: 53px;
  font-family: "Work Sans", sans-serif;
  font-weight: 800;
  color: $white;
}

.portfolio-right-button {
  padding-top: 50px;
}

.portfolio-right button {
  width: 152px;
  height: 49px;
  border-radius: 71px;
  border: none;
  font-size: 21px;
  font-weight: 700;
  font-family: "Karla", sans-serif;
  color: $white;
  background-color: $orange;
}

.article-container {
  padding-top: 190px;
  margin-left: -125px;
  h2 {
    @include heading-6;
  }
}

.catagory {
  padding-right: 550px;
  p {
    @include small-text-bold;
    display: inline-block;
    padding-right: 32px;
  }

  button {
    width: 37px;
    height: 37px;
    border: solid $black 1px;
    border-radius: 0px;
    background-color: $white;
    color: $black;
    margin-right: 10px;
  }

  #left-button {
    color: $grey;
    border: solid $grey 1px;
    float: right;
  }

  #right-button {
    float: right;
  }
}

.articles {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding-top: 71px;
  padding-left: 300px;
  grid-gap: 18px;
  overflow: hidden;
}

.articles-card-large {
  text-align: left;
  h2 {
    @include article-heading;
    padding-top: 364px;
    padding-left: 46px;
    padding-right: 174px;
  }

  p {
    @include extra-small-text;
    padding-top: 13px;
    padding-left: 46px;
  }
}

.articles-test-large {
  background: url("../assets/images/test.jpg");
  background-size: cover;
  width: 772px;
  height: 549px;
  border-radius: 11px;
}

.articles-card-small {
  text-align: left;
  h2 {
    @include article-heading;
    padding-top: 364px;
    padding-left: 46px;
  }

  p {
    @include extra-small-text;
    padding-top: 13px;
    padding-left: 46px;
  }
}

.articles-test-small {
  background: url("../assets/images/test.jpg");
  background-size: cover;
  width: 374px;
  height: 549px;
  border-radius: 11px;
}
.container-team {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  text-align: left;
  justify-items: center;
  padding-top: 207px;
}

.team-left {
  max-width: 634px;
  padding-left: 280px;
}

.team-right {
  padding-top: 100px;
  max-width: 500px;
}

.container-team h3 {
  font-size: 59px;
  font-family: "Work Sans", sans-serif;
  font-weight: 700;
  color: $black;
}

.container-team button {
  width: 206px;
  height: 49px;
  border-radius: 71px;
  border: none;
  font-size: 21px;
  font-weight: 700;
  font-family: "Karla", sans-serif;
  color: $white;
  background-color: $orange;
  cursor: pointer;
}
button {
  width: 221px;
  height: 49px;
  border-radius: 71px;
  border: none;
  font-size: 21px;
  font-weight: 700;
  font-family: "Karla", sans-serif;
  color: $white;
  background-color: $pink;
  cursor: pointer;
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