import { useContext, useEffect } from "react"
import { bracketTemplate } from "@/data/bracket"
import { useRouter } from "next/navigation"
import { useSession } from "next-auth/react"
import { produce } from "immer"

import { BracketContext } from "@/context/BracketContext"

export default function SubmitButton() {
  const { newBracket, setNewBracket } = useContext(BracketContext)
  const { data: session } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (newBracket.creator === "" || newBracket.creator === undefined) {
      setNewBracket(
        produce((draft) => {
          draft.creator = session?.user.id
        })
      )
    }
  }, [newBracket])
  console.log(newBracket)
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
