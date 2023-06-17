"use client"
import Image from "next/image"
import { getUser } from "@/utils/getUser"
import { useEffect, useState } from "react"

export default function CreatedBy({ currentBracket }) {
  const [creator, setCreator] = useState({})

  useEffect(() => {
    const getCreator = async () => {
      const user = await getUser(currentBracket.creator)
      setCreator(user)
    }

    getCreator()
  }, [])

  console.log(creator)

  return (
    <div className="w-64 h-32 bg-slate-50 rounded drop-shadow my-14">
      <div>
        <h2 className="ml-4 mt-2">Created By</h2>
      </div>
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
          <p className="text-xs">{currentBracket.createdAt}</p>
        </div>
      </div>
    </div>
  )
}
