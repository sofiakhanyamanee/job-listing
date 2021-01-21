import React, { useState, createContext} from 'react'

export const JobContext = createContext({})

export default function JobContextProvider({children}) {
  const [search, setSearch] = useState("")
  const [jobs, setJobs] = useState([])


  return (
    <JobContext.Provider value={{search, setSearch,jobs,setJobs}}>
      {children}
    </JobContext.Provider>
  )
}

