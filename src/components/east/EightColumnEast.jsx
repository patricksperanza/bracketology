import Game from "../Game"
import { getBrackets } from "@/utils/getBrackets"

export default async function EightColumnEast() {
  const brackets = await getBrackets()
  const column = brackets[0].east

  return (
    <div className="flex flex-col gap-3">
      {column.map((game) => (
        <Game
          name1={game.team1.name}
          name2={game.team2.name}
          seed1={game.team1.seed}
          seed2={game.team2.seed}
        />
      ))}
    </div>
  )
}
