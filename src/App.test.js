import React from "react";
import { mount } from "enzyme";
import App from "./App";
import StartPage from "./components/SearchInputField";
import JobContextProvider from "./contexts/JobContextProvider";
import { BrowserRouter } from "react-router-dom";

describe("Test App", () => {
  it("renders correctly", () => {
    const wrapper = mount(
      <BrowserRouter>
        <JobContextProvider>
          <App />
        </JobContextProvider>
      </BrowserRouter>
    );
    expect(wrapper.find("div"));
  });
});

describe("Test if startpage renders correctly", () => {
  it("check if heading exist", () => {
    const wrapper = mount(<StartPage />);
    expect(wrapper.find("h1").text()).toContain(
      "What kind of job are you looking for?"
    );
  });

  it("check if input exist", () => {
    const wrapper = mount(<StartPage />);
    expect(wrapper.find("input"));
  });

  it("check if button exist with text 'Search'", () => {
    const wrapper = mount(<StartPage />);
    expect(wrapper.find("button").text()).toContain("Search");
  });
});
