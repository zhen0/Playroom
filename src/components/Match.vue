<template>
  <div>
    <h1 class="title">Statement Picture Match</h1>
    <p class="intro">Click on a card and read the statement.</p>

    <div class="container" :list="statements" group="words">
      <div v-for="card in statements" v-bind:key="card.id">
        <StatementCard :card="card" />
      </div>
    </div>
    <p
      class="intro"
    >Choose the picture that matches your statement. Click on the picture to see the word for that picture.</p>
    <div class="container" :list="pictures" group="words">
      <div v-for="card in pictures" v-bind:key="card.id">
        <PictureCard :card="card" />
      </div>
    </div>
    <div class="check">
      <button class="button" @click="match">Click here to check if you were correct!</button>
      <p class="intro">{{this.message}}</p>
    </div>
  </div>
</template>


<script>
import { stats1 } from "../data/statementsPhase2.js";
import { pics1 } from "../data/statPicsPhase2.js";
import { store } from "../store.js";
import PictureCard from "./PictureCard.vue";
import StatementCard from "./StatementCard.vue";

export default {
  name: "Match",
  props: {},
  data() {
    return {
      pictures: pics1,
      statements: stats1,
      message: "",
      storeState: store.state
    };
  },

  methods: {
    async match() {
      const message = await store.match();
      // this.show = !this.show;
      this.message = message;
    }
  },
  components: {
    StatementCard,
    PictureCard
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css?family=Patrick+Hand&display=swap");
.container {
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  background-color: #e8eef2;
}
.check {
  display: flex;
  flex-direction: column;
  align-items: center;

  justify-content: space-evenly;
  margin-top: 20px;
  background-color: #e8eef2;
}
.button {
  font-size: 15px;
  font-family: "Patrick Hand";

  background-color: darkgray;
  box-shadow: 5px 5px 5px rgb(46, 46, 46);
  border-radius: 10px;
}
@media screen and (max-width: 600px) {
  .intro {
    font-size: 15px;
    font-family: "Patrick Hand";
    margin-top: 5px;
  }
  .title {
    font-family: "Patrick Hand";
    font-size: 20px;
    margin-top: 0px;
    margin-bottom: 0px;
  }
}
@media screen and (min-width: 600px) and (max-width: 1500px) {
  .intro {
    font-size: 20px;
    font-family: "Patrick Hand";
    margin-top: 5px;
    margin-bottom: 5px;
  }
  .title {
    font-family: "Patrick Hand";
    margin-top: 0px;
    margin-bottom: 0px;
  }
}
@media screen and (min-width: 1500px) {
  .intro {
    font-size: 30px;
    font-family: "Patrick Hand";
    margin-top: 5px;
    margin-bottom: 5px;
  }
  .title {
    font-family: "Patrick Hand";
    margin-top: 0px;
    margin-bottom: 0px;
  }
}
</style>