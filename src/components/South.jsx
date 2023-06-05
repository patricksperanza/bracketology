import EightColumnLeft from "@/components/columns/EightColumnLeft"
import FourColumnLeft from "@/components/columns/FourColumnLeft"
import TwoColumnLeft from "@/components/columns/TwoColumnLeft"
import OneColumLeft from "@/components/columns/OneColumLeft"

import { bracket } from "@/data/bracket"

export default function South() {
  const column = bracket.south.eightColumn

  return (
    <div>
      <h2 className="text-center font-semibold my-4">South</h2>
      <div className="flex ml-4">
        <EightColumnLeft column={column} />
        <FourColumnLeft />
        <TwoColumnLeft />
        <OneColumLeft />
      </div>
    </div>
  )
}
