import Game from "./Game"
import Entry from "./Entry"

export default function Column() {
  return (
    <div className="flex flex-col items-center gap-3">
      <h2 className="text-center font-semibold my-4">Play In</h2>
      <Entry columnTitle="playIn" num1="" num2="" game={0} />
      <Entry columnTitle="playIn" num1="" num2="" game={1} />
      <Entry columnTitle="playIn" num1="" num2="" game={2} />
      <Entry columnTitle="playIn" num1="" num2="" game={3} />
    </div>
  )
}
