import PlayIn from "@/components/PlayIn"
import FirstFourOut from "@/components/FirstFourOut"
import Column from "@/components/Column"

export default function Home() {
  return (
    <div>
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
