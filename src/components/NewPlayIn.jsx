import Game from "./Game"
import Entry from "./Entry"

export default function Column() {
  return (
    <div className="flex flex-col items-center gap-3">
      <h2 className="text-center font-semibold my-4">Play In</h2>
      <Entry columnTitle="playIn" />
      <Entry columnTitle="playIn" />
      <Entry columnTitle="playIn" />
      <Entry columnTitle="playIn" />
    </div>
  )
}
