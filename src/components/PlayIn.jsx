import Game from "./Game"
import { getBrackets } from "@/utils/getBrackets"

export default async function PlayIn() {
  const brackets = await getBrackets()
  const column = brackets[0].playIn

  return (
    <div>
      <h2 className="text-center font-semibold my-4">Play In</h2>
      <div className="flex flex-col items-center gap-3">
        {column.map((game) => (
          <Game
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
