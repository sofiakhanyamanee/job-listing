import React from "react";
import { mount, shallow } from "enzyme";
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
  it("check if back-button exist with text 'Back'", () => {
    const wrapper = mount(<JobItemDetail />);
    expect(wrapper.find("button").text()).toBe("Back");
  });

  it("check if p-tag contains 'created_at'", () => {
    const wrapper = mount(<JobItemDetail job={payload}/>);
    expect(wrapper.find("p").text()).toBe(payload.created_at);
  });

  it("check if heading exist with text 'loading'", () => {
    const wrapper = mount(<JobItemDetail />);
    expect(wrapper.find("h1").text()).toContain("Loading");
  });

  it("check if heading exist with title", () => {
    const wrapper = shallow(<JobItemDetail job={payload} />);
    expect(wrapper.find("h2").at(0).text()).toContain(payload.title);
  });

  it("check if img-src contains an img-url", () => {
    const wrapper = shallow(<JobItemDetail job={payload} />);
    expect(wrapper.find("img").prop("src")).toContain(payload.company_logo);
  });

  it("check if strong-tag contains text 'time'", () => {
    const wrapper = shallow(<JobItemDetail job={payload} />);
    expect(wrapper.find("strong").text()).toContain("Time");
  });

  it("check if description renders correctly", () => {
    const wrapper = shallow(<JobItemDetail job={payload} />);
    expect(wrapper.find("div div").prop('dangerouslySetInnerHTML')).toEqual({__html: "Here at Tonies, we are changing"});
  });

  it("check if a-tag href correctly", () => {
    const wrapper = shallow(<JobItemDetail job={payload} />);
    expect(wrapper.find("a").prop('href')).toEqual(payload.company_url);
  });
});
