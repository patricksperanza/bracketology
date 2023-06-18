import { BracketContext } from "@/context/BracketContext"
import { useContext } from "react"
import { produce } from "immer"
import { teams } from "@/data/teams"

export default function TeamChoice({ columnTitle, game, team }) {
  const { newBracket, setNewBracket } = useContext(BracketContext)

  const handleChange = (e) => {
    setNewBracket(
      produce((draft) => {
        draft[columnTitle][game][team].name = e.target.value
      })
    )
  }

  return (
    <div className="p-1">
      <input
        className="w-full border"
        list="team-choice"
        value={newBracket[columnTitle][game][team].name}
        onChange={handleChange}
      />
      <datalist id="team-choice">
        {teams.map((team) => (
          <option key={team} value={team} />
        ))}
      </datalist>
    </div>
  )
}
