"use client"
import { useState } from "react"
import { bracketTemplate } from "@/data/bracket"

import HeaderRow from "@/components/HeaderRow"
import Row from "@/components/Row"
import TeamChoice from "@/components/TeamChoice"

export default function New() {
  const [formData, setFormData] = useState(bracketTemplate)
  return (
    <div className="mt-10 flex gap-20 justify-center">
      <div>
        <HeaderRow />
        <Row number={1} formData={formData} setFormData={setFormData} />
        <Row number={2} />
        <Row number={3} />
        <Row number={4} />
        <Row number={5} />
        <Row number={6} />
        <Row number={7} />
        <Row number={8} />
        <Row number={9} />
        <Row number={10} />
        <Row number={11} />
        <Row number={12} />
        <Row number={13} />
        <Row number={14} />
        <Row number={15} />
        <Row number={16} />
      </div>
      <div>
        <div className="table_cell font-semibold">Play In</div>
        <TeamChoice />
        <TeamChoice />
        <TeamChoice />
        <TeamChoice />
        <TeamChoice />
        <TeamChoice />
        <TeamChoice />
        <TeamChoice />
        <div className="table_cell font-semibold">First Four Out</div>
        <TeamChoice />
        <TeamChoice />
        <TeamChoice />
        <TeamChoice />
      </div>
    </div>
  )
}
