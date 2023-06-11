import TeamChoice from "./TeamChoice"

export default function Row({ number }) {
  return (
    <div className="flex justify-center">
      <div className="table_cell font-semibold">{number}</div>
      <TeamChoice />
      <TeamChoice />
      <TeamChoice />
      <TeamChoice />
    </div>
  )
}
