import React, { useState, createContext} from 'react'

export const JobContext = createContext({})

export default function JobContextProvider({children}) {
  const [keyInput, setKeyInput] = useState("")
  const [jobs, setJobs] = useState([])
  const [searchedArr, setSearchedArr] = useState([])


  return (
    <JobContext.Provider value={{keyInput, setKeyInput, jobs, setJobs, searchedArr, setSearchedArr}}>
      {children}
    </JobContext.Provider>
  )
}
