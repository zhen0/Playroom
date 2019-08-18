

<template>
  <div>
    <h1 class="title">Sentence Actvity</h1>
    <h3 class="title">Which phase do you want?</h3>
    <div id="container">
      <div class="bigpaper" @click="setPhase(senAct2)">Phase 2</div>
      <div class="bigpaper" @click="setPhase(senAct3)">Phase 3</div>
      <!-- <div class="bigpaper" @click="setPhase('senAct4')">Phase 4</div>
      <div class="bigpaper" @click="setPhase('senAct5')">Phase 5</div>-->
    </div>
    <h3 class="title">Which activity do you want?</h3>
    <div id="container">
      <div class="paper" @click="setActivity('a')">1</div>
      <div class="paper" @click="setActivity('b')">2</div>
      <div class="paper" @click="setActivity('c')">3</div>
      <div class="paper" @click="setActivity('d')">4</div>
      <div class="paper" @click="setActivity('e')">5</div>
      <div class="paper" @click="setActivity('f')">6</div>
      <div class="paper" @click="setActivity('g')">7</div>
      <div class="paper" @click="setActivity('h')">8</div>
      <div class="paper" @click="setActivity('i')">9</div>
      <div class="paper" @click="setActivity('j')">10</div>
    </div>
    <p class="intro">Look at the cards below and think what sentences you could make.</p>

    <draggable id="container" :list="words" group="words">
      <div v-for="card in words" v-bind:key="card.id" id="card">
        <SentenceCard :card="card" />
      </div>
    </draggable>
    <p
      class="intro"
    >Drag the words onto the fullstop to move them into your sentence. Then you can move them to left or right to put your sentence in order.</p>
    <draggable id="sentence" :list="sentence" group="words">
      <div v-for="card in sentence" v-bind:key="card.id" id="card">
        <SentenceCard :card="card" />
      </div>
    </draggable>
  </div>
</template>


<script>
import { senAct2 } from "../data/sentenceActPhase2.js";
import { senAct3 } from "../data/senActPhase3";
import draggable from "vuedraggable";
import SentenceCard from "./SentenceCards.vue";
import { store } from "../store";

export default {
  name: "Drag",
  props: {},
  data() {
    return {
      phase: senAct2,
      words: senAct2.a.cards,
      sentence: [{ turned: true, front: "." }],
      storeState: store.state,
      senAct2: senAct2,
      senAct3: senAct3
    };
  },

  methods: {
    setActivity(set) {
      this.words = this.phase[set].cards;
      this.sentence = [{ turned: true, front: "." }];
    },
    setPhase(phasey) {
      this.phase = phasey;
      this.words = this.phase.a.cards;
      this.sentence = [{ turned: true, front: "." }];
    }
  },
  components: {
    SentenceCard,
    draggable
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css?family=Patrick+Hand&display=swap");
#container {
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  background-color: #e8eef2;
}
.paper {
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15), 0 10px 0 -5px #eee,
    0 10px 1px -4px rgba(0, 0, 0, 0.15), 0 20px 0 -10px #eee;
  padding: 10x;
  margin: 5px;
  width: 5%;
  border-radius: 10px;
  font-family: "Patrick Hand";
}
.bigpaper {
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15), 0 10px 0 -5px #eee,
    0 10px 1px -4px rgba(0, 0, 0, 0.15), 0 20px 0 -10px #eee,
    0 20px 1px -9px rgba(0, 0, 0, 0.15);
  padding: 10px;
  margin: 15px;
  width: 20%;
  border-radius: 10px;
  font-family: "Patrick Hand";
}
#sentence {
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  background-color: #e8eef2;
}

.intro {
  font-size: 10px;
  font-family: "Patrick Hand";
  margin-top: 5px;
}
@media screen and (max-width: 600px) {
  .intro {
    font-size: 18px;
    font-family: "Patrick Hand";
    margin-top: 5px;
  }
  #card {
    background-color: white;
    border: orange;
    margin: 5px;
    width: 50px;
    height: 75px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    font-family: "Patrick Hand", "Comic Sans MS";
    box-shadow: 10px 10px 10px rgb(46, 46, 46);
  }
}
@media screen and (min-width: 600px) and (max-width: 1500px) {
  .intro {
    font-size: 20px;
    font-family: "Patrick Hand";
    margin-top: 5px;
  }
  #card {
    background-color: white;
    border: orange;
    margin: 5px;
    width: 120px;
    height: 80px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    font-family: "Patrick Hand", "Comic Sans MS";
    box-shadow: 10px 10px 10px rgb(46, 46, 46);
  }
}
@media screen and (min-width: 1500px) {
  .intro {
    font-size: 30px;
    font-family: "Patrick Hand";
    margin-top: 5px;
  }
  #card {
    background-color: white;
    border: orange;
    margin: 5px;
    width: 300px;
    height: 250px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    font-family: "Patrick Hand", "Comic Sans MS";
    box-shadow: 10px 10px 10px rgb(46, 46, 46);
  }
}

.title {
  font-family: "Patrick Hand";
  margin-top: 0px;
  margin-bottom: 0px;
}
</style>
