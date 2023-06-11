import Team from "./Team"
import { getBrackets } from "@/utils/getBrackets"

export default async function FirstFourOut() {
  const brackets = await getBrackets()
  const column = brackets[0].firstFourOut

  return (
    <div>
      <h2 className="text-center font-semibold my-4">First Four Out</h2>
      <div className="flex flex-col items-center gap-3">
        {column.map((game) => (
          <Team name={game.name} seed={game.seed} />
        ))}
      </div>
    </div>
  )
}
