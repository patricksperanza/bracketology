import Game from "../Game"

export default function FourColumnEast() {
  return (
    <div className="mt-[38px] ml-3">
      <Game />
      <div className="mt-[88px]">
        <Game />
      </div>
      <div className="mt-[88px]">
        <Game />
      </div>
      <div className="mt-[88px]">
        <Game />
      </div>
    </div>
  )
}
