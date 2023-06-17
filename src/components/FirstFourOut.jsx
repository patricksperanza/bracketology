"use client"
import Team from "./Team"
import { useContext } from "react"
import { BracketContext } from "@/context/BracketContext"

export default function FirstFourOut({ currentBracket }) {
  const column = currentBracket.firstFourOut

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
