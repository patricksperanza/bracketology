import EightColumnMidwest from "./EightColumnMidwest"
import FourColumnMidwest from "./FourColumnMidwest"
import TwoColumnMidwest from "./TwoColumnMidwest"
import OneColumMidwest from "./OneColumnMidwest"

export default function Midwest() {
  return (
    <div>
      <h2 className="text-center font-semibold my-4">Midwest</h2>
      <div className="flex mr-4">
        <OneColumMidwest />
        <TwoColumnMidwest />
        <FourColumnMidwest />
        <EightColumnMidwest />
      </div>
    </div>
  )
}
