import React from "react";
import { shallow } from "enzyme";
import JobList from "../JobList";

describe("Test jobList", () => {
  it("check if joblist renders in a div", () => {
    const wrapper = shallow(<JobList />);
    expect(wrapper.find("div"));
  });
});
