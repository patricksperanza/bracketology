import Image from "next/image"

export default function Game({
  name1,
  name2,
  seed1,
  seed2,
  score1,
  score2,
  slug1,
  slug2,
}) {
  return (
    <div className="w-44 h-16 bg-slate-50 rounded drop-shadow">
      {/* Team 1 */}
      <div className="h-8 flex items-center justify-around">
        {/* Team Logo */}
        <Image src={`/images/${slug1}.svg`} alt="logo" width={12} height={12} />

        {/* Team Seed and Name */}
        <p
          className={`${
            Number(score1) > Number(score2) ? "font-semibold" : ""
          } text-black text-[11px] flex items-center gap-1 w-24`}
        >
          <span className="text-[6px]">{seed1}</span>
          {name1}
        </p>

        {/* Score */}
        <p
          className={`${
            Number(score1) > Number(score2) ? "font-semibold" : ""
          } text-sm`}
        >
          {score1}
        </p>
      </div>

      {/* Divider Line */}
      <div className="h-px bg-slate-200"></div>

      {/* Team 2 */}
      <div className="h-8 flex items-center justify-around">
        {/* Team Logo */}
        <Image src={`/images/${slug2}.svg`} alt="logo" width={12} height={12} />

        {/* Team Seed and Name */}
        <p
          className={`${
            Number(score2) > Number(score1) ? "font-semibold" : ""
          } text-black text-[11px] flex items-center gap-1 w-24`}
        >
          <span className="text-[6px]">{seed2}</span>
          {name2}
        </p>

        {/* Score */}
        <p
          className={`${
            Number(score2) > Number(score1) ? "font-semibold" : ""
          } text-sm`}
        >
          {score2}
        </p>
      </div>
    </div>
  )
}
