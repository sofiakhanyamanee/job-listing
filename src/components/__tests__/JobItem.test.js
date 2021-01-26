import React from 'react'
import { mount } from 'enzyme'
import { BrowserRouter } from 'react-router-dom';

import JobItem from '../JobItem'



describe("Test jobItem", () => {
  it("renders a link to detailpage", () => {
    const wrapper = mount(<BrowserRouter><JobItem /></BrowserRouter>)
    expect(wrapper.find("div"))
    // console.log(wrapper.debug());
    })

  })
