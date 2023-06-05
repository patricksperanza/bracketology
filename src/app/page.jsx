import South from "@/components/South"
import East from "@/components/East"
import West from "@/components/West"
import Midwest from "@/components/Midwest"
import Final from "@/components/Final"

export default function Home() {
  return (
    <div>
      <h1 className="text-2xl text-center font-semibold py-4  rounded bg-slate-50 drop-shadow">
        Men's NCAA Tournament Bracket
      </h1>

      <div className="overflow-auto">
        <div className="flex justify-between gap-5">
          <South />
          <Midwest />
        </div>

        <div>
          <Final />
        </div>

        <div className="flex justify-between gap-5 mt-10">
          <East />
          <West />
        </div>
      </div>
    </div>
  )
}
