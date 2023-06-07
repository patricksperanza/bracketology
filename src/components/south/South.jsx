import EightColumnSouth from "./EightColumnSouth"
import FourColumnSouth from "./FourColumnSouth"
import TwoColumnSouth from "./TwoColumnSouth"
import OneColumSouth from "./OneColumSouth"

export default function South() {
  return (
    <div>
      <h2 className="text-center font-semibold my-4">South</h2>
      <div className="flex ml-4">
        <EightColumnSouth />
        <FourColumnSouth />
        <TwoColumnSouth />
        <OneColumSouth />
      </div>
    </div>
  )
}
