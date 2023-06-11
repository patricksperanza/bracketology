import React from "react"
import Image from "next/image"

export default function Team({ name, seed, src }) {
  return (
    <div className="w-44 h-8 bg-slate-50 rounded drop-shadow flex items-center">
      {/* Team Logo */}
      <Image
        src={`/images/${src}.svg`}
        alt="logo"
        width={12}
        height={12}
        className="mx-5"
      />

      {/* Team Seed and Name */}
      <p className="text-black text-[11px] flex items-center gap-1">
        <span className="text-[6px]">{seed}</span>
        {name}
      </p>
    </div>
  )
}
