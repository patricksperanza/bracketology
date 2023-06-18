"use client"
import Image from "next/image"
import { getUser } from "@/utils/getUser"
import { useEffect, useState } from "react"
import moment from "moment"

export default function CreatedBy({ currentBracket }) {
  const [creator, setCreator] = useState({})
  let timestamp = new Date(currentBracket.createdAt)
  console.log(timestamp)

  useEffect(() => {
    const getCreator = async () => {
      const author = await getUser(currentBracket.creator)
      setCreator(author)
    }

    getCreator()
  }, [])

  return (
    <div className="w-64 h-32 bg-slate-50 rounded drop-shadow my-14">
      <div>
        <h2 className="ml-4 mt-2">Created By</h2>
      </div>
      {creator !== null && (
        <div className="flex ml-4 mt-4 gap-4">
          <Image
            className="rounded-full cursor-pointer"
            src={creator.image}
            alt="user image"
            width={40}
            height={40}
          />
          <div>
            <h2 className="font-semibold">{creator.username}</h2>
            <p className="text-xs">{timestamp.toDateString()}</p>
          </div>
        </div>
      )}
    </div>
  )
}
