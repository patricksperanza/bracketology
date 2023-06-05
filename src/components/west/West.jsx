import EightColumnWest from "./EightColumnWest"
import FourColumnWest from "./FourColumnWest"
import TwoColumnWest from "./TwoColumnWest"
import OneColumWest from "./OneColumnWest"

export default function West() {
  return (
    <div>
      <h2 className="text-center font-semibold my-4">West</h2>
      <div className="flex mr-4">
        <OneColumWest />
        <TwoColumnWest />
        <FourColumnWest />
        <EightColumnWest />
      </div>
    </div>
  )
}
