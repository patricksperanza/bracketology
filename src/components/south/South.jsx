import EightColumnSouth from "./EightColumnSouth"
import FourColumnSouth from "./FourColumnSouth"
import TwoColumnSouth from "./TwoColumnSouth"
import OneColumSouth from "./OneColumSouth"

import { bracket } from "@/data/bracket"

export default function South() {
  const column = bracket.south.eightColumn

  return (
    <div>
      <h2 className="text-center font-semibold my-4">South</h2>
      <div className="flex ml-4">
        <EightColumnSouth column={column} />
        <FourColumnSouth />
        <TwoColumnSouth />
        <OneColumSouth />
      </div>
    </div>
  )
}
