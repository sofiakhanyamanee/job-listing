import React from 'react'
import { mount } from 'enzyme'
import { BrowserRouter } from 'react-router-dom';

import JobItem from '../JobItem'



describe("Test jobItem", () => {
  it("renders a link to detailpage", () => {
    const wrapper = mount(<BrowserRouter><JobItem /></BrowserRouter>)
    expect(wrapper.find("Link").text()).toContain("Read more")
    // console.log(wrapper.debug());
    })

    

  })
