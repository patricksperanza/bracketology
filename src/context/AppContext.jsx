"use client"
import { createContext, useContext, useEffect, useState } from "react"

const AppContext = createContext()

// async function getAllBrackets() {
//   const res = await fetch("http://localhost:3000/api/bracket")
//   if (!res.ok) {
//     throw new Error("Failed to fetch data")
//   }
//   return res.json()
// }

export async function AppProvider({ children }) {
  const [data, setData] = useState(null)

  useEffect(() => {
    async function getBracketData() {
      const response = await fetch("http://localhost:3000/api/bracket")
      if (!response.ok) {
        throw new Error("Failed to get bracket data")
      }

      const data = response.json()
      setData(data)
    }
    getBracketData()
  }, [])

  return <AppContext.Provider value={data[0]}>{children}</AppContext.Provider>
}

export function useAppContext() {
  return useContext(AppContext)
}
