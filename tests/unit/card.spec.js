import { shallowMount } from "@vue/test-utils";

import Card from "@/components/Card.vue";

describe("Cards.vue", () => {
  it("shows a blank card  to begin with", () => {
    const card = { suit: "hearts", value: 12, id: 1 };
    const wrapper = shallowMount(Card, {
      propsData: {
        card
      }
    });
    expect(wrapper.text()).toMatch("");
  });
  it("shows a value when turned", () => {
    const card = { suit: "hearts", value: 12, id: 1 };
    const value = card.value.toString();
    const wrapper = shallowMount(Card, {
      propsData: {
        card
      }
    });
    //makes sure card is turned so value can be read
    wrapper.setData({ turned: true, unturned: false });
    // checks correct value is being rendered
    expect(wrapper.text()).toMatch(value);
  });
});
