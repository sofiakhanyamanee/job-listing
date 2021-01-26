import React from 'react'
import { mount } from 'enzyme'
import ErrorMsg from '../ErrorMsg'

describe("Test errorPage", () => {
  it("check if heading exist with text 'no jobs found'", () => {
    const wrapper = mount(<ErrorMsg />)
    expect(wrapper.find("h1").text()).toContain("No jobs found")
    })

    it("check if button exist with text 'try again'", () => {
      const wrapper = mount(<ErrorMsg />)
      expect(wrapper.find("button").text()).toContain("Try again")
      })
  })
