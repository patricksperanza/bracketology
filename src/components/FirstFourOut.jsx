"use client"
import Team from "./Team"
import { useContext, useState, useEffect } from "react"
import { BracketContext } from "@/context/BracketContext"
import { starter } from "@/data/starter"

export default function FirstFourOut({ currentBracket }) {
  const { allBrackets, currentBracketId } = useContext(BracketContext)
  const [current, setCurrent] = useState(starter)

  useEffect(() => {
    const curBrack = allBrackets.find((el) => el._id === currentBracketId)

    // Check to see if current bracket exists before setting it
    if (curBrack !== undefined) {
      setCurrent(curBrack)
    }
  }, [currentBracketId])

  const column = current.firstFourOut

  return (
    <div>
      <h2 className="text-center font-semibold my-4">First Four Out</h2>
      <div className="flex flex-col items-center gap-3">
        {column &&
          column.map((game, i) => (
            <Team
              key={i}
              name={game.name}
              seed={game.seed}
              src={game.name.toLowerCase().split(" ").join("-")}
            />
          ))}
      </div>
    </div>
  )
}
