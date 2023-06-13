import Game from "./Game"
import Entry from "./Entry"

export default function Column({ columnTitle }) {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-center font-semibold my-4">
        {columnTitle[0].toUpperCase() + columnTitle.slice(1)}
      </h2>
      <Entry num1={1} num2={16} game={0} columnTitle={columnTitle} />
      <Entry num1={8} num2={9} game={1} columnTitle={columnTitle} />
      <Entry num1={5} num2={12} game={2} columnTitle={columnTitle} />
      <Entry num1={4} num2={13} game={3} columnTitle={columnTitle} />
      <Entry num1={6} num2={11} game={4} columnTitle={columnTitle} />
      <Entry num1={3} num2={14} game={5} columnTitle={columnTitle} />
      <Entry num1={7} num2={10} game={6} columnTitle={columnTitle} />
      <Entry num1={10} num2={15} game={7} columnTitle={columnTitle} />
    </div>
  )
}
