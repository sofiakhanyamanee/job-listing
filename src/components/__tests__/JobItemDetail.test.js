import React from "react";
import { mount, shallow } from "enzyme";
import { BrowserRouter } from "react-router-dom";
import JobItemDetail from "../JobItemDetail";

const payload = {
  title: "my-title",
  company_logo: "https://jobs.github.com/img",
  type: "Full Time",
  description: "Here at Tonies, we are changing",
  company_url: "https://company.com",
  created_at: "Fri Jan 22 21:40:35 UTC 2021",
  id: "12",
};

describe("Test jobItemDetail", () => {
  it("renders back-btn", () => {
    const wrapper = mount(<JobItemDetail />);
    expect(wrapper.find("button").text()).toBe("Back");
  });

  it("renders job created at", () => {
    const wrapper = mount(<JobItemDetail job={payload}/>);
    expect(wrapper.find("p").text()).toBe(payload.created_at);
  });

  it("renders 'Loading' heading", () => {
    const wrapper = mount(<JobItemDetail />);
    expect(wrapper.find("h1").text()).toContain("Loading");
  });

  it("renders a h2 with title correctly", () => {
    const wrapper = shallow(<JobItemDetail job={payload} />);
    expect(wrapper.find("h2").at(0).text()).toContain(payload.title);
  });

  it("renders img with alt and src correctly", () => {
    const wrapper = shallow(<JobItemDetail job={payload} />);
    expect(wrapper.find("img").prop("src")).toContain(payload.company_logo);
  });

  it("renders a strong-tag correctly", () => {
    const wrapper = shallow(<JobItemDetail job={payload} />);
    expect(wrapper.find("strong").text()).toContain("Time");
  });

  it("renders description correctly", () => {
    const wrapper = shallow(<JobItemDetail job={payload} />);
    expect(wrapper.find("div div").prop('dangerouslySetInnerHTML')).toEqual({__html: "Here at Tonies, we are changing"});
  });

  it("renders a-tag href correctly", () => {
    const wrapper = shallow(<JobItemDetail job={payload} />);
    expect(wrapper.find("a").prop('href')).toEqual(payload.company_url);
  });
});
