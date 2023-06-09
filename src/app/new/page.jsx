"use client"
import NewColumn from "@/components/NewColumn"
import NewPlayIn from "@/components/NewPlayIn"
import NewFirstFourOut from "@/components/NewFirstFourOut"
import SubmitButton from "@/components/SubmitButton"

export default function New() {
  return (
    <>
      <div className="mt-10 flex gap-5 justify-center">
        <NewColumn columnTitle="south" />
        <NewColumn columnTitle="midwest" />
        <NewColumn columnTitle="east" />
        <NewColumn columnTitle="west" />
      </div>
      <div className="flex justify-center gap-48 my-7">
        <NewPlayIn />
        <NewFirstFourOut />
      </div>
      <div className="flex justify-center gap-48 my-7">
        <SubmitButton />
      </div>
    </>
  )
}
