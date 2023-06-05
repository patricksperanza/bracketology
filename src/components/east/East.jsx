import EightColumnEast from "./EightColumnEast"
import FourColumnEast from "./FourColumnEast"
import TwoColumnEast from "./TwoColumnEast"
import OneColumEast from "./OneColumEast"

export default function East() {
  return (
    <div>
      <h2 className="text-center font-semibold my-4">East</h2>
      <div className="flex ml-4">
        <EightColumnEast />
        <FourColumnEast />
        <TwoColumnEast />
        <OneColumEast />
      </div>
    </div>
  )
}
