import PlayIn from "@/components/PlayIn"
import FirstFourOut from "@/components/FirstFourOut"
import Column from "@/components/Column"
import CreatedBy from "@/components/CreatedBy"
import { getBrackets } from "@/utils/getBrackets"

export default async function Home() {
  const allBrackets = await getBrackets()
  const currentBracket = allBrackets[0]
  return (
    <div>
      <div className="mt-7">
        <div className="flex justify-center gap-6">
          <Column columnTitle="south" currentBracket={currentBracket} />
          <Column columnTitle="midwest" currentBracket={currentBracket} />
          <Column columnTitle="east" currentBracket={currentBracket} />
          <Column columnTitle="west" currentBracket={currentBracket} />
        </div>
        <div className="flex justify-center gap-24 my-7">
          <PlayIn currentBracket={currentBracket} />
          <FirstFourOut currentBracket={currentBracket} />
          <CreatedBy currentBracket={currentBracket} />
        </div>
      </div>
    </div>
  )
}
