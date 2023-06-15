import NewFirstFourOutTeamChoice from "./NewFirstFourOutTeamChoice"

export default function Column() {
  return (
    <div className="flex flex-col items-center gap-3">
      <h2 className="text-center font-semibold my-4">First Four Out</h2>
      <div className="w-44 h-12 bg-slate-50 rounded drop-shadow flex flex-col justify-center gap-2">
        <NewFirstFourOutTeamChoice columnTitle="firstFourOut" game={0} />
      </div>
      <div className="w-44 h-12 bg-slate-50 rounded drop-shadow flex flex-col justify-center gap-2">
        <NewFirstFourOutTeamChoice columnTitle="firstFourOut" game={1} />
      </div>
      <div className="w-44 h-12 bg-slate-50 rounded drop-shadow flex flex-col justify-center gap-2">
        <NewFirstFourOutTeamChoice columnTitle="firstFourOut" game={2} />
      </div>
      <div className="w-44 h-12 bg-slate-50 rounded drop-shadow flex flex-col justify-center gap-2">
        <NewFirstFourOutTeamChoice columnTitle="firstFourOut" game={3} />
      </div>
    </div>
  )
}
