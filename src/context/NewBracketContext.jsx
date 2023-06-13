import { createContext, useState } from "react"
import { bracketTemplate } from "@/data/bracket"

export const NewBracketContext = createContext()

export function NewBracketContextProvider({ children }) {
  const [newBracket, setNewBracket] = useState(bracketTemplate)

  return (
    <NewBracketContext.Provider value={{ newBracket, setNewBracket }}>
      {children}
    </NewBracketContext.Provider>
  )
}
