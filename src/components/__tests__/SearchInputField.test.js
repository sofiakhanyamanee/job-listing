import React from 'react'
import { mount } from 'enzyme'
// import { BrowserRouter } from 'react-router-dom';

import SearchInputField from '../SearchInputField'

describe("Test search-inputfield", () => {
  it("renders an inputfield", () => {
    const wrapper = mount(<SearchInputField/>)
    expect(wrapper.exists("input"))
    // console.log(wrapper.debug());
    })

  })

  describe("Test search button", () => {
    it("renders an inputfield", () => {
      const wrapper = mount(<SearchInputField/>)
      expect(wrapper.exists("button"))
      // console.log(wrapper.debug());
      })
  
    })

    describe("Test find heading", () => {
      it("renders a heading", () => {
        const wrapper = mount(<SearchInputField/>)
        expect(wrapper.exists("h1"))
        // console.log(wrapper.debug());
        })
    
      })


    
  