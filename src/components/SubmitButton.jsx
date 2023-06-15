import { useContext } from "react"
import { NewBracketContext } from "@/context/NewBracketContext"
import { bracketTemplate } from "@/data/bracket"
import { useRouter } from "next/navigation"

export default function SubmitButton() {
  const { newBracket, setNewBracket } = useContext(NewBracketContext)
  const router = useRouter()
  return (
    <button
      onClick={async () => {
        const res = await fetch("http://localhost:3000/api/bracket/new", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newBracket),
        })
        const data = await res.json()
        console.log(data)
        setNewBracket(bracketTemplate)
        router.push("/")
      }}
      className="border border-slate-400 rounded py-1 px-5 bg-sky-100 hover:bg-sky-300 ease-in-out duration-300 active:shadow-inner"
    >
      Submit Button
    </button>
  )
}
