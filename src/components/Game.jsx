import Image from "next/image"
import Team from "./Team"

export default function Game({ name1, name2, seed1, seed2 }) {
  return (
    <div className="w-44 h-16 bg-slate-50 rounded drop-shadow">
      <Team name={name1} seed={seed1} />

      {/* Divider Line */}
      <div className="h-px bg-slate-200"></div>

      {/* Team 2 */}
      <Team name={name2} seed={seed2} />
    </div>
  )
}
