import React from 'react'
import { mount } from 'enzyme'
import SearchInputField from '../SearchInputField'
// import { BrowserRouter } from 'react-router-dom';

// describe("Test search-inputfield", () => {
//   it("renders an inputfield", () => {
//     const wrapper = shallow(<SearchInputField/>)
//     expect(wrapper.find("input"))
//     // console.log(wrapper.debug());
//     })

//   })

  describe("Test search button", () => {
    it("renders right button for search", () => {
      const wrapper = mount(<SearchInputField/>)
      expect(wrapper.find("button").text()).toContain('ear')
      // console.log(wrapper.debug());
      })
  
    })

    describe("Test heading", () => {
      it("renders a heading with right text", () => {
        const wrapper = mount(<SearchInputField/>)
        expect(wrapper.find("h1").text()).toContain('What')
        // console.log(wrapper.debug());
        })
    
      })


    
  