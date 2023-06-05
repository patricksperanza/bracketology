import Game from "../Game"

export default function TwoColumnSouth() {
  return (
    <div className="mt-[114px] ml-[-64px]">
      <div>
        <Game />
      </div>
      <div className="mt-[240px]">
        <Game />
      </div>
    </div>
  )
}
