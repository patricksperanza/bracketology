import Image from "next/image"

export default function Game() {
    return <div className="w-44 h-16 bg-slate-50 rounded shadow">
        {/* Team 1 */}
        <div className="h-8 flex items-center justify-around">
            {/* Team Logo */}
            <Image src="/alabama.svg
            " alt="logo" width={12} height={12}  />
            
            {/* Team Seed and Name */}
            <p className="text-black text-xs flex items-center gap-1 w-24 font-semibold">
                <span className="seed-text">1</span>
                Alabama
            </p>

            {/* Score */}
            <p className="text-sm font-semibold">96</p>
        </div>

        {/* Divider Line */}
        <div className="h-px bg-slate-200"></div>

        {/* Team 2 */}
        <div className="h-8 flex items-center justify-around">
            {/* Team Logo */}
            <Image src="/texas-a&m-cc.svg" alt="logo" width={12} height={12}
             />

             {/* Team Seed and Name */}
             <p className="text-black text-xs flex items-center gap-1 w-24">
                <span className="seed-text">16</span>
                Texas A&M-CC
            </p>

            {/* Score */}
            <p className="text-sm">75</p>
        </div>
    </div>
}