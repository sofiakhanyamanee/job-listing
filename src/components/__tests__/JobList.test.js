import React from 'react'
import { shallow } from 'enzyme'
// import { BrowserRouter } from 'react-router-dom';
// import JobContextProvder from '../../contexts/JobContextProvider'
import JobList from '../JobList'


// const payload = {
//   title: "Frontend",
//   company_logo: "https://jobs.github.com/",
//   type: "Full Time",
//   company_url: "http://www.play.co/",
//   description: "We’re a data-driven video startup",
//   id: "46",
//   }

describe("Test jobList", () => {
  it("renders a job", () => {
    

    const wrapper = shallow(<JobList jobs={{title: 'Frontend'}}/>)
    expect(wrapper.find('div'))
    // console.log(wrapper.debug());
    // component.debug()
    })

  })
