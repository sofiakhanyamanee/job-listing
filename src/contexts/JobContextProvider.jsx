import React, { useState, createContext} from 'react'

export const JobContext = createContext({})

export default function JobContextProvider({children}) {
  const [search, setSearch] = useState("")
  const [jobs, setJobs] = useState([])
  const [searched, setSearched] = useState([])


  return (
    <JobContext.Provider value={{search, setSearch, jobs, setJobs, searched, setSearched}}>
      {children}
    </JobContext.Provider>
  )
}

