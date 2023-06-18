"use client"
import { createContext, useState, useEffect } from "react"
import { bracketTemplate } from "@/data/bracket"

export const BracketContext = createContext()

export function BracketContextProvider({ children }) {
  const [newBracket, setNewBracket] = useState(bracketTemplate)

  return (
    <BracketContext.Provider
      value={{
        newBracket,
        setNewBracket,
      }}
    >
      {children}
    </BracketContext.Provider>
  )
}
