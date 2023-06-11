import React from "react"
import Image from "next/image"

export default function Team({ name, seed }) {
  return (
    <div className="w-44 h-8 bg-slate-50 rounded drop-shadow flex items-center justify-around">
      {/* Team Logo */}
      <Image src={`/alabama.svg`} alt="logo" width={12} height={12} />

      {/* Team Seed and Name */}
      <p className="text-black text-[11px] flex items-center gap-1 w-24">
        <span className="text-[6px]">{seed}</span>
        {name}
      </p>
    </div>
  )
}
