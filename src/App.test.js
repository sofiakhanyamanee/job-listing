import React from 'react'
import { mount } from 'enzyme'
import App from './App'
import StartPage from './components/SearchInputField'
import JobContextProvider from './contexts/JobContextProvider'
import { BrowserRouter } from 'react-router-dom';

describe("Test App", () => {
  it("renders correctly", () => {
    const wrapper = mount(<BrowserRouter><JobContextProvider><App/></JobContextProvider></BrowserRouter>)
    expect(wrapper.find('div'))
    // console.log(wrapper.debug());
    })
  })

describe("Test startpage heading", () => {
  it("renders heading", () => {
    const wrapper = mount(<StartPage />)
    expect(wrapper.find("h1").text()).toContain("What type of job are you looking for?")
    // console.log(wrapper.debug());
    })

    it("test startpage button", () => {
      const wrapper = mount(<StartPage />)
      expect(wrapper.find("button").text()).toContain("Search")
      // console.log(wrapper.debug());
      })


  })
