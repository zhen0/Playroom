<template>
  <div>
    <h3>Playroom Information</h3>
    <p>
      The Hillman play space is enjoyed by children of all ages! Make new friends, discover new toys, and engage in creative play! Get involved in planning events to help create a stimulating, enriching experience for our children.
      Some features of the space include:
    </p>
    <ul>
      <li>Library/ puzzle corner</li>
      <li>Large open space for riding tricycles, pushing baby strollers & walkers, or just playing</li>
      <li>Tricycles, cozy coupes, and other pushing/ riding toys</li>
      <li>Playhouse Log Cabin</li>
      <li>Kitchen and Grocery Store Area</li>
      <li>Dress up area with costumes and mirror</li>
      <li>Dollhouse</li>
      <li>Building toys (Magnatiles, CitiBlocs, etc.)</li>
      <li>Chalkboard</li>
    </ul>
    <h3>We have Wifi!</h3>
    <p>
      The username is hillmancommunityroom-5G.
      The password is Hillman550
    </p>
    <h3>Location and Hours of operation</h3>
    <p>
      Located in the 550 J building, Down the service ramp (look for the aqua doors)
      Children can play in the room every day of the week between 8am-7pm*
      *Please note: The room may be rented out for private events on the weekends and in the evenings. Members will be notified through email regarding which hours the room may be closed on a Saturday/ Sunday. Events most likely will not be rented for longer than 4 hours, leaving the rest of the day open for children to play. On evenings when the room is rented during the week, the play space will close one hour earlier (at 6 pm, instead of 7 pm). We expect the room to be open until 7 pm on most evenings.
    </p>
    <h3>Guidelines</h3>
    <p>
      We hope that you and your child/ren will enjoy the room to its fullest. In order to ensure that all children have a most enriching and positive experience in a clean and organized atmosphere we ask that:
      PLEASE REMOVE SHOES before entering the playroom.
      All toys should be returned to their designated places after use
      All spills, crumbs or wrappers from snacks should be cleaned up
      Please eat at the table
      Dispose of garbage/ soiled diapers in the trash bins outside of the room (located outside of the rear exit door)
      Ill children (with fever, eye infections, stomach virus, colds, or any contagious infection/ virus, etc.) should not be brought to the room.
      Any toy which is mouthed/ sneezed on should be wiped down with anti-bacterial wipes which are provided.
      Strollers and other personal items may not be stored in the room overnight.
      The Department of Health has agreed to allow the Hillman community room to be used as a play space on the condition that the following guidelines are followed:
      Children must be supervised by an adult, age 18 or older
      A caregiver can watch NO MORE than the children of one immediate family + one additional child from another family.
      Please note that this rule must be strictly adhered to. Violation of this guideline will result in forfeiture of membership. Please make sure that your caregiver understands and follows this rule.
      No gum is allowed in the playroom.
    </p>
    <h3>Access to the room</h3>
    <p>
      The playroom is located in the 550 J building near the service ramp.
      Members who are non-Hillman residents who do not have a key to open the door leading to the building can ask for a key fob which can open the ramp entrance door closest to the playroom. A $10 deposit must be given to obtain a key fob since these need to be returned to the co-op at the end of the membership year.
      A hand scanning system is installed (like the one used for the gym). You will be emailed a pass to present at the management office in order to get your hand scanned. All other caregivers (spouses, grandparents, babysitters) can have their hand scanned as well in order to be able to access the room. The pass should be kept in the event that you need other caregiver’s hands to be scanned.
      The management office, located at 530 Grand St. is open:
      Monday: 9 AM to 6 PM
      Tuesday - Thursday: 9 AM to 5 PM
      Friday: 8 AM to 4 PM
      We suggest that you call the management office before going to ensure that a staff member who is familiar with the scanning system is present. The number for the management office is 212-677-5858.
      Additionally, for those who are not available during the hours listed above, the management office is open twice a month until 8 pm. Call the office to see when the next "late night" will be.
    </p>
    <h3>Guests</h3>
    <p>
      Guests must be in the company of a member. Please deposit $3 in the collection box toward the front of the room when having a guest. Please remember to be mindful of all rules when having guests especially the caregiver to child ratio rule......
      A caregiver can watch NO MORE than the children of one immediate family + one additional child from another family.
    </p>
    <h3>Bathroom Key & Information</h3>
    <p>
      All members will have access to the bathroom by using an available bathroom key. The key will be hanging on the door of the back exit. The bathroom is located outside the back exit. There are two doors next to the exit leading to the park. The bathroom is the door on the left next to the mirror.
      Please don't forget to put the key back on the hook! Also be aware that the door will self-lock when closed all the way, so leave it slightly ajar so you can get back in.
      Children should never be left alone in the playroom when an adult uses the bathroom. It is alright to ask another adult in the playroom to watch your child for a few moments while you use the bathroom. If there is no other adult available, the child should accompany you to the bathroom.
    </p>
    <h3>We would like to arrange events and classes for kids. Please see the "Activities" section for more information and let us know if you'd like to get involved!</h3>hillmanplay@gmail.com
  </div>
</template>


<script>
import { phase } from "../data/flash.js";
// import Card from "./Card.vue";
import { store } from "../store";

export default {
  name: "Memory",
  props: {},
  data() {
    return {
      soundsA: phase.two,
      storeState: store.state
    };
  },

  methods: {
    setSounds(a) {
      this.soundsA = phase[a];
    }
  },
  components: {
    // Card
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
  justify-content: flex-start;
  background-color: #e8eef2;
  text-align: left
}
p {
  align-self: flex-start;
  text-align: left;
}
li {
  text-align: left;
}
h3 {
  text-align: left;
}
</style>
