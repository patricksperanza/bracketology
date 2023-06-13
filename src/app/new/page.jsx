"use client"
import { useState } from "react"
import { bracketTemplate } from "@/data/bracket"
import { NewBracketContextProvider } from "@/context/NewBracketContext"

import NewColumn from "@/components/NewColumn"
import NewPlayIn from "@/components/NewPlayIn"
import NewFirstFourOut from "@/components/NewFirstFourOut"

export default function New() {
  return (
    <NewBracketContextProvider>
      <div className="mt-10 flex gap-5 justify-center">
        <NewColumn columnTitle="south" />
        <NewColumn columnTitle="midwest" />
        <NewColumn columnTitle="east" />
        <NewColumn columnTitle="west" />
      </div>
      <div className="flex justify-center gap-48 my-7"></div>
    </NewBracketContextProvider>
  )
}
