

<template>
  <div id="container">
    <div id="navBar">
      <h1 class="title">Hillman Playroom</h1>
      <p class="intro">Because sometimes you just need to get out of the apartment!</p>

      <router-link to="/info" class="intro">Info</router-link>
      {{" "}}
      <router-link to="/join" class="intro">Join</router-link>
      {{" "}}
      <router-link to="/rentals" class="intro">Rentals</router-link>
      {{" "}}
      <router-link to="/classes" class="intro">Classes</router-link>
      {{" "}}
      <router-link to="/faq" class="intro">FAQs</router-link>
      {{" "}}
    </div>
    <router-view></router-view>
    <div>
      <img :src="playhouse" />
      </div>
  </div>
</template>


<script>
import playhouse from "../assets/Playhouse.jpg"
export default {
  name: "Phonics",
  props: {},
  data() {
    return {
      playhouse: playhouse
      
    };
  },

  methods: {
    
  },
  components: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css?family=Patrick+Hand&display=swap");

@media screen and (max-width: 600px) {
  h1 {
    font-family: "Patrick Hand";
    font-size: 20px;
  }
  .intro {
    font-size: 15px;
    font-family: "Patrick Hand";
    padding: 2%;
    padding-top: 0px;
    padding-bottom: 0px;
    padding-right: 0px;
    margin-bottom: 0px;
    margin-top: 0px;
  }
}

@media screen and (min-width: 600px) {
  h1 {
    font-family: "Patrick Hand";
  }
  .intro {
    font-size: 18px;
    font-family: "Patrick Hand";
    padding: 2%;
    padding-top: 0px;
    padding-bottom: 0px;
    padding-right: 0px;
  }
}

#container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 0px;
  align-items: center;
}

#navBar {
  // margin: auto;
  display: flex;
  justify-content: flex-start;
  background-color: #e8eef2;
  align-self: flex-start;
  align-items: center;
  height: 50px;
  width: 90%;
  padding-top: 15px;
  padding-bottom: 15px;
}
</style>
