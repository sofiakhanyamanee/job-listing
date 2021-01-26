import React from "react";
import { mount } from "enzyme";
import SearchInputField from "../SearchInputField";
import JobContextProvider from "../../contexts/JobContextProvider";

describe("Test search-inputfield", () => {
  it("check existing inputfield and simulate onChange", () => {
    const wrapper = mount(
      <JobContextProvider>
        <SearchInputField />
      </JobContextProvider>
    );
    wrapper.find("input").simulate("change", { target: { value: "React" } });
    expect(wrapper.find("input").prop("value")).toContain("React");
  });

  it("check if search button contains right text", () => {
    const wrapper = mount(<SearchInputField />);
    expect(wrapper.find("button").text()).toContain("ear");
  });
  it("check if heading contains right text", () => {
    const wrapper = mount(<SearchInputField />);
    expect(wrapper.find("h1").text()).toContain("What");
  });
});
