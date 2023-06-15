import { NewBracketContext } from "@/context/NewBracketContext"
import { useContext } from "react"
import { produce } from "immer"

export default function NewFirstFourOutTeamChoice({ columnTitle, game }) {
  const { newBracket, setNewBracket } = useContext(NewBracketContext)

  const handleChange = (e) => {
    setNewBracket(
      produce((draft) => {
        draft[columnTitle][game].name = e.target.value
      })
    )
  }

  return (
    <div className="p-1">
      <input
        className="w-full border"
        list="team-choice"
        value={newBracket[columnTitle][game].name}
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
