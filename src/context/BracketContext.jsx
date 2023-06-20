"use client"
import { createContext, useState, useEffect } from "react"
import { bracketTemplate } from "@/data/bracket"
import { getBrackets } from "@/utils/getBrackets"

export const BracketContext = createContext()

export function BracketContextProvider({ children }) {
  const [newBracket, setNewBracket] = useState(bracketTemplate)
  const [allBrackets, setAllBrackets] = useState([])
  const [currentBracketId, setCurrentBracketId] = useState(
    " 648e6ef1b48acaa6c63fd44a"
  )

  useEffect(() => {
    const getBracketsList = async () => {
      const list = await getBrackets()
      setAllBrackets(list)
    }

    getBracketsList()
  }, [])

  return (
    <BracketContext.Provider
      value={{
        newBracket,
        setNewBracket,
        currentBracketId,
        setCurrentBracketId,
        allBrackets,
        setAllBrackets,
      }}
    >
      {children}
    </BracketContext.Provider>
  )
}
