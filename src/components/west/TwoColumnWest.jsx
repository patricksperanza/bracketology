import Game from "../Game"

export default function TwoColumnWest() {
  return (
    <div className="mt-[114px] mr-[-64px]">
      <div>
        <Game />
      </div>
      <div className="mt-[240px]">
        <Game />
      </div>
    </div>
  )
}
