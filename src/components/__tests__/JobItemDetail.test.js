import React from 'react'
import { mount } from 'enzyme'
import { BrowserRouter } from 'react-router-dom';

import JobItemDetail from '../JobItemDetail'


describe("Test jobItemDetail", () => {
  it("renders 'Loading' heading", () => {
    const wrapper = mount(<BrowserRouter><JobItemDetail /></BrowserRouter>)
    expect(wrapper.find("h1").text()).toContain("Loading")
    // console.log(wrapper.debug());
    })

    // it("renders a-tag heading", () => {
    //   const wrapper = mount(<JobItemDetail><img className="company_logo"/></JobItemDetail>)
    //   expect(wrapper.exists(".company_logo")).to.equal(true);
    //   // console.log(wrapper.debug());
    //   })
  })
