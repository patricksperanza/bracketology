import React from "react"

export default function TeamChoice() {
  return (
    <div className="table_cell">
      <input className="w-full" list="team-choice" />
      <datalist id="team-choice">
        <option value="Alabama" />
        <option value="FDU" />
        <option value="Michigan State" />
        <option value="Boise State" />
        <option value="Miami Fla" />
        <option value="Indiana" />
        <option value="Iona" />
        <option value="Kentucky" />
        <option value="Rutgers" />
        <option value="UConn" />
        <option value="Vermont" />
        <option value="Missouri" />
        <option value="Missouri" />
        <option value="USC" />
        <option value="Texas" />
        <option value="Princeton" />
      </datalist>
    </div>
  )
}
