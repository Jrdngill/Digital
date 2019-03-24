<template>
  <div>
    <Header/>
    <div class="gradient-container">
      <div class="about-container">
        <h1>About Us</h1>
        <h2>
          From esport association to a company that provides services
          to companies.
        </h2>
        <div class="about-text">
          <div class="text-left">
            <p class="large-text">
              Maestro Digital is an all-round production house for esports,
              events, web development and talent management. With five years
              of experience in the international esport and web development
              industry, Maestro Digital is one of the first companies focused
              on esports, events and media in the Benelux.
            </p>
          </div>
          <div class="text-right">
            <p class="large-text">
              In addition, Maestro Digital, together with Maestro Esports, is part
              of Maestro Media Group BV, a company created by passionate esport
              professionals who have taken their international experience to the
              ever-growing esport industry in the Netherlands & Belgium.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="group-photo">
      <img src="../assets/images/group.jpeg">
    </div>
    <div class="container-team">
      <div class="team">
        <div class="team-left">
          <h3>The Maestro Team</h3>
        </div>
        <div class="team-right">
          <button>Contact Us</button>
        </div>
        <p class="large-text-black">
          Maestro has an excellent team of people who all have experience
          in different industries. From sports management to marketing,
          graphic design and website programming. We are an all-round sport
          & esport media agency.
        </p>
      </div>
    </div>
    <Team/>
    <Footer/>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Team from "@/components/Team.vue";

export default {
  name: "About",
  components: {
    Team,
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
  max-width: 1260px;
}

.team {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.team-left {
  align-self: start;
}

.team-right {
  align-self: start;
}

.team h3 {
  font-size: 50px;
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
}

.container-team p {
  @include large-text-black;
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
