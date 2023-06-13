import { NewBracketContext } from "@/context/NewBracketContext"
import { useContext } from "react"

export default function TeamChoice({ columnTitle, game, team }) {
  const { newBracket, setNewBracket } = useContext(NewBracketContext)

  const handleChange = (e) => {
    console.log(e.target.value)
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
        <option value="Alabama" />
        <option value="FDU" />
        <option value="Michigan State" />
        <option value="Boise State" />
        <option value="Miami Fla" />
        <option value="Indiana" />
        <option value="Iona" />
        <option value="Kentucky" />
        <option value="Rutgers" />
        <option value="UConn" />
        <option value="Vermont" />
        <option value="Missouri" />
        <option value="Missouri" />
        <option value="USC" />
        <option value="Texas" />
        <option value="Princeton" />
      </datalist>
    </div>
  )
}
