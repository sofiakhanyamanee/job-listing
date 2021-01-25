import React from 'react'
import { mount } from 'enzyme'

// import App from '../../App'
import ErrorMsg from '../ErrorMsg'

describe("Test errorPage", () => {
  it("renders heading", () => {
    const wrapper = mount(<ErrorMsg />)
    expect(wrapper.find("h1").text()).toContain("No jobs found")
    // console.log(wrapper.debug());
    })

    it("renders heading", () => {
      const wrapper = mount(<ErrorMsg />)
      expect(wrapper.find("button").text()).toContain("Try again")
      // console.log(wrapper.debug());
      })
  })
