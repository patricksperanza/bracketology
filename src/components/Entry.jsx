import TeamChoice from "./TeamChoice"

export default function Entry({ num1, num2, columnTitle, game }) {
  return (
    <div className="w-44 h-24 bg-slate-50 rounded drop-shadow flex flex-col justify-center gap-2">
      <div className="flex items-center">
        <span className="px-1 text-xs">{num1}</span>
        <TeamChoice columnTitle={columnTitle} game={game} team="team1" />
      </div>
      <div className="h-px bg-slate-200"></div>
      <div className="flex items-center">
        <span className="px-1 text-xs">{num2}</span>
        <TeamChoice columnTitle={columnTitle} game={game} team="team2" />
      </div>
    </div>
  )
}
