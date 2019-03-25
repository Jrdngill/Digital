<template>
  <div>
    <div class="cards">
      <div class="card">
        <img src="../assets/images/alessio.jpeg">
        <P class="small-text-bold">Alessio Florio</P>
        <P class="small-text">alessio@maestrodigital.nl</P>
        <P class="small-text-pink">General Sales</P>
      </div>
      <div class="card">
        <img src="../assets/images/lukas.jpeg">
        <P class="small-text-bold">Lukas Geerts</P>
        <P class="small-text">lukas@maestrodigital.nl</P>
        <P class="small-text-pink">Dutch Sales</P>
      </div>
      <div class="card">
        <img src="../assets/images/joanne.jpeg">
        <P class="small-text-bold">Joanne Watson</P>
        <P class="small-text">joanne@maestrodigital.nl</P>
        <P class="small-text-pink">UK Sales</P>
      </div>
      <div class="card">
        <img src="../assets/images/leo.jpeg">
        <P class="small-text-bold">Bogdan Leustean</P>
        <P class="small-text">bogdan@maestrodigital.nl</P>
        <P class="small-text-pink">EU Sales</P>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Team-About"
};
</script>

<style scoped lang="scss">
.cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  max-width: 1260px;
  padding-left: 357px;
  padding-bottom: 300px;
  text-align: left;
}
.cards p:nth-of-type(1) {
  @include small-text-bold;
}

.cards p:nth-of-type(2) {
  @include small-text;
}

.cards p:nth-of-type(3) {
  @include small-text-pink;
}
.card {
  width: 100%;
  max-width: 280px;
  max-height: 300px;
}

.card img {
  width: 280px;
  height: 300px;
  border-radius: 9px;
}
</style>