"use client"
import Game from "./Game"
import { useAppContext } from "@/context/AppContext"

export default function Final() {
  const bracket = useAppContext()
  const final1 = bracket.final.finalFour[0]
  const final2 = bracket.final.finalFour[1]
  const championship = bracket.final.championship[0]

  return (
    <div className="mt-[-120px]">
      <div className="flex xl:justify-center gap-6 ml-[330px] xl:ml-0">
        <div>
          <h3 className="text-center text-xs mb-2">Final Four</h3>
          <Game
            name1={final1.name1}
            name2={final1.name2}
            slug1={final1.slug1}
            slug2={final1.slug2}
            score1={final1.score1}
            score2={final1.score2}
            seed1={final1.seed1}
            seed2={final1.seed2}
          />
        </div>
        <div>
          <h3 className="text-center text-xs mb-2 font-semibold">
            CHAMPIONSHIP
          </h3>
          <Game
            name1={championship.name1}
            name2={championship.name2}
            slug1={championship.slug1}
            slug2={championship.slug2}
            score1={championship.score1}
            score2={championship.score2}
            seed1={championship.seed1}
            seed2={championship.seed2}
          />
        </div>
        <div>
          <h3 className="text-center text-xs mb-2">Final Four</h3>
          <Game
            name1={final2.name1}
            name2={final2.name2}
            slug1={final2.slug1}
            slug2={final2.slug2}
            score1={final2.score1}
            score2={final2.score2}
            seed1={final2.seed1}
            seed2={final2.seed2}
          />
        </div>
      </div>
    </div>
  )
}
