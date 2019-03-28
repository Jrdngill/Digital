<template>
  <div>
    <Header/>
    <div class="gradient-container">
      <div class="about-container">
        <h1>{{ $t('aboutHeroBgMsg') }}</h1>
        <h2>{{ $t('aboutHeroMsg') }}</h2>
        <div class="about-text">
          <div class="text-left">
            <p class="large-text">{{ $t('aboutHeroText01') }}</p>
          </div>
          <div class="text-right">
            <p class="large-text">{{ $t('aboutHeroText02') }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="group-photo">
      <img src="../assets/images/group.jpeg">
    </div>
    <div class="container-team">
      <div class="team-left">
        <h3>{{ $t('aboutTeamTitle') }}</h3>
      </div>
      <div class="team-right">
        <button>{{ $t('aboutTeamBtn') }}</button>
      </div>
    </div>
    <div class="container-team-text">
      <p class="large-text-black">{{ $t('aboutTeamText') }}</p>
    </div>
    <Team-About/>
    <Footer/>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import TeamAbout from "@/components/Team-About.vue";

export default {
  name: "About",
  components: {
    TeamAbout,
    Header,
    Footer
  }
};
</script>

<style scoped lang="scss">
.gradient-container {
  height: 1309px;
  margin-left: -260px;
  margin-top: -120px;
  background: url(../assets/images/gradient_2.svg);
  background-repeat: no-repeat;
}

.about-container {
  max-width: 1190px;
  padding-left: 600px;
}

.about-text {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 53px;
  text-align: left;
  padding-top: 130px;
}

.group-photo img {
  width: 1190px;
  height: 659px;
  border-radius: 10px;
  margin-top: -160px;
}

.container-team {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  text-align: left;
  justify-items: center;
  padding-top: 161px;
}

.team-left {
  max-width: 634px;
  padding-left: 290px;
}

.team-right {
  max-width: 500px;
  padding-left: 40px;
  padding-top: 70px;
}
.container-team h3 {
  font-size: 59px;
  font-family: "Work Sans", sans-serif;
  font-weight: 800;
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

.container-team-text {
  max-width: 1117px;
  padding-left: 357px;
  text-align: left;
  p {
    @include large-text-black;
  }
}

p {
  @include large-text;
}

h1 {
  @include heading-5;
  text-align: center;
  padding-top: 229px;
}

h2 {
  @include heading-2;
  margin-top: -320px;
}
</style>
