import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import Welcomer from "../Welcomer.vue";

describe("HelloWorld", () => {
  it("renders properly", () => {
    const wrapper = mount(Welcomer);
    expect(wrapper.text()).toContain("Welcome!");
  });
});
