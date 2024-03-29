import React from "react";
import { shallow } from "enzyme";
import JobItem from "../JobItem";

const payload = {
  title: "my-title",
  company_logo: "https://jobs.github.com/img",
  type: "Full Time",
  description: "Here at Tonies, we are changing",
  id: "12",
};

describe("Test if jobItem renders correctly", () => {
  it("renders a h2 with title correctly", () => {
    const wrapper = shallow(<JobItem job={payload} />);
    expect(wrapper.find("h2").text()).toContain("my-title");
  });

  it("renders a strong-tag correctly", () => {
    const wrapper = shallow(<JobItem job={payload} />);
    expect(wrapper.find("strong").text()).toContain("Time");
  });

  it("renders img with alt and src correctly", () => {
    const wrapper = shallow(<JobItem job={payload} />);
    expect(wrapper.find("img").prop("src")).toContain(payload.company_logo);
  });

  it("renders link with an id correctly", () => {
    const wrapper = shallow(<JobItem job={payload} />);
    expect(wrapper.find("Link").prop("to")).toBe(`/jobs/${payload.id}`);
  });
});
