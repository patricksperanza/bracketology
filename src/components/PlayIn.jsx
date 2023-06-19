"use client"
import Game from "./Game"
import { useContext, useState, useEffect } from "react"
import { BracketContext } from "@/context/BracketContext"
import { starter } from "@/data/starter"

export default function PlayIn({ currentBracket }) {
  const { allBrackets, currentBracketId } = useContext(BracketContext)
  const [current, setCurrent] = useState(starter)

  useEffect(() => {
    const curBrack = allBrackets.find((el) => el._id === currentBracketId)

    // Check to see if current brack exists before setting it
    if (curBrack !== undefined) {
      setCurrent(curBrack)
    }
  }, [currentBracketId])

  const column = current.playIn

  return (
    <div>
      <h2 className="text-center font-semibold my-4">Play In</h2>
      <div className="flex flex-col items-center gap-3">
        {column &&
          column.map((game, i) => (
            <Game
              key={i}
              name1={game.team1.name}
              name2={game.team2.name}
              seed1={game.team1.seed}
              seed2={game.team2.seed}
              src1={game.team1.name.toLowerCase().split(" ").join("-")}
              src2={game.team2.name.toLowerCase().split(" ").join("-")}
            />
          ))}
      </div>
    </div>
  )
}
