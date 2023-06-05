"use client"
import Game from "../Game"
import { useAppContext } from "@/context/AppContext"

export default function TwoColumnMidwest() {
  const bracket = useAppContext()
  const column = bracket.midwest.twoColumn
  return (
    <div className="mt-[114px] mr-[-64px]">
      {column.map((game) => (
        <div className="mb-[240px]">
          <Game
            name1={game.name1}
            name2={game.name2}
            slug1={game.slug1}
            slug2={game.slug2}
            score1={game.score1}
            score2={game.score2}
            seed1={game.seed1}
            seed2={game.seed2}
          />
        </div>
      ))}
    </div>
  )
}
