import PlayIn from "@/components/PlayIn"
import FirstFourOut from "@/components/FirstFourOut"
import Column from "@/components/Column"

export default function Home() {
  return (
    <div>
      <h1 className="text-2xl text-center font-semibold py-4  rounded bg-slate-50 drop-shadow">
        Men's NCAA Tournament Bracket
      </h1>

      <div className="mt-7">
        <div className="flex justify-center gap-6">
          <Column columnTitle="south" />
          <Column columnTitle="midwest" />
          <Column columnTitle="east" />
          <Column columnTitle="west" />
        </div>
        <div className="flex justify-center gap-48 my-7">
          <PlayIn />
          <FirstFourOut />
        </div>
      </div>
    </div>
  )
}
