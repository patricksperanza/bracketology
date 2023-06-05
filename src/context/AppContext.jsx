"use client"
import { createContext, useContext } from "react"
import { bracket } from "@/data/bracket"

const AppContext = createContext()

export function AppProvider({ children }) {
  return <AppContext.Provider value={bracket}>{children}</AppContext.Provider>
}

export function useAppContext() {
  return useContext(AppContext)
}
